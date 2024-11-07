# State Management

## Authentication State
Managed by NextAuth.js session system

```mermaid
graph LR
    A[NextAuth] --> B[Session]
    B --> C[Protected Routes]
    B --> D[Widget Store]
    B --> E[User Preferences]
    
    style B fill:#f9f,stroke:#333
    style E fill:#ff9,stroke:#333
```

## Session Management
```typescript
interface ExtendedSession {
  user?: {
    id?: string;
    preferences?: {
      theme: string;
      defaultSpace: string;
    }
  } & DefaultSession['user']
}
```

## Latest Updates
+ - Added authentication state management
+ - Prepared for user preferences
+ - Integrated session with widget store

```mermaid
graph LR
    A[Widget Store] --> B[Notes Widget]
    A --> C[Dock]
    D[Space Switcher] --> A
    
    style A fill:#ff9,stroke:#333
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
