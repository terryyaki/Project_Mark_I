'use client';

import { createContext, useContext } from 'react';

const WidgetContext = createContext<null>(null);

export function WidgetProvider({ children }: { children: React.ReactNode }) {
  return (
    <WidgetContext.Provider value={null}>
      {children}
    </WidgetContext.Provider>
  );
}
