// Validates types and generates missing type definitions
import { Project } from 'ts-morph';

export async function checkTypes(): Promise<any> {
  const project = new Project({
    tsConfigFilePath: 'tsconfig.json',
  });

  const diagnostics = project.getPreEmitDiagnostics();
  
  return diagnostics.map((diagnostic: any) => ({
    message: diagnostic.getMessageText(),
    file: diagnostic.getSourceFile()?.getFilePath(),
    line: diagnostic.getLineNumber(),
    category: diagnostic.getCategory()
  }));
} 