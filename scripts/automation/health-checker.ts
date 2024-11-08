import { HealthStatus } from './types';
import { checkCursorProblems } from './problem-checker';

export async function checkHealth(): Promise<HealthStatus> {
  try {
    const problems = await checkCursorProblems();
    const errors = problems.filter(p => p.type === 'error');

    return {
      status: errors.length > 0 ? 'error' : 'healthy',
      issues: errors.map(e => e.message),
      lastCheck: new Date()
    };
  } catch (error) {
    return {
      status: 'error',
      issues: [error instanceof Error ? error.message : 'Unknown error'],
      lastCheck: new Date()
    };
  }
} 