# Spaces Widgets

## Notes Widget
Currently implemented widget with drag-and-drop and persistence.

### Features
- Draggable positioning
- Space-specific persistence
- Modern glass-morphism design
- Content editing

### State Structure
```typescript
interface Note {
  id: string;
  content: string;
  position: { x: number; y: number };
  color: string;
  spaceId: string;
}
```

### Interactions
1. Drag to move
2. Click to edit
3. Close to remove
4. Persists across sessions

## Latest Updates
- Added drag-and-drop functionality
- Implemented space-specific filtering
- Added glass-morphism styling