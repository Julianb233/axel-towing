# Axle Towing — Client Dashboard

Client-facing portal for Elliott's towing business. Shows project progress, SEO stats, content calendar, meetings, and services.

**Live URL:** https://axle-towing-portal.vercel.app

## Pages

| Route | Description |
|-------|-------------|
| `/` | Overview dashboard with stats and activity feed |
| `/calendar` | Content calendar and upcoming events |
| `/campaigns` | Marketing campaigns tracker |
| `/changelog` | Project changelog (what was shipped) |
| `/crm` | CRM pipeline view |
| `/invoicing` | Invoice management |
| `/meetings` | Meeting notes and recordings |
| `/merch` | Merchandise catalog |
| `/needs` | "What We Need From You" action items |
| `/services` | Services overview |

## Setup

```bash
cp .env.example .env.local  # fill in values
npm install
npm run dev
```

## Stack

- Next.js 14 (App Router)
- React 18
- Tailwind CSS 3
- Anthropic Claude (chatbot)
- Supabase (data storage)
- Framer Motion (animations)
- Lucide React (icons)

## Deploy

```bash
npx vercel build --prod --token "$VERCEL_TOKEN"
npx vercel deploy --prebuilt --prod --yes --token "$VERCEL_TOKEN"
```

Vercel project: `axle-towing-portal` (`prj_jFmt0eBOf1l9uka9uKtlU0WsM3rC`)
