# State Management

## Authentication State
Managed by NextAuth.js session system

```mermaid
graph LR
    A[NextAuth] --> B[Session]
    B --> C[Protected Routes]
    B --> D[Widget Store]
    
    style B fill:#f9f,stroke:#333
```

## Widget Store
Central store for managing widget state using Zustand.

### Current Implementation
```typescript
interface WidgetStore {
  notes: Note[];
  addNote: (spaceId: string) => void;
  deleteNote: (id: string) => void;
  updateNotePosition: (id: string, position: { x: number; y: number }) => void;
  updateNoteColor: (id: string, color: string) => void;
}
```

### State Flow
```mermaid
graph LR
    A[Widget Store] --> B[Notes Widget]
    A --> C[Dock]
    D[Space Switcher] --> A
    
    style A fill:#ff9,stroke:#333
```

## Latest Updates
- Added space-specific filtering
- Implemented position persistence
- Added color management 