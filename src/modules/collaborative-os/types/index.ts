export interface Space {
    id: string;
    name: string;
    background: string;
    widgets: Widget[];
  }
  
  export interface Widget {
    id: string;
    type: 'note' | 'timer' | 'music' | 'chat' | 'image';
    position: {
      x: number;
      y: number;
    };
    size: {
      width: number;
      height: number;
    };
    data: any; // Will be typed based on widget type
  }