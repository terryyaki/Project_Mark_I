export interface AutomationConfig {
  rootDir: string;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface Problem {
  file: string;
  type: 'error' | 'warning';
  message: string;
  code: string;
}

export interface FileInfo {
  path: string;
  type: 'file' | 'directory';
  lastModified: Date;
}

export interface DependencyMap {
  [filePath: string]: string[];
}

export interface HealthStatus {
  status: 'healthy' | 'warning' | 'error' | 'initializing';
  issues?: string[];
  lastCheck: Date;
}

export interface ProjectState {
  problems: Problem[];
  files: FileInfo[];
  dependencies: DependencyMap;
  health: HealthStatus;
} 