import { projects } from './projects.mjs';
import { cardCenterOffset, offsetFromActive, stepIndex, swipeStep } from './carousel.mjs';
import { expandedDetails, katsumidoriBoard, slideDecks } from './detail-content.mjs';
import { createPdfReader } from './pdf-reader.mjs';
import { getProjectMediaTabs, getActiveMediaTab } from './media-tabs.mjs';

const ui = {
  th: {
    topbar: 'ผลงาน / 15 ชิ้น',
    eyebrow: 'ภาพยนตร์ • รายการ • ความคิดสร้างสรรค์',
    hint: 'ลากหรือเลื่อนเพื่อสำรวจ · ใช้ปุ่มลูกศรได้',
    view: 'ดูรายละเอียด',
    footer: 'ชี้เมาส์เพื่อดู · คลิกเพื่อเปิด',
    about: 'เกี่ยวกับผลงาน',
    role: 'บทบาท',
    previous: 'ก่อนหน้า',
    next: 'ถัดไป',
    cardView: 'ดูผลงาน',
    excerpt: 'คลิปตัวอย่างจากผลงาน',
    fullVideo: 'วิดีโอเต็ม',
    scrollMore: 'เลื่อนลงเพื่ออ่านรายละเอียดต่อ ↓',
    source: 'แหล่งในไฟล์ต้นฉบับ',
    openSlide: 'ขยายสไลด์',
    slide: 'สไลด์',
    deckPrevious: 'สไลด์ก่อนหน้า',
    deckNext: 'สไลด์ถัดไป',
    persona: 'โปรไฟล์ persona',
    proposedOffer: 'เงื่อนไขส่วนลดที่เสนอ',
    spendAtLeast: 'ยอดใช้จ่ายตั้งแต่',
    discount: 'ส่วนลด',
    deckPage: 'หน้า PDF',
    previousAria: 'ผลงานก่อนหน้า',
    nextAria: 'ผลงานถัดไป',
    closeAria: 'ปิดรายละเอียด',
    stageAria: 'ผลงาน เลื่อนด้วยปุ่มลูกศรซ้ายและขวา',
    choosePdf: 'เลือกไฟล์ผลงาน',
    choosePdfDescription: 'Seoul Milk มีทั้งสไลด์ผลงานและรายงานฉบับเต็ม เลือกไฟล์ที่ต้องการอ่าน',
    closePdfChoice: 'ปิดหน้าต่างเลือกเอกสาร',
    openPdf: 'เปิด PDF ในแท็บใหม่',
    publicPdf: 'PDF สำหรับเผยแพร่ โดยปิดรหัสนักศึกษาในไฟล์ที่มีข้อมูลดังกล่าว',
  },
  en: {
    topbar: 'PORTFOLIO / 15 PROJECTS',
    eyebrow: 'FILM • SHOWS • CREATIVE THINKING',
    hint: 'Drag, scroll, or use the arrow keys to explore',
    view: 'View project',
    footer: 'HOVER TO EXPLORE · CLICK TO OPEN',
    about: 'About the project',
    role: 'Contribution',
    previous: 'Previous',
    next: 'Next',
    cardView: 'View project',
    excerpt: 'VIDEO EXCERPT',
    fullVideo: 'FULL VIDEO',
    scrollMore: 'SCROLL FOR MORE DETAILS ↓',
    source: 'SOURCE PAGES',
    openSlide: 'Open full slide',
    slide: 'Slide',
    deckPrevious: 'Previous slide',
    deckNext: 'Next slide',
    persona: 'Persona profiles',
    proposedOffer: 'Proposed discount rules',
    spendAtLeast: 'Spend at least',
    discount: 'Discount',
    deckPage: 'PDF p.',
    previousAria: 'Previous project',
    nextAria: 'Next project',
    closeAria: 'Close project details',
    stageAria: 'Projects. Use the left and right arrow keys to browse.',
    choosePdf: 'Choose a document',
    choosePdfDescription: 'Seoul Milk has a presentation and a full report. Choose the document to read.',
    closePdfChoice: 'Close document chooser',
    openPdf: 'Open PDF in a new tab',
    publicPdf: 'Public PDF copy with student IDs removed where present',
  },
};

