# Axle Towing — Website

Main marketing website for Axle Towing, a private property towing company in Phoenix, AZ.

**Live URL:** https://axletowing.com

## Features

- 65+ SEO-optimized blog posts (English & Spanish)
- 30+ location pages covering Phoenix metro area
- Service pages: impound, vehicle relocation, parking enforcement
- Lead capture forms with dispatch integration
- Google Analytics, Tag Manager, reCAPTCHA
- Supabase for dispatch request storage
- Twilio for SMS notifications
- Resend for email notifications

## Setup

```bash
cp .env.example .env.local  # fill in values
npm install
npm run dev
```

## Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4
- Supabase
- Twilio (SMS)
- Resend (email)
- Google reCAPTCHA v3

## Deploy

Site is hosted on **Vercel** (project `axel-towing`, team `ai-acrobatics`). Deploys auto-trigger from pushes to `main`.

```bash
npx vercel build --prod --token "$VERCEL_TOKEN"
npx vercel deploy --prebuilt --prod --yes --token "$VERCEL_TOKEN"
```

Vercel project: `axel-towing` (`prj_uBSTE2rWwZFGjWhCaJoPmKUnsUre`)

## Prospecting Scripts

```bash
npm run scrape:hoas       # Scrape HOA contacts
npm run scrape:pms        # Scrape property managers
npm run scrape:locksmiths # Scrape locksmiths
npm run scrape:mechanics  # Scrape mechanics
npm run enrich            # Enrich lead data
npm run export:csv        # Export to CSV
```

## Environment Variables

Copy `.env.example` to `.env.local` for local development. See `.env.example` for all required variables.
