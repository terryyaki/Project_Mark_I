'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import { motion } from 'framer-motion';

export default function LoginButton() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return (
      <motion.button 
        className="px-4 py-2 bg-white/10 rounded-lg"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        Loading...
      </motion.button>
    );
  }

  if (session) {
    return (
      <div className="flex items-center gap-4">
        <img 
          src={session.user?.image || ''} 
          alt="Profile" 
          className="w-8 h-8 rounded-full"
        />
        <motion.button 
          onClick={() => signOut()}
          className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg
                     transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Sign Out
        </motion.button>
      </div>
    );
  }

  return (
    <motion.button 
      onClick={() => signIn('google')}
      className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg
                 transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Sign In with Google
    </motion.button>
  );
} 