const stage = document.querySelector('#stage');
const track = document.querySelector('#stageTrack');
const dialog = document.querySelector('#detailDialog');
const closeDialog = document.querySelector('#closeDialog');
let activePdfReader = null;
let activeGalleryHeader = null;
const detailImageWrap = document.querySelector('#detailImageWrap');
const detailContent = document.querySelector('#detailContent');
const videoChooser = document.querySelector('#videoChooser');
const detailExtras = document.querySelector('#detailExtras');
const number = document.querySelector('#projectCounter');
const category = document.querySelector('#projectCategory');
const title = document.querySelector('#projectTitle');
const teaser = document.querySelector('#projectTeaser');
const detailNumber = document.querySelector('#detailNumber');
const detailCategory = document.querySelector('#detailCategory');
const detailTitle = document.querySelector('#detailTitle');
const detailTeaser = document.querySelector('#detailTeaser');
const detailDescription = document.querySelector('#detailDescription');
const aboutSection = document.querySelector('#aboutSection');
const detailContribution = document.querySelector('#detailContribution');
const contributionSection = document.querySelector('#contributionSection');
const progressFill = document.querySelector('#progressFill');
const languageButton = document.querySelector('#languageButton');
const pdfChoiceDialog = document.querySelector('#pdfChoiceDialog');
const pdfChoiceProject = document.querySelector('#pdfChoiceProject');
const pdfChoiceTitle = document.querySelector('#pdfChoiceTitle');
const pdfChoiceDescription = document.querySelector('#pdfChoiceDescription');
const pdfChoiceOptions = document.querySelector('#pdfChoiceOptions');
const pdfChoiceClose = document.querySelector('#pdfChoiceClose');

let language = 'th';
let activeIndex = 0;
let hoveredIndex = null;
let pointerStartX = null;
let suppressClickUntil = 0;
let lastWheelMove = 0;
let wheelTotal = 0;
let lastTrigger = null;
let selectedPdfIndex = 0;
let selectedMediaTabId = null;

const numberLabel = (index) => `${String(index + 1).padStart(2, '0')} / ${String(projects.length).padStart(2, '0')}`;

