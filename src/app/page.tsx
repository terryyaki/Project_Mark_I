'use client';

import { useSession } from 'next-auth/react';
import { motion } from 'framer-motion';
import LoginButton from '@/components/auth/LoginButton';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push('/spaces');
    }
  }, [session, router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold mb-2 text-white">Welcome to Super App</h1>
        <p className="text-white/70 mb-8">Your personal workspace</p>
        {status === 'loading' ? (
          <motion.div
            className="w-8 h-8 border-t-2 border-white rounded-full mx-auto"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        ) : !session ? (
          <LoginButton />
        ) : null}
      </motion.div>
    </div>
  );
}