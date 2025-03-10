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

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden bg-gray-100">
      <div className="flex-grow relative">
        <InfCanvas 
        />
      </div>
    </div>
  );
}