function createCard(project, index) {
  const card = document.createElement('button');
  card.type = 'button';
  card.className = 'project-card';
  if (project.cardShape === 'landscape') card.classList.add('is-landscape');
  card.dataset.projectId = project.id;
  card.setAttribute('aria-label', project.title[language]);

  const media = document.createElement('span');
  media.className = 'card-media';
  if (project.image) {
    const img = document.createElement('img');
    img.src = project.image;
    img.alt = '';
    img.loading = index < 3 ? 'eager' : 'lazy';
    img.decoding = 'async';
    media.append(img);
  } else {
    const fallback = document.createElement('span');
    fallback.className = 'card-media-fallback';
    fallback.setAttribute('aria-hidden', 'true');
    media.append(fallback);
  }
  let preview = null;
  if (project.previewVideo) {
    preview = document.createElement('video');
    preview.src = project.previewVideo;
    preview.muted = true;
    preview.loop = true;
    preview.playsInline = true;
    preview.preload = 'none';
    preview.setAttribute('aria-hidden', 'true');
    preview.tabIndex = -1;
    media.append(preview);
  }

  let previewToken = 0;
  const stopPreview = () => {
    previewToken += 1;
    preview?.pause();
    card.classList.remove('is-playing');
    if (preview?.readyState >= 1) {
      try { preview.currentTime = 0; } catch { /* Ignore an unloaded preview. */ }
    }
  };
  const startPreview = () => {
    if (!preview || dialog.open || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const token = ++previewToken;
    preview.play().then(() => {
      if (token === previewToken) card.classList.add('is-playing');
    }).catch(() => {});
  };

  card.append(media);
  let overlay = null;
  if (project.cardTitleOverlay) {
    overlay = document.createElement('span');
    overlay.className = 'card-title-overlay';
    overlay.setAttribute('aria-hidden', 'true');
    card.append(overlay);
  }

  card.addEventListener('pointerenter', () => {
    hoveredIndex = index;
    render();
    startPreview();
  });
  card.addEventListener('pointerleave', () => {
    stopPreview();
    if (hoveredIndex === index) hoveredIndex = null;
    render();
  });
  card.addEventListener('focus', () => {
    if (Math.abs(offsetFromActive(index, activeIndex, projects.length)) > 2) activeIndex = index;
    hoveredIndex = index;
    render();
    startPreview();
  });
  card.addEventListener('blur', () => {
    stopPreview();
    if (hoveredIndex === index) hoveredIndex = null;
    render();
  });
  card.addEventListener('click', () => {
    if (Date.now() < suppressClickUntil) return;
    openProject(index, card);
  });

  return { card, overlay, stopPreview };
}

const cards = projects.map((project, index) => createCard(project, index));
track.append(...cards.map(({ card }) => card));

function render() {
  const widths = cards.map(({ card }) => card.offsetWidth);
  const gap = Math.max(12, Math.min(24, stage.clientWidth * .025));
  const scaleForDistance = (distance) => distance === 0 ? 1.18 : distance === 1 ? .74 : distance === 2 ? .64 : .57;
  cards.forEach(({ card, overlay }, index) => {
    const project = projects[index];
    const distance = offsetFromActive(index, activeIndex, projects.length);
    const absDistance = Math.abs(distance);
    const isHovered = hoveredIndex === index;
    const scale = isHovered ? (distance === 0 ? 1.23 : 1.03) : scaleForDistance(absDistance);
    const offset = cardCenterOffset(index, activeIndex, widths, scaleForDistance, gap);
    card.style.transform = `translate3d(calc(-50% + ${offset}px), -50%, 0) scale(${scale})`;
    card.style.opacity = absDistance > 3 ? '0' : absDistance === 3 ? '.48' : absDistance === 2 ? '.72' : '1';
    card.style.filter = absDistance === 0 || isHovered ? 'none' : 'brightness(.86)';
    card.style.zIndex = isHovered ? '22' : String(16 - absDistance);
    card.style.pointerEvents = absDistance > 3 ? 'none' : 'auto';
    card.classList.toggle('is-hovered', isHovered);
    card.classList.toggle('is-hidden', absDistance > 3);
    card.tabIndex = absDistance > 2 ? -1 : 0;
    card.setAttribute('aria-hidden', absDistance > 3 ? 'true' : 'false');
    card.setAttribute('aria-label', `${project.title[language]} — ${ui[language].cardView}`);
    if (overlay) overlay.textContent = project.title[language];
  });

  const previewIndex = hoveredIndex ?? activeIndex;
  const project = projects[previewIndex];
  number.textContent = numberLabel(previewIndex);
  category.textContent = project.category[language];
  title.textContent = project.title[language];
  teaser.textContent = project.teaser[language];
  progressFill.style.transform = `scaleX(${(activeIndex + 1) / projects.length})`;
}

function showSelectedDetails(index) {
  showProjectDetails(index);
  if (!dialog.open) dialog.showModal();
  detailContent.scrollTop = 0;
  dialog.scrollTop = 0;
}

function showPdfChooser(index, trigger) {
  const project = projects[index];
  lastTrigger = trigger || lastTrigger;
  pdfChoiceProject.textContent = project.title[language];
  pdfChoiceTitle.textContent = ui[language].choosePdf;
  pdfChoiceDescription.textContent = ui[language].choosePdfDescription;
  pdfChoiceClose.setAttribute('aria-label', ui[language].closePdfChoice);
  pdfChoiceOptions.replaceChildren();
  project.pdfDocuments.forEach((pdfDocument, documentIndex) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'pdf-choice-option';
    const label = document.createElement('strong');
    label.textContent = pdfDocument.label[language];
    const filename = document.createElement('span');
    filename.textContent = pdfDocument.sourceName;
    button.append(label, filename);
    button.addEventListener('click', () => {
      pdfChoiceDialog.close();
      selectedPdfIndex = documentIndex;
      showSelectedDetails(index);
    });
    pdfChoiceOptions.append(button);
  });
  clearProjectMedia();
  if (dialog.open) {
    detailImageWrap.querySelector('video')?.pause();
    dialog.close();
  }
  if (!pdfChoiceDialog.open) pdfChoiceDialog.showModal();
  pdfChoiceOptions.querySelector('button')?.focus();
}

function move(step) {
  cards.forEach(({ stopPreview }) => stopPreview());
  activeIndex = stepIndex(activeIndex, step, projects.length);
  selectedMediaTabId = null;
  hoveredIndex = null;
  render();
  if (dialog.open) {
    selectedPdfIndex = 0;
    if (projects[activeIndex].pdfDocuments?.length > 1) {
      showPdfChooser(activeIndex, cards[activeIndex].card);
    } else {
      showSelectedDetails(activeIndex);
    }
  }
  else if (document.activeElement?.classList?.contains('project-card')) {
    cards[activeIndex].card.focus({ preventScroll: true });
  }
}

