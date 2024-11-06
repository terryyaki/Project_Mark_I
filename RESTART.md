# Super App Restart Guide

## Quick Start
1. Open Terminal
2. `cd ~/Projects/super_app`
3. `git status` (check for any uncommitted work)
4. `git pull origin development` (get latest changes)
5. `npm run dev` (start development server)
6. Visit http://localhost:3000

## Common Scenarios

### 1. Regular Restart
```bash
cd ~/Projects/super_app
git pull origin development
npm run dev
```

### 2. Stopped Mid-Feature
```bash
cd ~/Projects/super_app
git status # Check uncommitted changes
git diff # See what you changed
```
### 3. Server Won't Start
```bash
npm install # Reinstall dependencies
npm run dev
```

### 4. Lost Track of Changes
```bash
git log --oneline -n 5 # See recent commits
cat AI_CONTEXT.md # Check project status
git branch # See which branch you're on
```

## For AI Assistance
Copy this template:
"I'm returning to the super_app project:
1. Location: /Users/terrynguyen/Projects/super_app
2. Last commit: [from git log]
3. Branch: [from git branch]
4. Need help with: [your question]"

## Project Structure Reminder
- src/app/ - Main pages
- src/components/ - Shared components
- src/modules/ - Feature modules
- Current modules: Home, Social

## Common Issues & Solutions
1. "Module not found": Run `npm install`
2. Wrong branch: `git checkout development`
3. Unsaved work: `git stash save "WIP message"`
4. Recover work: `git stash apply`

## Important Files
1. AI_CONTEXT.md - Project status and AI guidance
2. PROJECT_SETUP.md - Full project structure
3. LATEST_CHANGES.md - Recent updates

