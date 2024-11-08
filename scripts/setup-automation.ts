import { ProjectAutomation } from './automation/core';
import { AutomationConfig } from './automation/types';

async function main() {
  try {
    const config: AutomationConfig = {
      rootDir: process.cwd(),
      logLevel: 'info'
    };
    
    const automation = new ProjectAutomation(config);
    console.log('📁 Project root:', config.rootDir);
    await automation.start();
    
  } catch (error) {
    console.error('Failed to start automation:', error);
    process.exit(1);
  }
}

main().catch(console.error); 