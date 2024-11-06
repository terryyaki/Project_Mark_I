'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Edit2, Trash2, Maximize2, Palette } from 'lucide-react';
import { useWidgetStore } from '@/store/widgetStore';

interface NotesWidgetProps {
  id: string;
  onClose: () => void;
}

const colorVariants = {
  blue: 'bg-gradient-to-br from-blue-500/30 to-blue-600/30 border-blue-500/30',
  red: 'bg-gradient-to-br from-red-500/30 to-red-600/30 border-red-500/30',
  green: 'bg-gradient-to-br from-green-500/30 to-green-600/30 border-green-500/30',
  purple: 'bg-gradient-to-br from-purple-500/30 to-purple-600/30 border-purple-500/30',
  yellow: 'bg-gradient-to-br from-yellow-500/30 to-yellow-600/30 border-yellow-500/30'
};

export default function NotesWidget({ id, onClose }: NotesWidgetProps) {
  console.log('NotesWidget rendered with id:', id);
  
  const {
    notes,
    updateNote,
    updateNotePosition,
    toggleMinimize,
    deleteNote,
    updateNoteTitle,
    updateNoteColor
  } = useWidgetStore();
  
  const [isEditing, setIsEditing] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);
  
  const note = notes.find(n => n.id === id)!;
  console.log('Note data:', note);
  console.log('Color picker state:', showColorPicker);
  const titleInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing && titleInputRef.current) {
      titleInputRef.current.focus();
    }
  }, [isEditing]);

  const handleDragEnd = (event: any, info: any) => {
    setIsDragging(false);
    const newPosition = {
      x: note.position.x + info.offset.x,
      y: note.position.y + info.offset.y
    };
    updateNotePosition(id, newPosition);
  };

  return (
    <motion.div
      drag
      dragMomentum={false}
      dragConstraints={{
        left: 0,
        top: 0,
        right: window.innerWidth - 300,
        bottom: window.innerHeight - 300
      }}
      dragElastic={0}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={handleDragEnd}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{
        opacity: 1,
        scale: note.isMinimized ? 0.8 : 1,
        x: note.position.x,
        y: note.position.y
      }}
      className={`fixed top-0 left-0 w-[300px] ${colorVariants[note.color as keyof typeof colorVariants]}
                 backdrop-blur-xl rounded-xl border shadow-lg overflow-hidden z-10`}
    >
      <div className="p-3 bg-white/5 border-b border-white/20 flex justify-between items-center">
        <div className="flex-1 flex items-center gap-2">
          {isEditing ? (
            <input
              ref={titleInputRef}
              value={note.title}
              onChange={(e) => updateNoteTitle(id, e.target.value)}
              onBlur={() => setIsEditing(false)}
              onKeyDown={(e) => e.key === 'Enter' && setIsEditing(false)}
              className="bg-transparent text-sm font-medium text-white/80 focus:outline-none"
            />
          ) : (
            <h3 
              className="text-sm font-medium text-white/80 cursor-pointer"
              onClick={() => setIsEditing(true)}
            >
              {note.title}
            </h3>
          )}
          <button
            onClick={() => setIsEditing(true)}
            className="text-white/40 hover:text-white/80 p-1 rounded-full hover:bg-white/10"
          >
            <Edit2 size={12} />
          </button>
        </div>
        
        <div className="flex items-center gap-1">
          <div className="relative">
            <button
              onClick={() => setShowColorPicker(!showColorPicker)}
              className="text-white/40 hover:text-white/80 p-1 rounded-full hover:bg-white/10"
            >
              <Palette size={14} />
            </button>
            
            {showColorPicker && (
              <div className="absolute right-0 top-8 bg-white/10 backdrop-blur-xl rounded-lg p-2 border border-white/20 flex gap-1 z-50">
                {Object.entries(colorVariants).map(([colorName, _]) => (
                  <button
                    key={colorName}
                    onClick={() => {
                      updateNoteColor(id, colorName);
                      setShowColorPicker(false);
                    }}
                    className={`w-6 h-6 rounded-full ${colorName.includes('yellow') ? 'bg-yellow-500' : `bg-${colorName}-500`} 
                              hover:scale-110 transition-transform`}
                  />
                ))}
              </div>
            )}
          </div>
          <button
            onClick={() => toggleMinimize(id)}
            className="text-white/40 hover:text-white/80 p-1 rounded-full hover:bg-white/10"
          >
            {note.isMinimized ? <Maximize2 size={14} /> : <Minus size={14} />}
          </button>
          <button
            onClick={() => {
              deleteNote(id);
              onClose();
            }}
            className="text-white/40 hover:text-white/80 p-1 rounded-full hover:bg-white/10"
          >
            <Trash2 size={14} />
          </button>
          <button
            onClick={onClose}
            className="text-white/40 hover:text-white/80 p-1 rounded-full hover:bg-white/10"
          >
            <X size={14} />
          </button>
        </div>
      </div>
      
      <AnimatePresence>
        {!note.isMinimized && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
          >
            <textarea
              value={note.content}
              onChange={(e) => updateNote(id, e.target.value)}
              onMouseDown={(e) => isDragging && e.preventDefault()}
              placeholder="Type your notes here..."
              className="w-full h-[200px] bg-transparent p-3 text-white/80 
                       placeholder:text-white/40 resize-none focus:outline-none"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}