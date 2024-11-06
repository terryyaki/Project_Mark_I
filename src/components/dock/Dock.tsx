'use client';

import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

interface DockProps {
  onNotesClick: () => void;
}

export default function Dock({ onNotesClick }: DockProps) {
  return (
    <motion.div 
      className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-xl 
                 rounded-2xl border border-white/20 shadow-lg shadow-black/20"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="p-2 flex space-x-2">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={onNotesClick}
          className="w-12 h-12 rounded-xl bg-white/10 hover:bg-white/20 transition-colors
                     flex items-center justify-center text-white/80"
        >
          <Plus className="w-6 h-6" />
        </motion.button>
      </div>
    </motion.div>
  );
}
