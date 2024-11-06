export interface Note {
    id: string;
    content: string;
    position: { x: number; y: number };
    isMinimized: boolean;
    createdAt: string;
    lastModified: string;
    title: string;
  }
  
  export interface WidgetState {
    notes: Note[];
    activeNoteId: string | null;
  }