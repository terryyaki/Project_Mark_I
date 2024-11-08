import { readFile, writeFile } from 'fs/promises';

export async function readContext(path: string): Promise<string> {
  try {
    return await readFile(path, 'utf-8');
  } catch (error) {
    console.error(`Failed to read context from ${path}:`, error);
    return '';
  }
}

export async function writeContext(path: string, content: string): Promise<void> {
  try {
    await writeFile(path, content, 'utf-8');
  } catch (error) {
    console.error(`Failed to write context to ${path}:`, error);
  }
} 