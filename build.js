import { mkdir, cp } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function build() {
    try {
        // Create dist directory
        await mkdir('dist', { recursive: true });

        // Copy necessary files
        const filesToCopy = [
            'index.html',
            'styles.css',
            'script.js',
            'node_modules/animejs/lib/anime.min.js'
        ];

        for (const file of filesToCopy) {
            await cp(join(__dirname, file), join(__dirname, 'dist', file.includes('node_modules') ? 'anime.min.js' : file), { recursive: true });
        }

        console.log('Build completed successfully!');
    } catch (error) {
        console.error('Build failed:', error);
        process.exit(1);
    }
}

build(); 