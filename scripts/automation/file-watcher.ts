import * as fs from 'fs';
import { stat } from 'fs/promises';
import { join } from 'path';
import { FileInfo } from './types';

export async function watchFileSystem(rootDir: string): Promise<FileInfo[]> {
  const files: FileInfo[] = [];
  const ignoreDirs = ['.git', 'node_modules', '.next', 'dist'];

  async function scanDirectory(dir: string) {
    try {
      const entries = await fs.promises.readdir(dir, { withFileTypes: true });
      
      for (const entry of entries) {
        const path = join(dir, entry.name);
        
        if (ignoreDirs.some(ignoreDir => path.includes(ignoreDir))) {
          continue;
        }

        const stats = await stat(path);
        files.push({
          path,
          type: entry.isDirectory() ? 'directory' : 'file',
          lastModified: stats.mtime
        });

        if (entry.isDirectory()) {
          await scanDirectory(path);
        }
      }
    } catch (error) {
      console.error(`Error scanning directory ${dir}:`, error);
    }
  }

  await scanDirectory(rootDir);
  return files;
} 