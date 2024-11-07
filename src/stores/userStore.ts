import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type UserPreferences = {
  theme: 'light' | 'dark';
  notifications: boolean;
  defaultSpace: string;
  widgetPreferences: {
    noteColor: string;
    fontSize: number;
  };
};

type State = {
  preferences: UserPreferences;
};

type Actions = {
  setPreference: <K extends keyof UserPreferences>(key: K, value: UserPreferences[K]) => void;
  setTheme: (theme: UserPreferences['theme']) => void;
  setDefaultSpace: (defaultSpace: string) => void;
  setWidgetPreferences: (prefs: Partial<UserPreferences['widgetPreferences']>) => void;
};

export const useUserStore = create<State & Actions>()(
  persist(
    (set) => ({
      preferences: {
        theme: 'dark',
        notifications: true,
        defaultSpace: 'default',
        widgetPreferences: {
          noteColor: '#ffffff',
          fontSize: 14,
        },
      },
      
      setPreference: (key, value) =>
        set((state) => ({
          preferences: {
            ...state.preferences,
            [key]: value,
          },
        })),

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
    }),
    {
      name: 'user-preferences',
    }
  )
);