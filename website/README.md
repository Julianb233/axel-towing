# Axle Towing & Impound — Website

Next.js 16 website for Axle Towing & Impound, deployed on Railway.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Deployment (Railway)

The site is deployed on Railway using Nixpacks with Next.js standalone output.

```bash
# Quick deploy
./deploy.sh

# Manual
npm run build
railway up --detach
```

### Railway Configuration

- `railway.toml` — Railway service config (start command, health check, port)
- `nixpacks.toml` — Build configuration (Node 20, npm ci, standalone output)
- Health check: `/api/health`
- Port: 3000

### Environment Variables

Copy `.env.example` to `.env.local` for local development. Set the same variables in Railway dashboard for production.

## Tech Stack

- Next.js 16 (App Router, standalone output)
- Tailwind CSS 4
- Supabase (dispatch storage)
- Resend (email notifications)
- Twilio (SMS dispatch)
- Railway (hosting)
