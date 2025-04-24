#!/bin/bash

# Create dist directory
mkdir -p dist
mkdir -p dist/assets/images
mkdir -p dist/css
mkdir -p dist/js

# Copy HTML files
cp index.html dist/

# Copy CSS files
cp styles.css dist/css/
cp *.css dist/css/

# Copy JavaScript files
cp script.js dist/js/
cp -r lib dist/js/

# Copy images
cp -r assets/images/* dist/assets/images/

# Copy any other assets
cp -r assets/* dist/assets/ 2>/dev/null || true

echo "Build completed successfully!" 