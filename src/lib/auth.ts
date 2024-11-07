import type { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const THEMES = ['light', 'dark', 'system'] as const;
export type Theme = typeof THEMES[number];

export interface UserPreferences {
  theme: Theme;
  defaultSpace: string;
  widgetPreferences: {
    noteColor: string;
    fontSize: number;
  };
}

const defaultPreferences: UserPreferences = {
  theme: 'system',
  defaultSpace: 'default',
  widgetPreferences: {
    noteColor: '#ffffff',
    fontSize: 14,
  },
};

export const authConfig: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    }),
  ],
  callbacks: {
    async jwt({ token }) {
      token.preferences = await getUserPreferences(token.sub ?? '');
      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.id = token.sub ?? '';
        session.user.preferences = token.preferences;
      }
      return session;
    },
  },
};

async function getUserPreferences(userId: string): Promise<UserPreferences> {
  return defaultPreferences;
} 