'use client';

import { createContext, useContext, ReactNode, useState } from 'react';

interface WidgetContextType {
  isDragging: boolean;
  setIsDragging: (dragging: boolean) => void;
  activeWidgetId: string | null;
  setActiveWidgetId: (id: string | null) => void;
}

const WidgetContext = createContext<WidgetContextType | null>(null);

export function useWidget() {
  const context = useContext(WidgetContext);
  if (!context) {
    throw new Error('useWidget must be used within a WidgetProvider');
  }
  return context;
}

export function WidgetProvider({ children }: { children: ReactNode }) {
  const [isDragging, setIsDragging] = useState(false);
  const [activeWidgetId, setActiveWidgetId] = useState<string | null>(null);

  return (
    <WidgetContext.Provider value={{
      isDragging,
      setIsDragging,
      activeWidgetId,
      setActiveWidgetId
    }}>
      {children}
    </WidgetContext.Provider>
  );
}