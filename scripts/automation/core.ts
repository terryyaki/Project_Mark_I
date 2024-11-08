import { watch } from 'fs';
import { join } from 'path';
import { Problem, FileInfo, ProjectState, AutomationConfig } from './types';
import { Logger } from './utils/logger';
import { checkCursorProblems } from './problem-checker';
import { watchFileSystem } from './file-watcher';
import { checkHealth } from './health-checker';

export class ProjectAutomation {
  private state: ProjectState;
  private logger: Logger;
  private watchers: Array<() => void> = [];

  constructor(private config: AutomationConfig) {
    this.logger = Logger.getInstance();
    this.state = this.getInitialState();
  }

  async start() {
    try {
      this.logger.info('🚀 Starting Project Automation...');
      
      await this.initialize();
      this.startWatchers();
      
      this.logger.info('✅ Automation system running');
    } catch (error) {
      this.logger.error('Failed to start automation', error as Error);
      throw error;
    }
  }

  private startWatchers() {
    // Watch the root directory
    const watcher = watch(this.config.rootDir, { recursive: true }, 
      (eventType, filename) => {
        if (filename) {
          this.handleFileChange(eventType, filename);
        }
    });

    this.watchers.push(() => watcher.close());
  }

  // Add cleanup method
  async stop() {
    this.watchers.forEach(cleanup => cleanup());
    this.watchers = [];
  }

  private getInitialState(): ProjectState {
    return {
      problems: [],
      files: [],
      dependencies: {},
      health: {
        status: 'initializing',
        lastCheck: new Date()
      }
    };
  }

  private async initialize() {
    const state = await this.initializeState();
    this.updateState(state);
  }

  private async initializeState() {
    const [problems, files, health] = await Promise.all([
      checkCursorProblems(),
      watchFileSystem(this.config.rootDir),
      checkHealth()
    ]);

    return { problems, files, health, dependencies: {} };
  }

  private startHealthChecks() {
    setInterval(async () => {
      const health = await checkHealth();
      this.updateState({ health });
    }, 5000);
  }

  private monitorProblems() {
    setInterval(async () => {
      const problems = await checkCursorProblems();
      this.updateState({ problems });
    }, 3000);
  }

  private updateState(update: Partial<ProjectState>) {
    this.state = { ...this.state, ...update };
  }

  public getState(): ProjectState {
    return { ...this.state };
  }

  private async handleFileChange(event: string, filename: string) {
    this.logger.info(`File ${event}: ${filename}`);
    
    try {
      const files = await watchFileSystem(this.config.rootDir);
      this.updateState({ files });
      
      // Trigger health check
      const health = await checkHealth();
      this.updateState({ health });
      
    } catch (error) {
      this.logger.error('Error handling file change:', error as Error);
    }
  }
} 