import { ProjectState } from '../config/types';

export function mergeContextUpdates(
  current: string, 
  update: Partial<ProjectState>
): string {
  const sections = current.split('\n\n');
  const timestamp = new Date().toISOString();
  
  const newContent = [
    `# Project Automation Status (Updated: ${timestamp})`,
    formatState(update),
    formatChanges(update),
    formatProblems(update)
  ].filter(Boolean).join('\n\n');

  return newContent;
}

function formatState(state: Partial<ProjectState>): string {
  const lines = [];
  if (state.files) lines.push(`Files: ${state.files.length}`);
  if (state.problems) lines.push(`Problems: ${state.problems.length}`);
  if (state.health) lines.push(`Health: ${state.health.status}`);
  return lines.join('\n');
}

function formatChanges(state: Partial<ProjectState>): string {
  if (!state.files?.length) return '';
  return '## Recent Changes\n' + state.files
    .map(f => `- ${f.path} (${f.lastModified.toISOString()})`)
    .join('\n');
}

function formatProblems(state: Partial<ProjectState>): string {
  if (!state.problems?.length) return '';
  return '## Known Issues\n' + state.problems
    .map(p => `- ${p.file}: ${p.message}`)
    .join('\n');
} 