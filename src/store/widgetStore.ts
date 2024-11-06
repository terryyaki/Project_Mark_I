import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { nanoid } from 'nanoid';

interface Note {
  id: string;
  content: string;
  position: { x: number; y: number };
  color: string;
  spaceId: string;
}

type WidgetStore = {
  notes: Note[];
  addNote: (spaceId: string) => void;
  deleteNote: (id: string) => void;
  updateNotePosition: (id: string, position: { x: number; y: number }) => void;
  updateNoteColor: (id: string, color: string) => void;
}

export const useWidgetStore = create<WidgetStore>()(
  persist(
    (set) => ({
      notes: [],
      addNote: (spaceId) => set((state) => ({
        notes: [...state.notes, {
          id: nanoid(),
          content: '',
          position: { x: Math.random() * 300, y: Math.random() * 300 },
          color: 'white',
          spaceId
        }]
      })),
      deleteNote: (id) => set((state) => ({
        notes: state.notes.filter(note => note.id !== id)
      })),
      updateNotePosition: (id, position) => set((state) => ({
        notes: state.notes.map(note => 
          note.id === id ? { ...note, position } : note
        )
      })),
      updateNoteColor: (id, color) => set((state) => ({
        notes: state.notes.map(note =>
          note.id === id ? { ...note, color } : note
        )
      })),
    }),
    {
      name: 'widget-storage'
    }
  )
);
