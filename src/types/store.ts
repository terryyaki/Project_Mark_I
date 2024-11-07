export interface Note {
  id: string;
  content: string;
  position: {
    x: number;
    y: number;
  };
  spaceId: string;
}

export interface WidgetState {
  notes: Note[];
  spaceId: string;
  addNote: (spaceId: string) => void;
  updateNote: (id: string, updates: Partial<Note>) => void;
  deleteNote: (id: string) => void;
  updateNotePosition: (id: string, position: { x: number; y: number }) => void;
  setSpaceId: (id: string) => void;
}

export interface UserPreferences {
  theme: 'light' | 'dark' | 'system';
  notifications: boolean;
  defaultSpace: string;
  widgetPreferences: {
    noteColor: string;
    fontSize: number;
  };
}

export interface UserState {
  preferences: UserPreferences;
  setPreference: (key: keyof UserPreferences, value: any) => void;
  setTheme: (theme: UserPreferences['theme']) => void;
  setDefaultSpace: (defaultSpace: string) => void;
  setWidgetPreferences: (prefs: Partial<UserPreferences['widgetPreferences']>) => void;
}

export interface Session {
  user?: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
    role?: string | null;
  };
} 