/**
 * Agent Tools — Voice agent tool definitions for Hafnia Financial
 *
 * These tools are invoked by the AI voice agent during a live call.
 * When the agent determines a human handoff is needed, it calls
 * `transferToAdvisor` which signals the media handler to initiate
 * a Twilio warm transfer.
 */

export interface TransferRequest {
  callSid: string;
  advisorNumber: string;
  reason: string;
  callerName?: string;
  context?: string;
}

export interface TransferResult {
  success: boolean;
  conferenceSid?: string;
  error?: string;
}

export interface AgentToolContext {
  callSid: string;
  callerNumber: string;
  baseUrl: string;
}

const DEFAULT_ADVISOR_NUMBER = process.env.HAFNIA_ADVISOR_NUMBER || '+1XXXXXXXXXX';

/**
 * Available tools the voice agent can invoke during a call.
 * Each tool returns a structured result the agent uses to
 * continue the conversation or confirm the transfer.
 */
export const agentTools = {
  /**
   * Signal the call manager to initiate a Twilio warm transfer.
   * The agent should call this when it determines a human advisor
   * is needed — e.g., complex financial questions, compliance
   * matters, or explicit caller request for a human.
   */
  async transferToAdvisor(
    ctx: AgentToolContext,
    params: {
      reason: string;
      advisorNumber?: string;
      callerName?: string;
      context?: string;
    }
  ): Promise<TransferResult> {
    const transferRequest: TransferRequest = {
      callSid: ctx.callSid,
      advisorNumber: params.advisorNumber || DEFAULT_ADVISOR_NUMBER,
      reason: params.reason,
      callerName: params.callerName,
      context: params.context,
    };

    try {
      const response = await fetch(`${ctx.baseUrl}/api/voice/transfer`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(transferRequest),
      });

      if (!response.ok) {
        const errorBody = await response.text();
        return {
          success: false,
          error: `Transfer API returned ${response.status}: ${errorBody}`,
        };
      }

      const result = await response.json();
      return {
        success: true,
        conferenceSid: result.conferenceSid,
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown transfer error',
      };
    }
  },

  /**
   * Tool definition for AI agent frameworks (e.g., OpenAI function calling).
   * Describes the transferToAdvisor tool so the LLM knows when/how to invoke it.
   */
  getToolDefinitions() {
    return [
      {
        type: 'function' as const,
        function: {
          name: 'transfer_to_advisor',
          description:
            'Transfer the current call to a human financial advisor. Use this when the caller has a complex question about their portfolio, needs compliance-related assistance, or explicitly requests to speak with a human.',
          parameters: {
            type: 'object',
            properties: {
              reason: {
                type: 'string',
                description:
                  'Brief reason for the transfer (e.g., "Caller requesting human advisor for portfolio rebalancing question")',
              },
              advisor_number: {
                type: 'string',
                description:
                  'Optional specific advisor phone number. If omitted, routes to the default advisor line.',
              },
              caller_name: {
                type: 'string',
                description: 'Name of the caller, if known.',
              },
              context: {
                type: 'string',
                description:
                  'Summary of the conversation so far, to brief the advisor before they join.',
              },
            },
            required: ['reason'],
          },
        },
      },
    ];
  },
};
