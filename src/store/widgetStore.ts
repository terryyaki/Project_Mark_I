import { create } from 'zustand';
import { nanoid } from 'nanoid';
import { type Note, type WidgetState } from '@/types/store';

export const useWidgetStore = create<WidgetState>((set) => ({
  notes: [],
  spaceId: '',
  
  addNote: (spaceId: string) => set((state) => ({
    notes: [...state.notes, {
      id: nanoid(),
      content: '',
      position: { x: 100, y: 100 },
      spaceId
    }]
  })),

  updateNote: (id: string, updates: Partial<Note>) => set((state) => ({
    notes: state.notes.map((note) => 
      note.id === id ? { ...note, ...updates } : note
    )
  })),

  deleteNote: (id: string) => set((state) => ({
    notes: state.notes.filter((note) => note.id !== id)
  })),

  updateNotePosition: (id: string, position: { x: number; y: number }) => set((state) => ({
    notes: state.notes.map((note) =>
      note.id === id ? { ...note, position } : note
    )
  })),

  setSpaceId: (id: string) => set({ spaceId: id }),
}));
