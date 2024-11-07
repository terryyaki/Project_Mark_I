# Project Setup Guide

## Project Structure

### Core Modules
1. Home Module (/)
   - Module launcher
   - Navigation system

2. Social Module (/social)
   - Social feed interface
   - User interactions

3. Collaborative OS Module (/spaces) ✓
   - Multi-space system
   - Widget framework
   - Persistent state management

### Technical Architecture
```
Project_Mark_I/
├── src/
│   ├── app/                 # Next.js app router
│   │   ├── page.tsx        # Home page
│   │   ├── social/         # Social module
│   │   └── spaces/         # Collaborative OS
│   ├── components/         # Shared components
│   │   ├── dock/          # Dock interface
│   │   ├── navigation/    # Nav components
│   │   ├── spaces/        # Space management
│   │   └── widgets/       # Widget system
│   ├── store/             # State management
│   └── contexts/          # React contexts
├── public/                 # Static assets
└── package.json           # Dependencies
```

### Key Technologies
- Next.js 14.1.0
- React 18.2.0
- TypeScript
- Tailwind CSS
- Framer Motion
- Zustand
- Lucide Icons

## Development Workflow
1. Start development server:
   ```bash
   npm run dev
   ```

2. Build for production:
   ```bash
   npm run build
   ```

3. Version control practices:
   ```bash
   # Create feature branch
   git checkout -b feature/name

   # Create backup
   git checkout -b backup/current-state

   # Commit changes
   git add .
   git commit -m "feat(module): description"
   ```

## Module Development Guidelines
1. Use TypeScript for all new code
2. Follow component structure:
   - Page components in app/
   - Reusable components in components/
   - State management in store/
3. Style with Tailwind CSS
4. Use Framer Motion for animations
