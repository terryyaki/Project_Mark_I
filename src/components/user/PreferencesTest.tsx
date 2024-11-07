'use client';

import { useUserStore } from '@/store/userStore';

export function PreferencesTest() {
  const { preferences, setTheme, setWidgetPreferences } = useUserStore();

  return (
    <div className="space-y-4">
      <div>
        <h3 className="font-medium mb-2">Theme Test</h3>
        <div className="flex gap-2">
          <button
            onClick={() => setTheme('light')}
            className={`px-3 py-1 rounded ${preferences.theme === 'light' ? 'bg-blue-500' : 'bg-gray-700'}`}
          >
            Light
          </button>
          <button
            onClick={() => setTheme('dark')}
            className={`px-3 py-1 rounded ${preferences.theme === 'dark' ? 'bg-blue-500' : 'bg-gray-700'}`}
          >
            Dark
          </button>
        </div>
      </div>

      <div>
        <h3 className="font-medium mb-2">Widget Preferences Test</h3>
        <button
          onClick={() => setWidgetPreferences({ fontSize: preferences.widgetPreferences.fontSize + 1 })}
          className="px-3 py-1 rounded bg-gray-700"
        >
          Increase Font Size: {preferences.widgetPreferences.fontSize}
        </button>
      </div>

      <div className="mt-4 p-4 bg-gray-800 rounded">
        <pre>{JSON.stringify(preferences, null, 2)}</pre>
      </div>
    </div>
  );
} 