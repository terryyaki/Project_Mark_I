import 'next-auth';
import { DefaultSession, DefaultUser } from 'next-auth';

// Define custom user properties
interface IUser extends DefaultUser {
  id: string;
  role?: 'user' | 'admin';
  preferences?: {
    theme?: 'light' | 'dark';
    language?: string;
  };
}

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: IUser & DefaultSession['user'];
  }
  
  interface User extends IUser {}
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string;
    role?: 'user' | 'admin';
  }
} 