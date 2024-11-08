import { Problem } from './types';
import { readFile } from 'fs/promises';
import { existsSync } from 'fs';

export async function checkCursorProblems(): Promise<Problem[]> {
  const problemsFile = process.env.CURSOR_PROBLEMS_PATH || '.cursor/problems.json';
  
  // Check if file exists first
  if (!existsSync(problemsFile)) {
    return []; // Return empty array if file doesn't exist
  }

  try {
    const data = await readFile(problemsFile, 'utf-8');
    const cursorProblems = JSON.parse(data);

    return cursorProblems.map((p: any) => ({
      file: p.file,
      type: p.severity === 1 ? 'warning' : 'error',
      message: p.message,
      code: p.code
    }));
  } catch (error) {
    // Log but don't throw
    console.warn('No cursor problems file found, skipping problem check');
    return [];
  }
} 