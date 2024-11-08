import { readFile, writeFile } from 'fs/promises';
import { ProjectState, AutomationConfig } from '../config/types';
import { Logger } from '../utils/logger';
import { updateAIContext } from '../context-updater';

export class DocGenerator {
  private logger: Logger;

  constructor(private config: AutomationConfig) {
    this.logger = Logger.getInstance(); // Remove config argument since getInstance() expects 0 args
  }

  async generateDocs(state: ProjectState) {
    try {
      const docs = await this.formatDocs(state);
      await updateAIContext({ ...state });
      this.logger.info('Documentation updated successfully');
    } catch (error) {
      this.logger.error('Failed to generate documentation', error as Error);
    }
  }

  private async formatDocs(state: ProjectState): Promise<string> {
    return `
# Project Automation Status
Last Updated: ${new Date().toISOString()}

## Current State
- Files: ${state.files.length}
- Problems: ${state.problems.length}
- Health: ${state.health.status}

## Recent Changes
${this.formatChanges(state)}

## Known Issues
${this.formatProblems(state)}
    `;
  }

  private formatChanges(state: ProjectState): string {
    return state.files
      .map(f => `- ${f.path} (${f.lastModified.toISOString()})`)
      .join('\n');
  }

  private formatProblems(state: ProjectState): string {
    return state.problems
      .map(p => `- ${p.file}: ${p.message}`)
      .join('\n');
  }
} 