# Project Cloning Guide

## Overview
This guide helps create a new project from the super_app template.

## Steps

### 1. Clone and Initialize
```bash
# Clone super_app as new project
git clone https://github.com/terryyaki/super_app.git Project_Mark_I
cd Project_Mark_I
#Remove old git history
rm -rf .git
#Initialize new git
git init
git add .
git commit -m "Initial commit: Project Mark I"
```

### 2. Create New GitHub Repository
1. Go to github.com
2. Create new repository named "Project_Mark_I"
3. Connect local to remote:
```bash
git remote add origin https://github.com/terryyaki/Project_Mark_I.git
git push -u origin main
```

### 3. Setup Netlify
1. Go to netlify.com
2. Create new site from git
3. Select Project_Mark_I repository
4. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

### 4. Update Documentation
Files to update:
1. AI_CONTEXT.md
2. PROJECT_SETUP.md
3. LATEST_CHANGES.md
4. .env files

### 5. Verify Setup
```bash
# Install dependencies
npm install
# Start development server
npm run dev
# Check git status
git status
```

## Checklist
- [ ] Repository cloned
- [ ] Git reinitialized
- [ ] GitHub repository created
- [ ] Netlify site deployed
- [ ] Documentation updated
- [ ] Dependencies installed
- [ ] Development server running
