import { join } from 'path';
import { readContext, writeContext } from './utils/file-utils';
import { mergeContextUpdates } from './utils/context-utils';
import { ProjectState } from './config/types';

export async function updateAIContext(update: Partial<ProjectState>) {
  const contextPath = join(process.cwd(), 'AI_CONTEXT.md');
  
  try {
    const currentContext = await readContext(contextPath);
    const newContext = mergeContextUpdates(currentContext, update);
    await writeContext(contextPath, newContext);
  } catch (error) {
    console.error('Failed to update AI context:', error);
  }
} 