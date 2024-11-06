'use client';

import { Clock, Calendar, Notebook } from 'lucide-react';

function Dock() {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-xl px-6 py-3 rounded-full flex gap-4 border border-white/20 shadow-lg">
      <button className="p-2 hover:bg-white/20 rounded-full transition-colors">
        <Clock className="w-6 h-6 text-white" />
      </button>
      <button className="p-2 hover:bg-white/20 rounded-full transition-colors">
        <Calendar className="w-6 h-6 text-white" />
      </button>
      <button className="p-2 hover:bg-white/20 rounded-full transition-colors">
        <Notebook className="w-6 h-6 text-white" />
      </button>
    </div>
  );
}

export default Dock;