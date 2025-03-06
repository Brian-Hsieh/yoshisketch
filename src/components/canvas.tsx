"use client";

import React from "react";
import dynamic from "next/dynamic";

const P5Wrapper = dynamic(() => import("./p5Wrapper"), { ssr: false });

const InfCanvas: React.FC = () => {
  return <P5Wrapper />;
};

export default InfCanvas;
