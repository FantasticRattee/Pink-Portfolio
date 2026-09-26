import { createServer } from 'node:http';
import { createReadStream } from 'node:fs';
import { stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const contentTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.mp4': 'video/mp4',
};

function parseRange(value, size) {
  const match = /^bytes=(\d*)-(\d*)$/.exec(value || '');
  if (!match || (!match[1] && !match[2])) return null;
  const start = match[1] ? Number(match[1]) : Math.max(0, size - Number(match[2]));
  const end = match[1] && match[2] ? Number(match[2]) : size - 1;
  if (!Number.isSafeInteger(start) || !Number.isSafeInteger(end) || start < 0 || end < start || start >= size) return null;
  return { start, end: Math.min(end, size - 1) };
}

export function createStaticServer(rootUrl = new URL('./dist/', import.meta.url)) {
  const root = path.resolve(fileURLToPath(rootUrl));
  return createServer(async (request, response) => {
    if (request.method !== 'GET' && request.method !== 'HEAD') {
      response.writeHead(405, { Allow: 'GET, HEAD' }).end();
      return;
    }

    let file;
    try {
      const url = new URL(request.url || '/', 'http://localhost');
      const pathname = decodeURIComponent(url.pathname);
      file = path.resolve(root, `.${pathname === '/' ? '/index.html' : pathname}`);
      const relative = path.relative(root, file);
      if (relative.startsWith('..') || path.isAbsolute(relative)) {
        response.writeHead(403).end();
        return;
      }
    } catch {
      response.writeHead(400).end();
      return;
    }

    let fileStat;
    try {
      fileStat = await stat(file);
      if (!fileStat.isFile()) throw new Error('not a file');
    } catch {
      response.writeHead(404).end();
      return;
    }

    const baseHeaders = {
      'Content-Type': contentTypes[path.extname(file).toLowerCase()] || 'application/octet-stream',
      'Accept-Ranges': 'bytes',
      'Cache-Control': 'no-cache',
    };
    const requestedRange = request.headers.range;
    const range = requestedRange ? parseRange(requestedRange, fileStat.size) : null;
    if (requestedRange && !range) {
      response.writeHead(416, { ...baseHeaders, 'Content-Range': `bytes */${fileStat.size}` }).end();
      return;
    }
    const start = range?.start ?? 0;
    const end = range?.end ?? fileStat.size - 1;
    const headers = {
      ...baseHeaders,
      'Content-Length': String(end - start + 1),
      ...(range ? { 'Content-Range': `bytes ${start}-${end}/${fileStat.size}` } : {}),
    };
    response.writeHead(range ? 206 : 200, headers);
    if (request.method === 'HEAD') {
      response.end();
      return;
    }
    createReadStream(file, { start, end }).pipe(response);
  });
}

export function getListenConfig({ envPort = process.env.PORT, argPort = process.argv[2] } = {}) {
  const hasPlatformPort = envPort !== undefined && envPort !== '';
  return {
    port: Number(hasPlatformPort ? envPort : (argPort || 4173)),
    host: hasPlatformPort ? '0.0.0.0' : '127.0.0.1',
  };
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const { port, host } = getListenConfig();
  const server = createStaticServer();
  server.listen(port, host, () => {
    const address = server.address();
    process.stdout.write(`Portfolio preview: http://${host}:${address.port}/\n`);
  });
}
