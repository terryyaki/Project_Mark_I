import { ProjectAutomation } from '../core';
import { AutomationConfig } from '../config/types';
import { beforeEach, describe, expect, jest, test } from '@jest/globals';

// Define a generic type for the spies
type JestSpy = ReturnType<typeof jest.spyOn>;

const mockConfig: AutomationConfig = {
  rootDir: process.cwd(),
  logLevel: 'info',
};

describe('ProjectAutomation', () => {
  let automation: ProjectAutomation;
  let watchSpy: JestSpy;
  let consoleSpy: JestSpy;

  beforeEach(() => {
    automation = new ProjectAutomation(mockConfig);
    watchSpy = jest.spyOn(require('fs'), 'watch')
      .mockImplementation((path, options, callback) => ({
        close: jest.fn()
      }));
    consoleSpy = jest.spyOn(console, 'log')
      .mockImplementation(() => {});
  });

  afterEach(async () => {
    await automation.stop();
    watchSpy.mockRestore();
    consoleSpy.mockRestore();
    jest.clearAllMocks();
  });

  test('initializes with correct state', () => {
    expect(automation.getState()).toMatchObject({
      problems: [],
      files: [],
      health: { status: 'initializing' }
    });
  });

  test('watches file system', async () => {
    await automation.start();
    expect(watchSpy).toHaveBeenCalled();
  });
}); 