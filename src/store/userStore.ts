import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { type UserPreferences, type UserState } from '@/types/store';

export const useUserStore = create<UserState>()(
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