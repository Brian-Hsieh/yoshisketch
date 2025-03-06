"use client";

import React, { useEffect, useRef } from "react";
import p5 from "p5";

const P5Wrapper: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) return;

    let p5Instance: p5;

    const sketch = (p: p5) => {
      p.setup = () => {
        p.createCanvas(800, 600);
        p.background(255);
      };
    };

    p5Instance = new p5(sketch, container.current);

    return () => {
      p5Instance.remove();
    };
  });

  return <div ref={container} />;
};

export default P5Wrapper;
