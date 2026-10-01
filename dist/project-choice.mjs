import { getProjectMediaTabs } from './media-tabs.mjs';

export function getProjectChoices(project) {
  if (project.collectionChoice) {
    return getProjectMediaTabs(project).map((tab) => ({
      id: tab.id,
      kind: 'collection',
      label: tab.label,
      count: tab.groups.reduce((sum, group) => sum + group.items.length, 0),
    }));
  }
  return (project.pdfDocuments || []).map((document, index) => ({
    id: String(index), kind: 'pdf', index, label: document.label, sourceName: document.sourceName,
  }));
}

export function needsProjectChoice(project) {
  return getProjectChoices(project).length > 1;
}
