#!/usr/bin/env node
import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT ? Number(process.env.PORT) : 5174;

// Root directories
const ROOT = path.resolve(__dirname, '..');
const PAGES_DIR = path.join(ROOT, 'e2e', 'pages');
const DIST_DIR = path.join(ROOT, 'dist');

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
};

function send(res, status, body, headers = {}) {
  res.writeHead(status, {
    'cache-control': 'no-store',
    ...headers,
  });
  res.end(body);
}

async function serveFile(res, fsPath) {
  try {
    const info = await stat(fsPath);
    if (info.isDirectory()) {
      // Do not list directories; 404
      return send(res, 404, 'Not Found');
    }
    const ext = path.extname(fsPath).toLowerCase();
    const mime = MIME[ext] || 'application/octet-stream';
    const buf = await readFile(fsPath);
    return send(res, 200, buf, { 'content-type': mime });
  } catch (e) {
    return send(res, 404, 'Not Found');
  }
}

const server = http.createServer(async (req, res) => {
  try {
    let urlPath = (req.url || '/').split('?')[0];

    // Security: normalize and prevent path traversal
    urlPath = path.posix.normalize(urlPath);

    // Serve built assets from /dist
    if (urlPath.startsWith('/dist/')) {
      const rel = urlPath.slice('/dist/'.length);
      const fsPath = path.join(DIST_DIR, rel);
      return serveFile(res, fsPath);
    }

    // Default: serve from e2e/pages
    if (urlPath === '/' || urlPath === '') {
      // No index.html guaranteed; respond with 404 guidance
      return send(res, 404, 'No index here. Open /smoke.html or your test page');
    }

    const fsPath = path.join(PAGES_DIR, urlPath);
    return serveFile(res, fsPath);
  } catch (err) {
    return send(res, 500, 'Internal Server Error');
  }
});

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`E2E server listening at http://localhost:${PORT}`);
});
