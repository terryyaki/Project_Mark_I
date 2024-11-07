import './globals.css'
import { Providers } from './providers';
import LoginButton from '@/components/auth/LoginButton';
import ModuleNav from '@/components/navigation/ModuleNav';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';

export const metadata = {
  title: 'Super App',
  description: 'Your modular application platform',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-gray-900 to-black min-h-screen">
        <Providers>
          {session && (
            <nav className="fixed top-0 left-0 right-0 z-50 p-4 bg-black/40 backdrop-blur-lg border-b border-white/10">
              <div className="max-w-6xl mx-auto flex justify-between items-center">
                <div className="flex items-center gap-8">
                  <h1 className="text-xl font-bold text-white/90">Super App</h1>
                  <ModuleNav />
                </div>
                <LoginButton />
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