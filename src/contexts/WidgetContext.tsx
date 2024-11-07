'use client';

import { createContext, useContext, type ReactNode } from 'react';
import { useWidgetStore } from '@/store/widgetStore';

const WidgetContext = createContext<ReturnType<typeof useWidgetStore> | null>(null);

export function WidgetProvider({ children }: { children: ReactNode }) {
  const store = useWidgetStore();
  return <WidgetContext.Provider value={store}>{children}</WidgetContext.Provider>;
}

export function useWidget() {
  const context = useContext(WidgetContext);
  if (!context) {
    throw new Error('useWidget must be used within a WidgetProvider');
  }
  return context;
}
