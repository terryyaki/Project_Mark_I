'use client';

import Dock from '@/components/dock/Dock';
import NotesWidget from '@/components/widgets/NotesWidget';
import SpacesSwitcher, { SpacesProvider, useSpaces } from '@/components/spaces/SpacesSwitcher';
import { useWidgetStore } from '@/store/widgetStore';
import { WidgetProvider } from '@/contexts/WidgetContext';
import { AnimatePresence, motion } from 'framer-motion';

function SpacesContent() {
  const { notes, addNote, deleteNote } = useWidgetStore();
  const { activeSpace, activeBackground } = useSpaces();

  const spaceNotes = notes.filter(note => note.spaceId === activeSpace);

  return (
    <motion.div 
      className={`fixed inset-0 bg-gradient-to-br ${activeBackground}`}
      initial={false}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-full w-full">
        <AnimatePresence>
          {spaceNotes.map((note) => (
            <NotesWidget
              key={note.id}
              id={note.id}
              onClose={() => deleteNote(note.id)}
            />
          ))}
        </AnimatePresence>
      </div>
      <SpacesSwitcher />
      <Dock onNotesClick={() => addNote(activeSpace)} />
    </motion.div>
  );
}

export default function SpacesOS() {
  return (
    <WidgetProvider>
      <SpacesProvider>
        <SpacesContent />
      </SpacesProvider>
    </WidgetProvider>
  );
}