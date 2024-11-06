'use client';

import { motion } from 'framer-motion';
import { ChevronUp } from 'lucide-react';
import { useState, createContext, useContext, type ReactNode } from 'react';

interface Space {
  id: string;
  name: string;
  background: string;
}

interface SpacesContextType {
  activeSpace: string;
  setActiveSpace: (id: string) => void;
  activeBackground: string;
  spaces: Space[];
}

const spaces: Space[] = [
  { 
    id: 'space-1', 
    name: 'Main Space', 
    background: 'from-blue-900 via-blue-800 to-blue-950' 
  },
  { 
    id: 'space-2', 
    name: 'Focus Space', 
    background: 'from-purple-900 via-purple-800 to-purple-950' 
  },
  { 
    id: 'space-3', 
    name: 'Creative Space', 
    background: 'from-emerald-900 via-emerald-800 to-emerald-950' 
  },
];

const SpacesContext = createContext<SpacesContextType | null>(null);

export function SpacesProvider({ children }: { children: ReactNode }) {
  const [activeSpace, setActiveSpace] = useState<string>('space-1');

  const value = {
    activeSpace,
    setActiveSpace,
    activeBackground: spaces.find(s => s.id === activeSpace)?.background || spaces[0].background,
    spaces
  };

  return <SpacesContext.Provider value={value}>{children}</SpacesContext.Provider>;
}

export function useSpaces() {
  const context = useContext(SpacesContext);
  if (!context) {
    throw new Error('useSpaces must be used within a SpacesProvider');
  }
  return context;
}

export default function SpacesSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const { spaces, activeSpace, setActiveSpace } = useSpaces();

  return (
    <motion.div 
      className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50"
      initial={false}
      animate={{ 
        y: isOpen ? -20 : 0,
        scale: isOpen ? 1.05 : 1
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="bg-white/10 backdrop-blur-xl rounded-xl border border-white/20 overflow-hidden
                    shadow-lg shadow-black/20">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-6 py-3 flex items-center justify-between text-white/80 hover:bg-white/5
                   transition-colors duration-200"
        >
          <span className="font-medium">{spaces.find(s => s.id === activeSpace)?.name}</span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <ChevronUp className="w-4 h-4" />
          </motion.div>
        </button>
        
        {isOpen && (
          <motion.div 
            className="p-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            {spaces.map((space) => (
              <motion.button
                key={space.id}
                onClick={() => {
                  setActiveSpace(space.id);
                  setIsOpen(false);
                }}
                className={`w-full px-4 py-3 rounded-lg text-left text-white/80 
                          transition-colors duration-200 font-medium
                          ${activeSpace === space.id ? 'bg-white/10' : 'hover:bg-white/5'}`}
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-br ${space.background}`} />
                  {space.name}
                </div>
              </motion.button>
            ))}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
