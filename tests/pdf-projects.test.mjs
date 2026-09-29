import test from 'node:test';
import assert from 'node:assert/strict';
import { open } from 'node:fs/promises';
import { projects } from '../dist/projects.mjs';

const expected = {
  'seoul-milk-critique': ['seoul-milk-presentation.pdf', 'seoul-milk-full-report.pdf'],
  'tee-noi-vs-lucky-suki': ['tee-noi-lucky-suki.pdf'],
  katsumidori: ['katsumidori.pdf'],
  'mv-lam-pam-symbolism': ['mv-lam-pam-analysis.pdf'],
  'jane-interview': ['jane-story.pdf'],
};

test('requested works open real PDF documents, with two choices for Seoul Milk', async () => {
  for (const [id, filenames] of Object.entries(expected)) {
    const project = projects.find((item) => item.id === id);
    assert.ok(project, `${id} project is missing`);
    assert.deepEqual(project.pdfDocuments?.map(({ src }) => src), filenames.map((name) => `assets/pdfs/${name}`));
    for (const document of project.pdfDocuments) {
      assert.ok(document.label?.th && document.label?.en, `${id} needs bilingual document labels`);
      const file = await open(new URL(`../dist/${document.src}`, import.meta.url));
      try {
        const header = Buffer.alloc(5);
        await file.read(header, 0, 5, 0);
        assert.equal(header.toString(), '%PDF-', `${document.src} must be a PDF`);
      } finally {
        await file.close();
      }
    }
  }
});
