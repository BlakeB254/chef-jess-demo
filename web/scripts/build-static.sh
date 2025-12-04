#!/bin/bash
# Static build script for Cloudflare Pages
# This script removes PayloadCMS dependencies and routes for static export

set -e

echo "🔧 Preparing static build..."

# Backup original files
cp package.json package.json.backup
cp next.config.ts next.config.ts.backup
cp tsconfig.json tsconfig.json.backup

# Completely remove Payload routes (not just rename - TS still finds them)
if [ -d "src/app/(payload)" ]; then
  rm -rf "src/app/(payload)"
  echo "✓ Removed Payload routes"
fi

# Remove payload.config.ts
if [ -f "src/payload.config.ts" ]; then
  rm "src/payload.config.ts"
  echo "✓ Removed Payload config"
fi

# Use static package.json, next.config, and tsconfig
cp package.static.json package.json
cp next.config.static.ts next.config.ts
cp tsconfig.static.json tsconfig.json

echo "📦 Installing dependencies (without Payload)..."
npm install

echo "🏗️ Building static export..."
npm run build

echo "✅ Static build complete! Output in ./out/"

# Note: On Cloudflare, we don't need to restore files since the build is ephemeral
# But for local testing, the git repo still has the original files
