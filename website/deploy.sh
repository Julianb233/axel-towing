#!/usr/bin/env bash
set -euo pipefail

# ============================================
# Axle Towing Website — Railway Deploy Script
# ============================================
# Usage: ./deploy.sh [--prod]
#
# Prerequisites:
#   - Railway CLI installed: npm i -g @railway/cli
#   - Logged in: railway login
#   - Project linked: railway link

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

echo "=== Axle Towing — Railway Deployment ==="
echo ""

# Check Railway CLI is installed
if ! command -v railway &> /dev/null; then
  echo "ERROR: Railway CLI not installed."
  echo "Install with: npm i -g @railway/cli"
  exit 1
fi

# Check if linked to a Railway project
if ! railway status &> /dev/null 2>&1; then
  echo "WARNING: Not linked to a Railway project."
  echo "Run: railway link"
  echo ""
fi

# Step 1: Install dependencies
echo "[1/4] Installing dependencies..."
npm ci --prefer-offline

# Step 2: Build
echo "[2/4] Building Next.js (standalone)..."
npm run build

# Step 3: Verify standalone output
if [ ! -f ".next/standalone/server.js" ]; then
  echo "ERROR: Standalone build not found at .next/standalone/server.js"
  echo "Ensure next.config.ts has output: 'standalone'"
  exit 1
fi

echo "[3/4] Standalone build verified."

# Step 4: Deploy to Railway
echo "[4/4] Deploying to Railway..."
if [ "${1:-}" = "--prod" ]; then
  railway up --detach
  echo ""
  echo "Production deployment triggered!"
else
  railway up --detach
  echo ""
  echo "Deployment triggered!"
fi

echo ""
echo "=== Deployment complete ==="
echo "Check status: railway status"
echo "View logs:    railway logs"
echo "Open app:     railway open"
