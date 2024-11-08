import { FileInfo } from './config/types';
import { writeFile, readFile } from 'fs/promises';
import { join } from 'path';

export class FileRegistry {
  private static instance: FileRegistry;
  private files: Map<string, FileInfo>;
  private registryPath: string;

  private constructor(rootDir: string) {
    this.files = new Map();
    this.registryPath = join(rootDir, '.file-registry.json');
  }

  static getInstance(rootDir: string): FileRegistry {
    if (!FileRegistry.instance) {
      FileRegistry.instance = new FileRegistry(rootDir);
    }
    return FileRegistry.instance;
  }

  async registerFile(fileInfo: FileInfo): Promise<void> {
    this.files.set(fileInfo.path, fileInfo);
    await this.saveRegistry();
  }

  private async saveRegistry(): Promise<void> {
    const data = JSON.stringify(Array.from(this.files.entries()), null, 2);
    await writeFile(this.registryPath, data, 'utf-8');
  }
} 