function clearProjectMedia() {
  detailImageWrap.querySelectorAll('video').forEach((video) => video.pause());
  activePdfReader?.destroy();
  dialog.querySelector('.detail-shell').prepend(closeDialog);
  dialog.querySelector('.detail-media-panel').append(videoChooser);
  activePdfReader?.header.remove();
  activeGalleryHeader?.remove();
  activePdfReader = null;
  activeGalleryHeader = null;
  detailImageWrap.replaceChildren();
}

function renderMediaTabs(project, activeTab) {
  const tabs = getProjectMediaTabs(project);
  videoChooser.replaceChildren();
  videoChooser.hidden = tabs.length < 2;
  videoChooser.setAttribute('role', 'tablist');
  videoChooser.setAttribute('aria-label', language === 'th' ? 'สื่อและไฟล์ประกอบผลงาน' : 'Project media and supporting files');
  tabs.forEach((tab) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.id = `media-tab-${project.id}-${tab.id}`;
    button.dataset.tabId = tab.id;
    button.setAttribute('role', 'tab');
    button.setAttribute('aria-controls', 'detailImageWrap');
    button.textContent = tab.label?.[language] || (project.fullVideos?.length ? ui[language].fullVideo : ui[language].excerpt);
    const selected = activeTab?.id === tab.id;
    button.classList.toggle('is-active', selected);
    button.setAttribute('aria-selected', String(selected));
    button.setAttribute('aria-pressed', String(selected));
    button.tabIndex = selected ? 0 : -1;
    const select = (id) => {
      selectedMediaTabId = id;
      showSelectedDetails(activeIndex);
      videoChooser.querySelector('[aria-selected="true"]')?.focus({ preventScroll: true });
    };
    button.addEventListener('click', () => select(tab.id));
    button.addEventListener('keydown', (event) => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      event.stopPropagation();
      const current = tabs.findIndex((item) => item.id === tab.id);
      const index = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1
        : (current + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
      select(tabs[index].id);
    });
    videoChooser.append(button);
  });
  detailImageWrap.setAttribute('role', 'tabpanel');
  if (activeTab) detailImageWrap.setAttribute('aria-labelledby', `media-tab-${project.id}-${activeTab.id}`);
  else detailImageWrap.removeAttribute('aria-labelledby');
}

function renderBehindScenes(tab) {
  const gallery = document.createElement('div');
  gallery.className = 'behind-scenes-gallery';
  for (const group of tab.groups) {
    const section = document.createElement('section');
    section.className = 'behind-scenes-group';
    section.dataset.groupId = group.id;
    const heading = document.createElement('h3');
    heading.textContent = group.label[language];
    section.append(heading);
    for (const item of group.items) {
      const figure = document.createElement('figure');
      figure.className = 'behind-scenes-item';
      figure.dataset.sourceName = item.sourceName;
      if (item.type === 'video') {
        const video = document.createElement('video');
        video.src = item.src;
        video.poster = item.poster;
        video.width = item.width;
        video.height = item.height;
        video.controls = true;
        video.preload = 'none';
        video.playsInline = true;
        video.setAttribute('aria-label', item.sourceName);
        figure.append(video);
      } else {
        const link = document.createElement('a');
        link.href = item.src;
        link.target = '_blank';
        link.rel = 'noopener';
        const image = document.createElement('img');
        image.src = item.src;
        image.alt = item.sourceName;
        image.width = item.width;
        image.height = item.height;
        image.loading = 'lazy';
        image.decoding = 'async';
        link.append(image);
        figure.append(link);
      }
      const caption = document.createElement('figcaption');
      caption.textContent = item.sourceName;
      figure.append(caption);
      section.append(figure);
    }
    gallery.append(section);
  }
  detailImageWrap.append(gallery);
  activeGalleryHeader = document.createElement('header');
  activeGalleryHeader.className = 'media-tabs-header';
  activeGalleryHeader.append(videoChooser, closeDialog);
  dialog.querySelector('.detail-shell').prepend(activeGalleryHeader);
}

