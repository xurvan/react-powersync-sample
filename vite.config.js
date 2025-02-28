import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    optimizeDeps: {
        include: ['@powersync/web > js-logger'],
        exclude: ['@journeyapps/wa-sqlite', '@powersync/web', '@powersync/react'],
        esbuildOptions: {
            target: 'esnext'
        }
    },
    build: {
        target: 'esnext'
    },
    plugins: [react()],
    worker: {
        format: 'es'
    }
})
