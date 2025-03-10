const COLORS = {
  'light-red': '#ffcdd2',
  'light-blue': '#bbdefb',
  'light-green': '#c8e6c9',
  'light-pink': '#f8bbd0',
  'light-grey': '#e0e0e0'
};

interface Props {
  onUpdateDrawingState: (updates: Partial<{
    mode: DrawingMode;
    strokeSize: StrokeSize;
    textSize: TextSize;
    color: DrawingColor;
    text: string;
  }>) => void;
  onErase: () => void;
  drawingState: {
    color: DrawingColor;
    strokeSize: StrokeSize;
    textSize: TextSize;
    mode: DrawingMode;
  };
}

