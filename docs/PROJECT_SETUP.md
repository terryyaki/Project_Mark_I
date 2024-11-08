# Project Setup

## Core Dependencies
- Next.js 14
- NextAuth.js
- Zustand
- Tailwind CSS
- Framer Motion

## Authentication
1. Environment Setup:
   Create a `.env.local` file with:
   ```bash
   NEXTAUTH_URL=http://localhost:3006
   NEXTAUTH_SECRET=your_generated_secret
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   ```

2. Google OAuth Configuration:
   - Redirect URIs:
     * `http://localhost:3006/api/auth/callback/google`
     * `https://inquisitive-bonbon-08be2e.netlify.app/api/auth/callback/google`
   - JavaScript Origins:
     * `http://localhost:3006`
     * `https://inquisitive-bonbon-08be2e.netlify.app`

3. NextAuth Setup:
   - Using Google provider
   - Session management
   - Protected routes

## State Management
- User preferences via Zustand
- Theme system
- Space management

## Current Structure
```
src/
├── app/
│   ├── api/
│   │   └── auth/
│   ├── profile/
│   └── spaces/
├── components/
│   ├── auth/
│   ├── user/
│   └── spaces/
├── lib/
│   ├── auth.ts
│   └── types/
├── store/
│   └── userStore.ts
└── contexts/
```

## Development
1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```
   Server will run on http://localhost:3006

## Deployment
1. Set up environment variables in Netlify
2. Connect to GitHub repository
3. Deploy to https://inquisitive-bonbon-08be2e.netlify.app