import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserPreferences {
  theme: 'light' | 'dark';
  language: string;
  notifications: boolean;
}

interface UserStore {
  preferences: UserPreferences;
  setPreference: <K extends keyof UserPreferences>(
    key: K,
    value: UserPreferences[K]
  ) => void;
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      preferences: {
        theme: 'dark',
        language: 'en',
        notifications: true,
      },
      setPreference: (key, value) =>
        set((state) => ({
          preferences: {
            ...state.preferences,
            [key]: value,
          },
        })),
    }),
    {
      name: 'user-preferences',
    }
  )
); 