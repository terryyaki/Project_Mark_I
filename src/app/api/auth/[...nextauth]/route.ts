import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import type { Session, DefaultSession } from 'next-auth';
import type { JWT } from 'next-auth/jwt';

// Extend the built-in session type
interface ExtendedSession extends DefaultSession {
  user?: {
    id?: string;
  } & DefaultSession['user'];
}

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    }),
  ],
  callbacks: {
    async session({ session, token }: { session: ExtendedSession; token: JWT }) {
      if (session?.user) {
        session.user.id = token.sub ?? '';
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }; 