"use client";

import React, { useEffect, useRef } from "react";
import p5 from "p5";

const P5Wrapper: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) return;
  });

  return <div>asdfasdAA</div>;
};

export default P5Wrapper;
