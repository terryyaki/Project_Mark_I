import { Project } from 'ts-morph';
import { DependencyMap } from './automation/types';

export async function analyzeDependencies(): Promise<DependencyMap> {
  const project = new Project({
    tsConfigFilePath: 'tsconfig.json',
  });

  const sourceFiles = project.getSourceFiles();
  const dependencies: DependencyMap = {};

  for (const sourceFile of sourceFiles) {
    const filePath = sourceFile.getFilePath();
    dependencies[filePath] = sourceFile.getImportDeclarations()
      .map((imp: any) => imp.getModuleSpecifierValue());
  }

  return dependencies;
} 