'use client';

import { motion } from 'framer-motion';
import { useWidgetStore } from '@/store/widgetStore';
import { useState } from 'react';
import type { Note } from '@/types/store';

interface NotesWidgetProps {
  id: string;
  onClose: () => void;
}

export default function NotesWidget({ id, onClose }: NotesWidgetProps) {
  const [isDragging, setIsDragging] = useState(false);
  const { notes, updateNote, updateNotePosition } = useWidgetStore();
  const note = notes.find((n: Note) => n.id === id);

  if (!note) return null;

  return (
    <motion.div
      drag
      dragMomentum={false}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={(e, info) => {
        setIsDragging(false);
        updateNotePosition(id, {
          x: note.position.x + info.offset.x,
          y: note.position.y + info.offset.y
        });
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 1,
        scale: 1,
        x: note.position.x,
        y: note.position.y
      }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="absolute top-0 left-0 w-64 bg-white/10 backdrop-blur-xl rounded-lg border border-white/20
                shadow-lg shadow-black/20 overflow-hidden"
      style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
    >
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <div className="text-white/80 font-medium">Note</div>
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white/80 transition-colors"
          >
            ×
          </button>
        </div>
        <textarea
          value={note.content}
          onChange={(e) => updateNote(id, { content: e.target.value })}
          className="w-full h-32 bg-transparent border-none text-white/80 resize-none focus:outline-none"
          placeholder="Type something..."
          style={{ cursor: 'text' }}
        />
      </div>
    </motion.div>
  );
}
