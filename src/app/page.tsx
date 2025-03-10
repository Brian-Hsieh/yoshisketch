import React from "react";
import InfCanvas from "../components/canvas";

export default function Home() {
  return (
      <div className="mt-4 text-gray-600">
        <p>Instructions:</p>
        <ul className="list-disc pl-5">
          <li>Drag with middle mouse button or CTRL+drag to pan</li>
          <li>Use mouse wheel to zoom in/out</li>
          <li>Draw with left mouse button</li>
          <li>Press 'c' to clear canvas</li>
        </ul>
    <div className="flex flex-col h-screen w-screen overflow-hidden bg-gray-100">
      <div className="flex-grow relative">
        <InfCanvas 
        />
      </div>
    </div>
  );
}
