import type { DefaultSession } from 'next-auth';
import type { UserPreferences } from '@/lib/auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      preferences: UserPreferences;
    } & DefaultSession['user']
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string;
    preferences: UserPreferences;
  }
} 