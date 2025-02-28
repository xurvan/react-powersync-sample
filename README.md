# React PowerSync Sample

This is a very basic sample that demonstrates the minimum code required to integrate PowerSync into
your React app.

## Features

- Create a very simple database
- Create one table in the database
- Create one record in the table
- Select all the queries and display them

## Setup

You can use the [proto](https://moonrepo.dev/proto) command to install the required tools.
Alternatively, you can install **Node.js** and **pnpm** manually and then run the following command:

```bash
pnpm install
```

## Configurations

Please note that the configuration in `vite.config.js` is very important. Here’s the configuration:

```javascript
import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

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
});
```

## Usage

After setting up the project, you can start the development server by running:

```bash
pnpm dev
```
