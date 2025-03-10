import React from "react";
import InfCanvas from "../components/canvas";

export default function Home() {
  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden bg-gray-100">
      <div className="flex-grow relative">
        <InfCanvas 
        />
      </div>
    </div>
  );
}
