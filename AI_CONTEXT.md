# Super App AI Development Context

## Latest Status (Last Updated: 2024-11-05 09:50:55
- Project deployed to Netlify: https://inquisitive-bonbon-08be2e.netlify.app/
- Current modules: Home, Social
- Next planned module: Collaborative OS
- All configurations working: Next.js, Tailwind, Netlify

## Project References
- GitHub: https://github.com/terryyaki/Project_Mark_I
- Netlify: https://inquisitive-bonbon-08be2e.netlify.app/
- Branch: main
- Project Root: /Users/terrynguyen/Projects/Project_Mark_I

## Project Vision
- Core Concept: Modular super-platform that can spawn independent apps
- Platform Type: Web-first, later mobile/desktop apps
- Key Feature: Modules can become standalone applications

### Module Details
1. Home Hub
   - Module launcher/dashboard
   - User customization
   - Cross-module notifications
   - Responsive design (mobile/desktop)

2. Social Space
   - Inspiration: RedBook/TikTok style
   - Rich media sharing
   - User interactions
   - Content discovery

3. Collaborative OS
   Features:
   - Virtual Desktop
     * Customizable backgrounds
     * Multiple spaces/rooms
     * Moveable windows/widgets
   - Social Features
     * Shared music (like Spotify)
     * Watch parties
     * Group chat/messaging
   - Productivity Tools
     * Work timer
     * Habit tracker
     * Journal widget
   - Creative Tools
     * Post-it notes
     * Memory photo walls
     * AI image generation
     * Custom animations
   - Real-time Collaboration
     * Shared spaces
     * Multi-user interaction
     * Live updates

## Current Development Phase
- Status: Active Development
- Main Branch: main
- Active Modules: Home, Social
- Next Module: Collaborative OS

## Development Standards
1. File Structure:
   - All new modules go in src/modules/
   - Each module needs: components/, api/, types/
   - Use Tailwind CSS for styling
   - TypeScript for all new code

2. Key Files:
   - PROJECT_SETUP.md (core structure)
   - LATEST_CHANGES.md (recent updates)
   - RESTART.md (restart guide)

## Version Control Practices

### 1. Experimental Features
Always create a new branch:
```bash
git checkout -b experiment/feature-name
git push -u origin experiment/feature-name
```
### 2. Safety Checkpoints
Before risky changes:
```bash
git stash save "Description of current work"
or
git checkout -b backup/current-state
```
### 3. Recovery Options
- Undo last commit: `git reset --soft HEAD~1`
- Go back to checkpoint: `git checkout <commit-hash>`
- Recover stashed work: `git stash apply`
- Delete failed experiment: `git branch -D experiment/feature-name`

### 4. AI Guidance Protocol
When starting risky changes, AI should:
1. Recommend creating a new branch
2. Save current state
3. Create recovery checkpoints
4. Document each major change

## Common AI Prompts
1. Continue Development:
   "Review AI_CONTEXT.md and PROJECT_SETUP.md. I'm working on [module/feature]. Last update was [description]."

2. New Feature:
   "Check AI_CONTEXT.md for project structure. I want to add [feature] to [module]. Maintain existing patterns."

3. Update Documentation:
   "Update AI_CONTEXT.md and PROJECT_SETUP.md with these changes: [list changes]"

## Active TODOs
1. [ ] Implement social post functionality
2. [ ] Add user authentication
3. [ ] Set up database
4. [ ] Add Collaborative OS module

## Restart Protocol
1. Start Cursor and open project:
```bash
cursor
cd /Users/terrynguyen/Projects/Project_Mark_I
```

2. Update and check status:
```bash
git pull origin main
./update-project-log.sh
```

3. Use this prompt:
"I'm continuing work on Project_Mark_I. Please review:

1. Check Latest Context:
- AI_CONTEXT.md (project status & vision)
- LATEST_CHANGES.md (recent updates)
- Version Control Practices

2. Project Details:
- GitHub: https://github.com/terryyaki/Project_Mark_I
- Netlify: https://inquisitive-bonbon-08be2e.netlify.app/
- Branch: main

3. Current Focus:
[Describe what you're working on]

4. Last Session:
[Add your last major change]

Please help continue development following our established patterns and safety protocols."

## Recent Updates
- 2024-11-05 09:50:55: Set up Netlify deployment successfully
- 2024-11-05 09:50:55: Updated project documentation
- 2024-11-05 09:50:55: Added Collaborative OS module plan
- 2024-11-05 09:50:55: Created RESTART.md with work protocols

