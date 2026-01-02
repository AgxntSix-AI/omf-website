#!/bin/bash
# init.sh - OM Financial Website Development Setup
# https://github.com/AgxntSix-AI/omf-website

set -e

echo "=========================================="
echo "  OM Financial Website - Dev Setup"
echo "=========================================="
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if Bun is installed
if ! command -v bun &> /dev/null; then
    echo -e "${YELLOW}Bun not found. Installing...${NC}"
    curl -fsSL https://bun.sh/install | bash
    source ~/.bashrc 2>/dev/null || source ~/.zshrc 2>/dev/null
fi

echo -e "${GREEN}Using Bun version:${NC} $(bun --version)"
echo ""

# Install dependencies
echo ">>> Installing dependencies..."
bun install

# Generate TanStack Router route tree (if routes exist)
if [ -d "src/routes" ]; then
    echo ""
    echo ">>> Generating route tree..."
    bun run build 2>/dev/null || true
fi

echo ""
echo "=========================================="
echo -e "${GREEN}  Setup Complete!${NC}"
echo "=========================================="
echo ""
echo "Commands:"
echo "  bun run dev        - Start dev server (port 5173)"
echo "  bun run build      - Build for production"
echo "  bun run test       - Run unit tests"
echo "  bun run test:e2e   - Run E2E tests"
echo "  bun run lint       - Run ESLint"
echo ""

# Start dev server
echo ">>> Starting development server..."
echo ">>> Open http://localhost:5173"
echo ""
bun run dev
