#!/usr/bin/env python3
"""Render the public portfolio PDFs into responsive WebP page images."""
from __future__ import annotations
import hashlib
import json
import re
import subprocess
import tempfile
from pathlib import Path
from PIL import Image
from pypdf import PdfReader

ROOT = Path(__file__).resolve().parents[1]
PDF_DIR = ROOT / 'dist/assets/pdfs'
OUT_DIR = ROOT / 'dist/assets/pdf-pages'
MANIFEST = ROOT / 'dist/pdf-pages.mjs'
SMALL_EDGE = 1000
LARGE_EDGE = 2000
QUALITY = 90

pdfs = sorted(PDF_DIR.glob('*.pdf'))
if not pdfs:
    raise SystemExit('No public PDFs found')
manifest = {}
for pdf in pdfs:
    stem = pdf.stem
    page_dir = OUT_DIR / stem
    page_dir.mkdir(parents=True, exist_ok=True)
    reader = PdfReader(str(pdf))
    with tempfile.TemporaryDirectory(prefix='portfolio-pdf-') as tmp:
        prefix = Path(tmp) / 'page'
        subprocess.run(['pdftoppm', '-f', '1', '-l', str(len(reader.pages)), '-scale-to', str(LARGE_EDGE), '-jpeg', '-jpegopt', 'quality=95', str(pdf), str(prefix)], check=True, stdout=subprocess.DEVNULL, stderr=subprocess.PIPE)
        rendered = sorted(Path(tmp).glob('page-*.jpg'), key=lambda p: int(p.stem.rsplit('-', 1)[1]))
        if len(rendered) != len(reader.pages):
            raise SystemExit(f'{pdf.name}: rendered {len(rendered)} pages but PDF has {len(reader.pages)}')
        pages = []
        for number, (image_path, page) in enumerate(zip(rendered, reader.pages), start=1):
            with Image.open(image_path) as source:
                image = source.convert('RGB')
            large_name = f'page-{number:02}.webp'
            small_name = f'page-{number:02}-small.webp'
            image.save(page_dir / large_name, 'WEBP', quality=QUALITY, method=6)
            thumb = image.copy()
            thumb.thumbnail((SMALL_EDGE, SMALL_EDGE), Image.Resampling.LANCZOS)
            thumb.save(page_dir / small_name, 'WEBP', quality=QUALITY, method=6)
            pages.append({
                'src': f'assets/pdf-pages/{stem}/{large_name}',
                'smallSrc': f'assets/pdf-pages/{stem}/{small_name}',
                'width': image.width,
                'height': image.height,
                'text': page.extract_text() or '',
            })
    manifest[f'assets/pdfs/{pdf.name}'] = {
        'sha256': hashlib.sha256(pdf.read_bytes()).hexdigest(),
        'pages': pages,
    }

# Stable insertion order follows filename order; JSON.stringify-compatible JS data.
serialized = json.dumps(manifest, ensure_ascii=False, indent=2)
MANIFEST.write_text(f'export const pdfPages = {serialized};\n', encoding='utf-8')
print(f'Wrote {sum(len(v["pages"]) for v in manifest.values())} pages across {len(manifest)} PDFs to {MANIFEST.relative_to(ROOT)}')
