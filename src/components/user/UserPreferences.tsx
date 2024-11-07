'use client';

import { useUserStore } from '@/store/userStore';
import { useSession } from 'next-auth/react';

export function UserPreferences() {
  const { data: session } = useSession();
  const { preferences, setTheme, setDefaultSpace, setWidgetPreferences } = useUserStore();

  return (
    <div className="p-4 bg-white/10 backdrop-blur-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">User Preferences</h2>
      
      {/* Theme Selection */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Theme</label>
        <select 
          value={preferences.theme}
          onChange={(e) => setTheme(e.target.value as any)}
          className="w-full bg-white/5 rounded p-2"
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="system">System</option>
        </select>
      </div>

      {/* Widget Preferences */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Note Color</label>
        <input 
          type="color"
          value={preferences.widgetPreferences.noteColor}
          onChange={(e) => setWidgetPreferences({ noteColor: e.target.value })}
          className="w-full h-10 rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Font Size</label>
        <input 
          type="range"
          min="12"
          max="24"
          value={preferences.widgetPreferences.fontSize}
          onChange={(e) => setWidgetPreferences({ fontSize: parseInt(e.target.value) })}
          className="w-full"
        />
      </div>
    </div>
  );
} 