function showProjectMedia(project, mediaIndex = 0) {
  clearProjectMedia();
  videoChooser.replaceChildren();
  const activeTab = getActiveMediaTab(project, selectedMediaTabId);
  const supportingDocument = activeTab?.kind === 'pdf' ? activeTab.document : null;
  if (project.pdfDocuments?.length || supportingDocument) {
    videoChooser.hidden = true;
    const selected = supportingDocument || project.pdfDocuments[mediaIndex] || project.pdfDocuments[0];
    activePdfReader = createPdfReader({ pdfDocument: selected, language, scrollRoot: dialog, closeButton: closeDialog });
    detailImageWrap.append(activePdfReader.element);
    detailImageWrap.removeAttribute('role');
    detailImageWrap.removeAttribute('aria-labelledby');
    dialog.querySelector('.detail-shell').prepend(activePdfReader.header);
    if (supportingDocument) {
      renderMediaTabs(project, activeTab);
      activePdfReader.header.append(videoChooser);
    } else if (project.pdfDocuments.length > 1) {
      const tabs = document.createElement('div');
      tabs.className = 'pdf-tabs';
      project.pdfDocuments.forEach((pdfDocument, index) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.textContent = pdfDocument.label[language];
        button.classList.toggle('is-active', index === mediaIndex);
        button.setAttribute('aria-pressed', index === mediaIndex ? 'true' : 'false');
        button.addEventListener('click', () => {
          selectedPdfIndex = index;
          showProjectMedia(project, index);
          activePdfReader.header.querySelector('.pdf-tabs button.is-active')?.focus({ preventScroll: true });
        });
        tabs.append(button);
      });
      activePdfReader.header.append(tabs);
    }
    dialog.scrollTop = 0;
    return;
  }
  renderMediaTabs(project, activeTab);
  if (activeTab?.kind === 'gallery') {
    renderBehindScenes(activeTab);
  } else if (activeTab?.kind === 'video') {
    const selected = activeTab.video;
    const mediaLabel = selected.label?.[language] || (project.fullVideos?.length ? ui[language].fullVideo : ui[language].excerpt);
    const video = document.createElement('video');
    video.src = selected.src;
    video.poster = project.image || '';
    video.controls = true;
    video.preload = 'none';
    video.playsInline = true;
    video.setAttribute('aria-label', `${mediaLabel}: ${project.title[language]}`);
    const label = document.createElement('span');
    label.className = 'detail-media-label';
    label.textContent = mediaLabel;
    detailImageWrap.append(video, label);
  } else if (project.image) {
    const image = document.createElement('img');
    image.src = project.image;
    image.alt = project.alt?.[language] || project.title[language];
    detailImageWrap.append(image);
  } else {
    const fallback = document.createElement('div');
    fallback.className = 'detail-image-fallback';
    fallback.textContent = project.title[language];
    detailImageWrap.append(fallback);
  }
}

function showProjectDetails(index) {
  const project = projects[index];
  dialog.classList.toggle('is-analytical', ['seoul-milk-critique', 'tee-noi-vs-lucky-suki', 'katsumidori', 'mv-lam-pam-symbolism'].includes(project.id));
  const mediaTab = getActiveMediaTab(project, selectedMediaTabId);
  dialog.classList.toggle('has-pdf', Boolean(project.pdfDocuments?.length || mediaTab?.kind === 'pdf'));
  dialog.classList.toggle('is-gallery', mediaTab?.kind === 'gallery');
  dialog.classList.toggle('is-pdf-only', Boolean(project.pdfOnly));
  detailContent.hidden = Boolean(project.pdfOnly);
  showProjectMedia(project, selectedPdfIndex);
  dialog.setAttribute('aria-labelledby', project.pdfOnly ? 'pdfReaderTitle' : 'detailTitle');
  detailNumber.textContent = numberLabel(index);
  detailCategory.textContent = project.category[language];
  detailTitle.textContent = project.title[language];
  detailTeaser.textContent = project.teaser[language];
  detailDescription.textContent = project.description[language];
  aboutSection.hidden = Boolean(project.hideAbout);
  const role = project.contribution?.[language];
  const roleBullets = project.contributionBullets?.[language];
  contributionSection.hidden = !role && !roleBullets?.length;
  detailContribution.replaceChildren();
  if (roleBullets?.length) {
    const list = document.createElement('ul');
    list.className = 'detail-role-list';
    roleBullets.forEach((text) => {
      const item = document.createElement('li');
      item.textContent = text;
      list.append(item);
    });
    detailContribution.append(list);
  } else if (role) {
    const paragraph = document.createElement('p');
    paragraph.textContent = role;
    detailContribution.append(paragraph);
  }
  if (project.pdfOnly) detailExtras.replaceChildren();
  else renderProjectExtras(project);
}

