"use client";

import React from "react";
import dynamic from "next/dynamic";
import type { DrawingState } from "./p5Wrapper";

const P5Wrapper = dynamic(() => import("./p5Wrapper"), { ssr: false });

interface Props {
  drawingState: DrawingState;
  onErase: (callback: () => void) => void;
}

const InfCanvas: React.FC<Props> = (props) => {
  return <P5Wrapper {...props} />;
};

export default InfCanvas;
