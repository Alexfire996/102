#!/bin/bash

# Create dist directory
mkdir -p dist

# Copy necessary files
cp index.html dist/
cp styles.css dist/
cp script.js dist/
cp -r lib dist/

echo "Build completed successfully!" 