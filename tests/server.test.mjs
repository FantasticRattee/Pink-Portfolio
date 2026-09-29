import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { createStaticServer, getListenConfig } from '../server.mjs';

test('deployment config binds to all interfaces and uses the platform port', () => {
  assert.deepEqual(getListenConfig({ envPort: '8080', argPort: '4173' }), {
    port: 8080,
    host: '0.0.0.0',
  });
});

test('local preview keeps its loopback default and accepts a port argument', () => {
  assert.deepEqual(getListenConfig({ envPort: '', argPort: '4300' }), {
    port: 4300,
    host: '127.0.0.1',
  });
  assert.deepEqual(getListenConfig({ envPort: '', argPort: undefined }), {
    port: 4173,
    host: '127.0.0.1',
  });
});

test('local preview serves byte ranges so full videos can seek', async () => {
  const server = createStaticServer(new URL('../dist/', import.meta.url));
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  try {
    const url = `http://127.0.0.1:${server.address().port}/assets/videos/siam-arcade.mp4`;
    const response = await fetch(url, { headers: { Range: 'bytes=0-99' } });
    assert.equal(response.status, 206);
    assert.match(response.headers.get('content-range') || '', /^bytes 0-99\/\d+$/);
    assert.equal((await response.arrayBuffer()).byteLength, 100);
  } finally {
    await new Promise((resolve) => server.close(resolve));
  }
});

test('PDF files open inline and support byte-range loading', async () => {
  const root = await mkdtemp(path.join(tmpdir(), 'pink-portfolio-pdf-'));
  await writeFile(path.join(root, 'work.pdf'), '%PDF-1.4\n');
  const server = createStaticServer(pathToFileURL(`${root}/`));
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  try {
    const url = `http://127.0.0.1:${server.address().port}/work.pdf`;
    const response = await fetch(url, { headers: { Range: 'bytes=0-3' } });
    assert.equal(response.status, 206);
    assert.equal(response.headers.get('content-type'), 'application/pdf');
    assert.equal(response.headers.get('content-range'), 'bytes 0-3/9');
    assert.equal(await response.text(), '%PDF');
  } finally {
    await new Promise((resolve) => server.close(resolve));
    await rm(root, { recursive: true, force: true });
  }
});
