export function getModuleFromPath(filePath: string): string {
  const parts = filePath.split('/');
  return parts[parts.length - 2] || 'root';
}

export const generateFileHeader = (filePath: string) => `/**
 * @file ${filePath}
 * @context This file is part of the Super App project
 * @docs See AI_CONTEXT.md for full project context
 * @created ${new Date().toISOString()}
 * @module ${getModuleFromPath(filePath)}
 * @dependencies [auto-generated list of imports]
 * @related [auto-generated list of related files]
 */`; 