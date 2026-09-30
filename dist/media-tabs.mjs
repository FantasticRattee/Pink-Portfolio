import { supportingProjectTabs } from './supporting-content.mjs';

export function getProjectMediaTabs(project) {
  if (project.pdfDocuments?.length) return [];
  const videos = project.fullVideos?.length
    ? project.fullVideos
    : project.previewVideo ? [{ src: project.previewVideo, label: project.previewLabel }] : [];
  return [
    ...videos.map((video, index) => ({ id: `video-${index}`, kind: 'video', label: video.label, video })),
    ...(supportingProjectTabs[project.id] || []),
  ];
}

export function getActiveMediaTab(project, selectedId) {
  const tabs = getProjectMediaTabs(project);
  return tabs.find((tab) => tab.id === selectedId) || tabs[0] || null;
}
