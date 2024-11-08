import { readdir, writeFile, stat } from 'fs/promises';
import { join, relative } from 'path';
import { exec } from 'child_process';

interface FileInfo {
  path: string;
  type: 'file' | 'directory';
  imports?: string[];
  exports?: string[];
}

async function generateProjectStructure(rootDir: string): Promise<string> {
  const ignoreDirs = ['.git', 'node_modules', '.next', 'dist'];
  const structure: FileInfo[] = [];

  async function scan(dir: string) {
    const files = await readdir(dir);
    
    for (const file of files) {
      const path = join(dir, file);
      const stats = await stat(path);
      const relativePath = relative(rootDir, path);

      if (ignoreDirs.some(d => path.includes(d))) continue;

      if (stats.isDirectory()) {
        structure.push({ path: relativePath, type: 'directory' });
        await scan(path);
      } else {
        structure.push({ path: relativePath, type: 'file' });
      }
    }
  }

  await scan(rootDir);
  return formatStructure(structure);
}

export function formatStructure(structure: FileInfo[]): string {
  return structure
    .map(file => `${file.type === 'directory' ? '📁' : '📄'} ${file.path}`)
    .join('\n');
}

export async function scanProject(rootDir: string) {
  return generateProjectStructure(rootDir);
} 