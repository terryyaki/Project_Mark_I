import './globals.css';
import { type ReactNode } from 'react';
import { Providers } from './providers';
import LoginButton from '@/components/auth/LoginButton';
import ModuleNav from '@/components/navigation/ModuleNav';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';

export const metadata = {
  title: 'Super App',
  description: 'Your modular application platform',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
        <Providers>
          {session && (
            <nav className="fixed top-0 left-0 right-0 z-50 p-4 bg-black/40 backdrop-blur-lg border-b border-white/10">
              <div className="max-w-6xl mx-auto flex justify-between items-center">
                <div className="flex items-center gap-8">
                  <h1 className="text-xl font-bold text-white/90">Super App</h1>
                  <div className="flex gap-6">
                    <a href="/spaces" className="text-white/70 hover:text-white/90 transition-colors">Spaces</a>
                    <a href="/social" className="text-white/70 hover:text-white/90 transition-colors">Social</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <a href="/profile" className="text-white/70 hover:text-white/90 transition-colors">Profile</a>
                  <LoginButton />
                </div>
              </div>
            </nav>
          )}
          <main className={session ? "pt-16" : ""}>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}