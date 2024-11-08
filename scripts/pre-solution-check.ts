import { checkCursorProblems } from './automation/problem-checker';
import { scanProject } from './update-project-structure';
import { analyzeDependencies } from './dependency-analyzer';
import { checkTypes } from './type-checker';

interface Report {
  problems: any[];
  structure: string;
  deps: any;
  types: any;
}

function formatReport(data: Report): string {
  return `
# Pre-Solution Check Report
${new Date().toISOString()}

## Problems
${data.problems.length ? data.problems.map(p => `- ${p.message}`).join('\n') : 'No problems found'}

## Project Structure
${data.structure}

## Dependencies
${JSON.stringify(data.deps, null, 2)}

## Types
${JSON.stringify(data.types, null, 2)}
`;
}

export async function runPreSolutionCheck() {
  console.log('🔍 Running Pre-Solution Checks...');

  const problems = await checkCursorProblems();
  const structure = await scanProject(process.cwd());
  const deps = await analyzeDependencies();
  const types = await checkTypes();

  const report = formatReport({ problems, structure, deps, types });
  return report;
} 