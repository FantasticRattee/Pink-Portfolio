import { pdfPages } from './pdf-pages.mjs';

const labels = {
  th: { page: 'หน้า', of: 'จาก', open: 'เปิดไฟล์ PDF', zoomIn: 'ขยายหน้าเอกสาร', zoomOut: 'ย่อหน้าเอกสาร', fit: 'พอดีจอ', reader: 'อ่านเอกสาร เลื่อนเพื่อดูหน้าถัดไป' },
  en: { page: 'Page', of: 'of', open: 'Open PDF', zoomIn: 'Zoom in', zoomOut: 'Zoom out', fit: 'Fit to width', reader: 'Document reader. Scroll for the next page.' },
};

export function createPdfReader({ pdfDocument, language, scrollRoot, closeButton }) {
  const documentPages = pdfPages[pdfDocument.src];
  if (!documentPages?.pages.length) throw new Error(`Missing page assets for ${pdfDocument.src}`);
  const copy = labels[language];
  const pages = documentPages.pages;
  const reader = document.createElement('section');
  reader.className = 'pdf-reader';
  reader.setAttribute('aria-label', pdfDocument.label[language]);

  const header = document.createElement('header');
  header.className = 'pdf-reader-header';
  const toolbar = document.createElement('div');
  toolbar.className = 'pdf-reader-toolbar';
  const title = document.createElement('strong');
  title.id = 'pdfReaderTitle';
  title.className = 'pdf-reader-title';
  title.textContent = pdfDocument.sourceName;
  const counter = document.createElement('span');
  counter.className = 'pdf-reader-counter';
  counter.setAttribute('aria-live', 'polite');
  const controls = document.createElement('div');
  controls.className = 'pdf-reader-controls';
  const zoomOut = document.createElement('button');
  zoomOut.type = 'button';
  zoomOut.textContent = '−';
  zoomOut.setAttribute('aria-label', copy.zoomOut);
  const fit = document.createElement('button');
  fit.type = 'button';
  fit.className = 'pdf-reader-fit';
  fit.textContent = copy.fit;
  const zoomIn = document.createElement('button');
  zoomIn.type = 'button';
  zoomIn.textContent = '+';
  zoomIn.setAttribute('aria-label', copy.zoomIn);
  const original = document.createElement('a');
  original.href = pdfDocument.src;
  original.target = '_blank';
  original.rel = 'noopener';
  original.textContent = 'PDF';
  original.setAttribute('aria-label', `${copy.open}: ${pdfDocument.sourceName}`);
  controls.append(zoomOut, fit, zoomIn, original);
  toolbar.append(title, counter, controls);
  header.append(toolbar, closeButton);
  reader.append(header);

  const stream = document.createElement('div');
  stream.className = 'pdf-page-stream';
  stream.tabIndex = 0;
  stream.setAttribute('role', 'region');
  stream.setAttribute('aria-label', copy.reader);
  const list = document.createElement('div');
  list.className = 'pdf-page-list';
  const figures = pages.map((page, index) => {
    const figure = document.createElement('figure');
    figure.className = 'pdf-page';
    figure.dataset.pageNumber = String(index + 1);
    const identity = `${copy.page} ${index + 1} ${copy.of} ${pages.length}`;
    figure.setAttribute('aria-label', identity);
    const image = document.createElement('img');
    image.className = 'pdf-page-image';
    image.src = page.src;
    // Width descriptors represent image width, including portrait documents.
    const smallWidth = Math.round(page.width * 1000 / Math.max(page.width, page.height));
    image.srcset = `${page.smallSrc} ${smallWidth}w, ${page.src} ${page.width}w`;
    image.alt = `${pdfDocument.label[language]} — ${identity}`;
    image.width = page.width;
    image.height = page.height;
    image.loading = index === 0 ? 'eager' : 'lazy';
    image.decoding = 'async';
    if (index === 0) image.fetchPriority = 'high';
    const text = document.createElement('div');
    text.className = 'pdf-page-text';
    text.textContent = page.text;
    figure.append(image, text);
    list.append(figure);
    return figure;
  });
  stream.append(list);
  reader.append(stream);

  let currentPage = 1;
  let zoom = 1;
  let frame = 0;
  let disposed = false;
  const updateCounter = () => {
    counter.textContent = `${String(currentPage).padStart(2, '0')} / ${String(pages.length).padStart(2, '0')}`;
    counter.setAttribute('aria-label', `${copy.page} ${currentPage} ${copy.of} ${pages.length}`);
  };
  const updateSizes = () => {
    const width = Math.max(1, list.clientWidth || scrollRoot.clientWidth);
    figures.forEach((figure) => { figure.querySelector('img').sizes = `${Math.round(width)}px`; });
  };
  const updateCurrentPage = () => {
    frame = 0;
    if (disposed) return;
    const root = scrollRoot.getBoundingClientRect();
    const anchor = Math.min(root.bottom - 24, header.getBoundingClientRect().bottom + 48);
    const next = figures.findIndex((figure) => figure.getBoundingClientRect().bottom > anchor);
    const atEnd = scrollRoot.scrollTop + scrollRoot.clientHeight >= scrollRoot.scrollHeight - 2;
    const pageNumber = atEnd || next < 0 ? pages.length : next + 1;
    if (currentPage !== pageNumber) { currentPage = pageNumber; updateCounter(); }
  };
  const scheduleCounter = () => {
    if (!frame) frame = requestAnimationFrame(updateCurrentPage);
  };
  const setZoom = (value) => {
    const anchor = figures[currentPage - 1];
    const previousTop = anchor.getBoundingClientRect().top;
    zoom = Math.max(1, Math.min(2.5, value));
    list.style.setProperty('--pdf-zoom', String(zoom));
    fit.textContent = zoom === 1 ? copy.fit : `${Math.round(zoom * 100)}%`;
    zoomOut.disabled = zoom === 1;
    zoomIn.disabled = zoom === 2.5;
    updateSizes();
    scrollRoot.scrollTop += anchor.getBoundingClientRect().top - previousTop;
    if (zoom === 1) stream.scrollLeft = 0;
    scheduleCounter();
  };
  zoomOut.addEventListener('click', () => setZoom(zoom - .25));
  zoomIn.addEventListener('click', () => setZoom(zoom + .25));
  fit.addEventListener('click', () => setZoom(1));
  zoomOut.disabled = true;
  updateCounter();

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let revealObserver;
  if (!reduceMotion.matches && 'IntersectionObserver' in window) {
    reader.classList.add('has-page-animation');
    revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { root: scrollRoot, threshold: .01 });
    figures.forEach((figure) => revealObserver.observe(figure));
  }
  scrollRoot.addEventListener('scroll', scheduleCounter, { passive: true });
  const resizeObserver = new ResizeObserver(() => { updateSizes(); scheduleCounter(); });
  resizeObserver.observe(scrollRoot);
  return {
    element: reader,
    header,
    destroy() {
      disposed = true;
      revealObserver?.disconnect();
      resizeObserver.disconnect();
      scrollRoot.removeEventListener('scroll', scheduleCounter);
      if (frame) cancelAnimationFrame(frame);
    },
  };
}