function renderProjectExtras(project) {
  detailExtras.replaceChildren();
  if (project.id === 'katsumidori') detailExtras.append(createKatsumidoriBoard());
  if (project.id === 'tee-noi-vs-lucky-suki' && !project.pdfDocuments?.length) detailExtras.append(createSlideViewer(project, slideDecks[project.id]));
  const expanded = expandedDetails[project.id];
  if (expanded) {
    const article = document.createElement('div');
    article.className = 'detail-article-grid';
    for (const section of expanded.sections) {
      const block = document.createElement('section');
      block.className = 'detail-article-block';
      if (section.bullets?.length > 4) block.classList.add('is-wide');
      const heading = document.createElement('h3');
      heading.textContent = section.heading[language];
      block.append(heading);
      if (section.text) {
        const paragraph = document.createElement('p');
        paragraph.textContent = section.text[language];
        block.append(paragraph);
      }
      if (section.bullets?.length) {
        const list = document.createElement('ul');
        for (const point of section.bullets) {
          const item = document.createElement('li');
          item.textContent = point[language];
          if (point.children?.length) {
            const nestedList = document.createElement('ul');
            nestedList.className = 'detail-sub-bullets';
            for (const child of point.children) {
              const nestedItem = document.createElement('li');
              nestedItem.textContent = child[language];
              nestedList.append(nestedItem);
            }
            item.append(nestedList);
          }
          list.append(item);
        }
        block.append(list);
      }
      if (section.images?.length) {
        const pages = document.createElement('div');
        pages.className = 'production-pages';
        for (const page of section.images) {
          const link = document.createElement('a');
          link.href = page.src;
          link.target = '_blank';
          link.rel = 'noopener';
          const image = document.createElement('img');
          image.src = page.src;
          image.alt = page.alt[language];
          image.width = page.width;
          image.height = page.height;
          image.loading = 'lazy';
          link.append(image);
          pages.append(link);
        }
        block.append(pages);
      }
      article.append(block);
    }
    detailExtras.append(article);
    const source = document.createElement('p');
    source.className = 'detail-source-note';
    source.textContent = `${ui[language].source}: ${expanded.source[language]}`;
    detailExtras.append(source);
  }
  if (project.id === 'katsumidori' && !project.pdfDocuments?.length) detailExtras.append(createSlideViewer(project, slideDecks[project.id]));
  detailExtras.hidden = detailExtras.childElementCount === 0;
  if (!detailExtras.hidden) {
    const close = document.createElement('button');
    close.type = 'button';
    close.className = 'extras-close';
    close.textContent = `${ui[language].closeAria} ×`;
    close.addEventListener('click', () => dialog.close());
    detailExtras.append(close);
  }
}

function createKatsumidoriBoard() {
  const board = document.createElement('section');
  board.className = 'katsu-board';
  const title = document.createElement('h3');
  title.textContent = katsumidoriBoard.title[language];
  const note = document.createElement('p');
  note.className = 'katsu-note';
  note.textContent = katsumidoriBoard.note[language];
  const painPoint = document.createElement('p');
  painPoint.className = 'katsu-pain';
  painPoint.textContent = katsumidoriBoard.painPoint[language];
  board.append(title, note, painPoint);

  const personaHeading = document.createElement('h4');
  personaHeading.textContent = ui[language].persona;
  board.append(personaHeading);
  const grid = document.createElement('div');
  grid.className = 'persona-grid';
  for (const persona of katsumidoriBoard.personas) {
    const card = document.createElement('article');
    card.className = 'persona-card';
    const head = document.createElement('div');
    head.className = 'persona-head';
    const name = document.createElement('h5');
    name.textContent = persona.name[language];
    const page = document.createElement('span');
    page.textContent = `${ui[language].deckPage} ${persona.sourcePage}`;
    head.append(name, page);
    const age = document.createElement('p');
    age.className = 'persona-age';
    age.textContent = persona.age[language];
    const stats = document.createElement('dl');
    for (const stat of persona.stats) {
      const row = document.createElement('div');
      const term = document.createElement('dt');
      term.textContent = stat.label[language];
      const value = document.createElement('dd');
      value.textContent = stat.value;
      row.append(term, value);
      stats.append(row);
    }
    card.append(head, age, stats);
    grid.append(card);
  }
  board.append(grid);

  const offerHeading = document.createElement('h4');
  offerHeading.textContent = ui[language].proposedOffer;
  const offerChart = document.createElement('div');
  offerChart.className = 'offer-chart';
  for (const offer of katsumidoriBoard.offers) {
    const row = document.createElement('div');
    row.className = 'offer-row';
    const label = document.createElement('span');
    label.textContent = `${ui[language].spendAtLeast} ฿${offer.spend.toLocaleString('en-US')}`;
    const barArea = document.createElement('div');
    barArea.className = 'offer-bar-area';
    const bar = document.createElement('span');
    bar.className = 'offer-bar';
    bar.style.width = `${(offer.discount / 12) * 100}%`;
    barArea.append(bar);
    const value = document.createElement('strong');
    value.textContent = `${offer.discount}%`;
    row.append(label, barArea, value);
    offerChart.append(row);
  }
  const scale = document.createElement('p');
  scale.className = 'offer-scale';
  scale.textContent = `0–12% · ${ui[language].discount} · ${ui[language].deckPage} 4`;
  board.append(offerHeading, offerChart, scale);
  return board;
}

