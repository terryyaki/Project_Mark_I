'use client';

import { useUserStore } from '@/store/userStore';

export function UserPreferences() {
  const { preferences, setTheme, setWidgetPreferences } = useUserStore();
  
  return (
    <div className="bg-white/60 dark:bg-white/10 backdrop-blur-lg rounded-lg p-4 shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-black/90 dark:text-white/90">User Preferences</h2>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-black/80 dark:text-white/80 mb-2">
            Theme
          </label>
          <select 
            value={preferences.theme}
            onChange={(e) => setTheme(e.target.value as 'light' | 'dark' | 'system')}
            className="w-full bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-lg p-2 text-black/80 dark:text-white/80"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="system">System</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-black/80 dark:text-white/80 mb-2">
            Note Color
          </label>
          <input 
            type="color"
            value={preferences.widgetPreferences.noteColor}
            onChange={(e) => setWidgetPreferences({ noteColor: e.target.value })}
            className="w-full h-10 rounded-lg cursor-pointer"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-black/80 dark:text-white/80 mb-2">
            Font Size
          </label>
          <input 
            type="range"
            min="12"
            max="24"
            value={preferences.widgetPreferences.fontSize}
            onChange={(e) => setWidgetPreferences({ fontSize: parseInt(e.target.value) })}
            className="w-full"
          />
          <span className="text-sm text-black/60">{preferences.widgetPreferences.fontSize}px</span>
        </div>

        <button 
          onClick={() => alert('Preferences saved!')}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors"
        >
          Save Preferences
        </button>
      </div>
    </div>
  );
} 