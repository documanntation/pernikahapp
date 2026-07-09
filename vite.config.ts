import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'control-plane-file-server',
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            if (req.url && req.url.includes('/__aistudio_internal_control_plane/fs/read')) {
              const urlObj = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
              const filePathParam = urlObj.searchParams.get('path');
              if (filePathParam) {
                const resolvedPath = path.resolve(process.cwd(), filePathParam);
                if (fs.existsSync(resolvedPath) && fs.statSync(resolvedPath).isFile()) {
                  const ext = path.extname(resolvedPath);
                  let contentType = 'text/plain';
                  if (ext === '.json') {
                    contentType = 'application/json';
                  } else if (ext === '.rules') {
                    contentType = 'text/plain';
                  }
                  res.writeHead(200, { 'Content-Type': contentType });
                  res.end(fs.readFileSync(resolvedPath));
                  return;
                }
              }
              res.writeHead(404, { 'Content-Type': 'text/plain' });
              res.end('File not found');
              return;
            }
            next();
          });
        }
      }
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
