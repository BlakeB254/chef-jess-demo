#!/bin/bash
# Static build script for Cloudflare Pages
# This script removes PayloadCMS dependencies and routes for static export

set -e

echo "🔧 Preparing static build..."

# Backup original files
cp package.json package.json.backup
cp next.config.ts next.config.ts.backup

# Move Payload routes out of the way
if [ -d "src/app/(payload)" ]; then
  mv "src/app/(payload)" "src/app/_payload_disabled"
  echo "✓ Disabled Payload routes"
fi

# Remove payload.config.ts temporarily
if [ -f "src/payload.config.ts" ]; then
  mv "src/payload.config.ts" "src/payload.config.ts.backup"
  echo "✓ Disabled Payload config"
fi

# Use static package.json and config
cp package.static.json package.json
cp next.config.static.ts next.config.ts

echo "📦 Installing dependencies (without Payload)..."
npm install

echo "🏗️ Building static export..."
npm run build

echo "✅ Static build complete! Output in ./out/"

# Restore original files (for local dev)
mv package.json.backup package.json
mv next.config.ts.backup next.config.ts

if [ -d "src/app/_payload_disabled" ]; then
  mv "src/app/_payload_disabled" "src/app/(payload)"
fi

if [ -f "src/payload.config.ts.backup" ]; then
  mv "src/payload.config.ts.backup" "src/payload.config.ts"
fi

echo "✓ Restored original configuration"
