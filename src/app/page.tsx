'use client';

import React, { useState, useCallback } from "react";
import InfCanvas from "../components/canvas";
import Navbar from "../components/Navbar";
import { DrawingMode, StrokeSize, TextSize, DrawingColor } from "../components/p5Wrapper";

export default function Home() {
  const [drawingState, setDrawingState] = useState({
    mode: 'draw' as DrawingMode,
    strokeSize: 'M' as StrokeSize,
    textSize: 'M' as TextSize,
    color: 'light-blue' as DrawingColor,
    text: ''
  });

  const [eraseCanvas, setEraseCanvas] = useState(() => () => {});

  const handleUpdateDrawingState = (updates: Partial<typeof drawingState>) => {
    setDrawingState(prev => ({ ...prev, ...updates }));
  };

  const handleSetEraseCallback = useCallback((callback: () => void) => {
    setEraseCanvas(() => callback);
  }, []);

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden bg-gray-100">
      <Navbar 
        onUpdateDrawingState={handleUpdateDrawingState}
        onErase={eraseCanvas}
        drawingState={drawingState}
      />
      <div className="flex-grow relative">
        <InfCanvas 
          drawingState={drawingState}
          onErase={handleSetEraseCallback}
        />
      </div>
    </div>
  );
}
