export type Theme = 'light' | 'dark' | 'system';

export interface UserPreferences {
  theme: Theme;
  defaultSpace: string;
  widgetPreferences: {
    noteColor: string;
    fontSize: number;
  };
}

export interface UserProfile {
  id: string;
  email: string;
  name: string;
  preferences: UserPreferences;
  spaces: SpaceConfig[];
}

export interface SpaceConfig {
  id: string;
  name: string;
  background: string;
  isShared: boolean;
  createdAt: Date;
  updatedAt: Date;
} 