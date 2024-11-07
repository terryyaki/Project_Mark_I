'use client';

import { SessionProvider } from 'next-auth/react';
import { useUserStore } from '@/store/userStore';
import { useEffect } from 'react';

export function Providers({ children }: { children: React.ReactNode }) {
  const { preferences } = useUserStore();

  useEffect(() => {
    if (preferences.theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [preferences.theme]);

  return <SessionProvider>{children}</SessionProvider>;
} 