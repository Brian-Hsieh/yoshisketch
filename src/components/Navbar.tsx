'use client'

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Pencil, Eraser, Type } from 'lucide-react';
import { DrawingMode, StrokeSize, TextSize, DrawingColor } from './p5Wrapper';

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

const Navbar: React.FC<Props> = ({ onUpdateDrawingState, onErase, drawingState }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [text, setText] = useState('');

  const colors: DrawingColor[] = ['light-red', 'light-blue', 'light-green', 'light-pink', 'light-grey'];
  const sizes: StrokeSize[] = ['S', 'M', 'L'];

  const isCurrentSize = (size: StrokeSize) => {
    return drawingState.mode === 'text' 
      ? size === drawingState.textSize 
      : size === drawingState.strokeSize;
  };

  const handleEraseClick = () => {
    onUpdateDrawingState({ mode: 'erase' });
    onErase();
  };

  return (
    <div className="bg-white shadow-md text-gray-700">
      <div className="flex items-center justify-between px-4 py-2">
        <h1 className="text-xl font-semibold">Drawing Tools</h1>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-1 hover:bg-gray-100 rounded"
        >
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
      </div>
      
      {isExpanded && (
        <div className="px-4 py-2 border-t">
          <div className="flex flex-wrap gap-4">
            {/* Drawing Tools */}
            <div className="flex items-center gap-2">
              <button 
                onClick={() => onUpdateDrawingState({ mode: 'draw' })}
                className={`flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100 ${drawingState.mode === 'draw' ? 'bg-gray-100' : ''}`}
              >
                <Pencil size={20} />
                <span>Draw</span>
              </button>
              <button 
                onClick={handleEraseClick}
                className={`flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100 ${drawingState.mode === 'erase' ? 'bg-gray-100' : ''}`}
              >
                <Eraser size={20} />
                <span>Erase</span>
              </button>
              <button 
                onClick={() => onUpdateDrawingState({ mode: 'text' })}
                className={`flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100 ${drawingState.mode === 'text' ? 'bg-gray-100' : ''}`}
              >
                <Type size={20} />
                <span>Text</span>
              </button>
            </div>

            {/* Stroke Sizes */}
            <div className="flex items-center gap-2">
              <span className="text-sm">Size:</span>
              {sizes.map(size => (
                <button
                  key={size}
                  onClick={() => onUpdateDrawingState({ strokeSize: size, textSize: size })}
                  className={`px-3 py-1 rounded hover:bg-gray-100 border ${
                    isCurrentSize(size) 
                      ? 'border-gray-700 font-medium' 
                      : 'border-gray-300'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>

            {/* Colors */}
            <div className="flex items-center gap-2">
              <span className="text-sm">Color:</span>
              {colors.map(color => (
                <button
                  key={color}
                  onClick={() => onUpdateDrawingState({ color })}
                  className={`w-6 h-6 rounded-full ${color === drawingState.color ? 'border-2 border-gray-700' : 'border border-gray-300'}`}
                  style={{ backgroundColor: COLORS[color] }}
                />
              ))}
            </div>

            {/* Text Input */}
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Enter text..."
                value={text}
                onChange={(e) => {
                  setText(e.target.value);
                  onUpdateDrawingState({ text: e.target.value });
                }}
                className="px-2 py-1 border rounded text-gray-700 placeholder-gray-500"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar; 