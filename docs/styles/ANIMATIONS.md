# Animation Patterns

## Current Implementations

### Space Transitions
```typescript
// Framer Motion variants
const variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
}
```

### Widget Animations
1. Drag Animation
   - Spring physics
   - Smooth transitions
   
2. Space Switcher
   - Slide and fade
   - Scale on hover

## Latest Updates
- Added spring physics to dragging
- Implemented smooth space transitions
- Added hover animations to dock 