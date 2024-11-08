'use client';

import Dock from '@/components/dock/Dock';
import { useWidget } from '@/contexts/WidgetContext';
import NotesWidget from '@/components/widgets/NotesWidget';

export default function SpacesContent() {
  const { addWidget } = useWidget();

  const handleAddNote = () => {
    addWidget('note');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
      <Dock onNotesClick={handleAddNote} />
    </div>
  );
} 