function createSlideViewer(project, deck) {
  const viewer = document.createElement('section');
  viewer.className = 'slide-viewer';
  viewer.tabIndex = 0;
  const heading = document.createElement('h3');
  heading.textContent = deck.heading[language];
  const toolbar = document.createElement('div');
  toolbar.className = 'slide-toolbar';
  const previous = document.createElement('button');
  previous.type = 'button';
  previous.textContent = '←';
  previous.setAttribute('aria-label', ui[language].deckPrevious);
  const count = document.createElement('span');
  const next = document.createElement('button');
  next.type = 'button';
  next.textContent = '→';
  next.setAttribute('aria-label', ui[language].deckNext);
  toolbar.append(previous, count, next);
  const stage = document.createElement('div');
  stage.className = 'slide-stage';
  const image = document.createElement('img');
  image.loading = 'lazy';
  const open = document.createElement('a');
  open.target = '_blank';
  open.rel = 'noopener noreferrer';
  open.textContent = `${ui[language].openSlide} ↗`;
  stage.append(image, open);
  const thumbnails = document.createElement('div');
  thumbnails.className = 'slide-thumbnails';
  const buttons = deck.pages.map((page, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.setAttribute('aria-label', `${ui[language].slide} ${index + 1}, ${ui[language].deckPage} ${page.page}`);
    const thumb = document.createElement('img');
    thumb.src = page.src;
    thumb.alt = '';
    thumb.loading = 'lazy';
    button.append(thumb);
    thumbnails.append(button);
    return button;
  });
  let current = 0;
  const show = (index) => {
    current = Math.max(0, Math.min(deck.pages.length - 1, index));
    const page = deck.pages[current];
    image.src = page.src;
    image.alt = `${project.title[language]} — ${ui[language].slide} ${current + 1}`;
    open.href = page.src;
    count.textContent = `${String(current + 1).padStart(2, '0')} / ${String(deck.pages.length).padStart(2, '0')} · ${ui[language].deckPage} ${page.page}`;
    previous.disabled = current === 0;
    next.disabled = current === deck.pages.length - 1;
    buttons.forEach((button, buttonIndex) => {
      button.classList.toggle('is-active', buttonIndex === current);
      button.setAttribute('aria-current', buttonIndex === current ? 'true' : 'false');
    });
  };
  previous.addEventListener('click', () => show(current - 1));
  next.addEventListener('click', () => show(current + 1));
  buttons.forEach((button, index) => button.addEventListener('click', () => show(index)));
  viewer.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      event.stopPropagation();
      show(current + (event.key === 'ArrowRight' ? 1 : -1));
    }
  });
  viewer.append(heading, toolbar, stage, thumbnails);
  show(0);
  return viewer;
}

function openProject(index, trigger) {
  cards.forEach(({ stopPreview }) => stopPreview());
  activeIndex = index;
  hoveredIndex = null;
  lastTrigger = trigger || document.activeElement;
  selectedPdfIndex = 0;
  selectedMediaTabId = null;
  render();
  if (projects[index].pdfDocuments?.length > 1) {
    showPdfChooser(index, lastTrigger);
  } else {
    showSelectedDetails(index);
  }
}

