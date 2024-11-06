'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { nanoid } from 'nanoid';

interface Position {
  x: number;
  y: number;
}

interface Note {
  id: string;
  content: string;
  position: Position;
  color: string;
  title: string;
  isMinimized: boolean;
  spaceId: string;
}

interface WidgetStore {
  notes: Note[];
  addNote: (spaceId: string) => void;
  deleteNote: (id: string) => void;
  updateNote: (id: string, content: string) => void;
  updateNotePosition: (id: string, position: Position) => void;
  updateNoteColor: (id: string, color: string) => void;
  updateNoteTitle: (id: string, title: string) => void;
  toggleMinimize: (id: string) => void;
}

export const useWidgetStore = create<WidgetStore>()(
  persist(
    (set) => ({
      notes: [],
      addNote: (spaceId) => 
        set((state) => ({
          notes: [...state.notes, {
            id: nanoid(),
            content: '',
            position: { x: Math.random() * 300, y: Math.random() * 300 },
            color: 'blue',
            title: 'New Note',
            isMinimized: false,
            spaceId
          }]
        })),
      deleteNote: (id) =>
        set((state) => ({
          notes: state.notes.filter((note) => note.id !== id)
        })),
      updateNote: (id, content) =>
        set((state) => ({
          notes: state.notes.map((note) =>
            note.id === id ? { ...note, content } : note
          )
        })),
      updateNotePosition: (id, position) =>
        set((state) => ({
          notes: state.notes.map((note) =>
            note.id === id ? { ...note, position } : note
          )
        })),
      updateNoteColor: (id, color) =>
        set((state) => ({
          notes: state.notes.map((note) =>
            note.id === id ? { ...note, color } : note
          )
        })),
      updateNoteTitle: (id, title) =>
        set((state) => ({
          notes: state.notes.map((note) =>
            note.id === id ? { ...note, title } : note
          )
        })),
      toggleMinimize: (id) =>
        set((state) => ({
          notes: state.notes.map((note) =>
            note.id === id ? { ...note, isMinimized: !note.isMinimized } : note
          )
        })),
    }),
    {
      name: 'widget-storage',
    }
  )
);