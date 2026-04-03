# Axle Towing — Monorepo

Private property towing company in Phoenix, AZ. This monorepo contains the public website, client dashboard, and shared operational tooling.

## Structure

```
website/        Main marketing site — axletowing.com (Next.js 16, Vercel)
dashboard/      Client portal dashboard — axle-towing-portal.vercel.app (Next.js 14, Vercel)
docs/           Strategy docs, research, citation reports
scripts/        Automation scripts (email setup, SEMrush, GHL, GBP)
.github/        CI/CD workflows
```

## Quick Start

### Website
```bash
cd website
cp .env.example .env.local   # fill in values
npm install
npm run dev                   # http://localhost:3000
```

### Dashboard
```bash
cd dashboard
cp .env.example .env.local   # fill in values
npm install
npm run dev                   # http://localhost:3001
```

## Deployments

| App | URL | Platform | Project ID |
|-----|-----|----------|------------|
| Website | [axletowing.com](https://axletowing.com) | Vercel | `prj_uBSTE2rWwZFGjWhCaJoPmKUnsUre` |
| Dashboard | [axle-towing-portal.vercel.app](https://axle-towing-portal.vercel.app) | Vercel | `prj_jFmt0eBOf1l9uka9uKtlU0WsM3rC` |

### Deploy Website
```bash
cd website
npx vercel build --prod --token "$VERCEL_TOKEN"
npx vercel deploy --prebuilt --prod --yes --token "$VERCEL_TOKEN"
```

### Deploy Dashboard
```bash
cd dashboard
npx vercel build --prod --token "$VERCEL_TOKEN"
npx vercel deploy --prebuilt --prod --yes --token "$VERCEL_TOKEN"
```

## CI/CD

GitHub Actions runs on every push/PR to `main`:
- Website: TypeScript check + build
- Dashboard: Lint + TypeScript check + build

## Client Info

- **Client:** Elliott (Axle Towing & Impound)
- **Phone:** +18057602314
- **Email:** axletowing@gmail.com
- **Linear Project:** Axel Towing — SEO + Automation

## Tech Stack

| Component | Website | Dashboard |
|-----------|---------|-----------|
| Framework | Next.js 16 | Next.js 14 |
| React | 19 | 18 |
| Styling | Tailwind CSS 4 | Tailwind CSS 3 |
| Database | Supabase | Supabase |
| Hosting | Vercel | Vercel |
