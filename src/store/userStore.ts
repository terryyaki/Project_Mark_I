import { create } from 'zustand';
import { UserPreferences } from '@/lib/types/user';

interface UserStore {
  preferences: UserPreferences;
  setTheme: (theme: UserPreferences['theme']) => void;
  setDefaultSpace: (spaceId: string) => void;
  setWidgetPreferences: (prefs: Partial<UserPreferences['widgetPreferences']>) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  preferences: {
    theme: 'system',
    defaultSpace: 'default',
    widgetPreferences: {
      noteColor: '#ffffff',
      fontSize: 14,
    },
  },
  setTheme: (theme) => 
    set((state) => ({ 
      preferences: { ...state.preferences, theme } 
    })),
  setDefaultSpace: (defaultSpace) =>
    set((state) => ({
      preferences: { ...state.preferences, defaultSpace }
    })),
  setWidgetPreferences: (prefs) =>
    set((state) => ({
      preferences: {
        ...state.preferences,
        widgetPreferences: { ...state.preferences.widgetPreferences, ...prefs }
      }
    })),
})); 