import { FileRegistry } from '../automation/file-registry';
import { generateFileHeader } from '../templates/file-template';
import { updateAIContext } from '../automation/context-updater';

export async function onFileCreate(path: string) {
  try {
    // 1. Generate file header
    const header = generateFileHeader(path);
    
    // 2. Register in system
    await FileRegistry.getInstance(process.cwd()).registerFile({
      path,
      type: 'file',
      lastModified: new Date()
    });
    
    // 3. Update AI_CONTEXT.md
    await updateAIContext({
      files: [{ path, type: 'file', lastModified: new Date() }]
    });
  } catch (error) {
    console.error('Failed to process file creation:', error);
  }
} 