#!/bin/bash

# Create dist directory
mkdir -p dist

# Copy necessary files
cp index.html dist/
cp styles.css dist/
cp script.js dist/
cp -r assets dist/
cp -r lib dist/ 2>/dev/null || true

# Ensure proper permissions
chmod -R 755 dist

echo "Build completed successfully!" 