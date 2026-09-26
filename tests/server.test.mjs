import test from 'node:test';
import assert from 'node:assert/strict';
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
