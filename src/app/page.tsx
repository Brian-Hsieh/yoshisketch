import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mt-6 mb-4">Infinite Canvas</h1>
      <div className="border border-gray-500 rounded-lg overflow-hidden">
        asdf
      </div>
      <div className="mt-4 text-gray-600">
        <p>Instructions:</p>
        <ul className="list-disc pl-5">
          <li>Drag with middle mouse button or CTRL+drag to pan</li>
          <li>Use mouse wheel to zoom in/out</li>
          <li>Draw with left mouse button</li>
          <li>Press 'c' to clear canvas</li>
        </ul>
      </div>
    </div>
  );
}
