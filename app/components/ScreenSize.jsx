"use client";
import React from "react";
import { useState, useEffect } from "react";

const ScreenSize = () => {
  const [windowDimension, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  });

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimension]);

  return (
    <div>
      <p>Width: {windowDimension.winWidth}</p>
      <p>Height: {windowDimension.winHeight}</p>
    </div>
  );
};

export default ScreenSize;