function setLanguage(next) {
  language = next;
  document.documentElement.lang = language;
  document.title = language === 'th' ? 'อรรถพร — Portfolio' : 'Adtaporn — Portfolio';
  document.querySelector('.wordmark').firstChild.textContent = language === 'th' ? 'อรรถพร' : 'Adtaporn';
  document.querySelector('.wordmark').setAttribute('aria-label', language === 'th' ? 'กลับไปหน้าแรก' : 'Back to the beginning');
  document.querySelector('.gallery').setAttribute('aria-label', language === 'th' ? 'ผลงาน' : 'Projects');
  document.querySelector('meta[name="description"]').content = language === 'th'
    ? 'ผลงานภาพยนตร์ รายการ สารคดี และงานสื่อของอรรถพร อัสสะบำรุงรัตน์'
    : 'Films, shows, documentaries, and media work by Adtaporn Assabamrungrat.';
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    element.textContent = ui[language][element.dataset.i18n];
  });
  languageButton.textContent = language === 'th' ? 'EN' : 'TH';
  languageButton.setAttribute('aria-label', language === 'th' ? 'Switch to English' : 'เปลี่ยนเป็นภาษาไทย');
  document.querySelector('#previousButton').setAttribute('aria-label', ui[language].previousAria);
  document.querySelector('#nextButton').setAttribute('aria-label', ui[language].nextAria);
  document.querySelector('#closeDialog').setAttribute('aria-label', ui[language].closeAria);
  detailContent.setAttribute('aria-label', language === 'th' ? 'รายละเอียดผลงาน เลื่อนลงเพื่ออ่านต่อ' : 'Project details. Scroll down to read more.');
  stage.setAttribute('aria-label', ui[language].stageAria);
  render();
  if (dialog.open) showProjectDetails(activeIndex);
  if (pdfChoiceDialog.open) showPdfChooser(activeIndex, lastTrigger);
}

document.querySelector('#previousButton').addEventListener('click', () => move(-1));
document.querySelector('#nextButton').addEventListener('click', () => move(1));
document.querySelector('#detailPrevious').addEventListener('click', () => move(-1));
document.querySelector('#detailNext').addEventListener('click', () => move(1));
document.querySelector('#detailButton').addEventListener('click', (event) => openProject(hoveredIndex ?? activeIndex, event.currentTarget));
document.querySelector('#closeDialog').addEventListener('click', () => dialog.close());
pdfChoiceClose.addEventListener('click', () => pdfChoiceDialog.close());
languageButton.addEventListener('click', () => setLanguage(language === 'th' ? 'en' : 'th'));

dialog.addEventListener('close', () => {
  if (dialog.open || pdfChoiceDialog.open) return;
  clearProjectMedia();
  detailImageWrap.querySelector('video')?.pause();
  if (lastTrigger?.isConnected) lastTrigger.focus({ preventScroll: true });
});

pdfChoiceDialog.addEventListener('close', () => {
  if (dialog.open) return;
  if (lastTrigger?.isConnected) lastTrigger.focus({ preventScroll: true });
});

pdfChoiceDialog.addEventListener('click', (event) => {
  if (event.target === pdfChoiceDialog) pdfChoiceDialog.close();
});

detailImageWrap.addEventListener('play', (event) => {
  detailImageWrap.querySelectorAll('video').forEach((video) => { if (video !== event.target) video.pause(); });
}, true);

dialog.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});

document.addEventListener('keydown', (event) => {
  if (pdfChoiceDialog.open) return;
  if (event.target?.closest('.pdf-reader, .pdf-reader-header, #videoChooser')) return;
  if (event.altKey || event.ctrlKey || event.metaKey) return;
  if (['INPUT', 'TEXTAREA', 'SELECT', 'VIDEO', 'IFRAME'].includes(event.target?.tagName) || event.target?.isContentEditable) return;
  if (event.key === 'ArrowLeft') { event.preventDefault(); move(-1); }
  if (event.key === 'ArrowRight') { event.preventDefault(); move(1); }
  if (!dialog.open && document.activeElement === stage && (event.key === 'Enter' || event.key === ' ')) {
    event.preventDefault();
    openProject(activeIndex, stage);
  }
});

stage.addEventListener('wheel', (event) => {
  if (dialog.open) return;
  event.preventDefault();
  const delta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
  wheelTotal += delta;
  if (Math.abs(wheelTotal) < 48 || Date.now() - lastWheelMove < 280) return;
  move(Math.sign(wheelTotal));
  wheelTotal = 0;
  lastWheelMove = Date.now();
}, { passive: false });

stage.addEventListener('pointerdown', (event) => {
  if (event.button !== 0) return;
  pointerStartX = event.clientX;
});

stage.addEventListener('pointerup', (event) => {
  if (pointerStartX === null) return;
  const step = swipeStep(event.clientX - pointerStartX);
  pointerStartX = null;
  if (step !== 0) {
    suppressClickUntil = Date.now() + 350;
    move(step);
  }
});

stage.addEventListener('pointercancel', () => { pointerStartX = null; });
window.addEventListener('resize', render);

setLanguage('th');
