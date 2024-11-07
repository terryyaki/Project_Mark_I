# Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project or select existing one
3. Enable APIs & Services:
   - Search for "Google+ API" or "Google OAuth API"
   - Click Enable

4. Configure OAuth Consent Screen:
   - Go to "OAuth consent screen"
   - Select "External"
   - Fill in app name, user support email, developer contact
   - Add authorized domains (localhost and your netlify domain)

5. Create Credentials:
   - Go to "Credentials"
   - Click "Create Credentials" > "OAuth client ID"
   - Select "Web application"
   - Add authorized JavaScript origins:
     * http://localhost:3000
     * https://your-netlify-url.netlify.app
   - Add authorized redirect URIs:
     * http://localhost:3000/api/auth/callback/google
     * https://your-netlify-url.netlify.app/api/auth/callback/google

6. Save your credentials:
   - Copy Client ID and Client Secret 