'use client';

import { useSession } from 'next-auth/react';
import { useUserStore } from '@/stores/userStore';
import { motion } from 'framer-motion';

export default function UserProfile() {
  const { data: session } = useSession();
  const { preferences, setPreference } = useUserStore();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 bg-white/5 rounded-lg backdrop-blur-lg"
    >
      <div className="flex items-center gap-4 mb-6">
        {session?.user?.image && (
          <img 
            src={session.user.image} 
            alt="Profile" 
            className="w-16 h-16 rounded-full"
          />
        )}
        <div>
          <h2 className="text-xl font-bold">{session?.user?.name}</h2>
          <p className="text-white/70">{session?.user?.email}</p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm text-white/70 mb-2">Theme</label>
          <select
            value={preferences.theme}
            onChange={(e) => setPreference('theme', e.target.value as 'light' | 'dark')}
            className="w-full bg-white/10 rounded-lg px-4 py-2"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>

        <div>
          <label className="block text-sm text-white/70 mb-2">Notifications</label>
          <input
            type="checkbox"
            checked={preferences.notifications}
            onChange={(e) => setPreference('notifications', e.target.checked)}
            className="rounded bg-white/10"
          />
        </div>
      </div>
    </motion.div>
  );
} 