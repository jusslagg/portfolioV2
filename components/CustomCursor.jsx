"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

export const CustomCursor = () => {
  const [coords, setCoords] = useState({ x: -200, y: -200 });
  const [variant, setVariant] = useState("default");

  useEffect(() => {
    const handleMove = (event) => {
      setCoords({ x: event.clientX, y: event.clientY });
    };
    const handlePointerOver = (event) => {
      const target = event.target;
      if (target?.closest("[data-cursor='focus']")) {
        setVariant("focus");
      }
    };
    const handlePointerOut = (event) => {
      const target = event.target;
      if (target?.closest("[data-cursor='focus']")) {
        setVariant("default");
      }
    };

    document.addEventListener("mousemove", handleMove);
    document.addEventListener("pointerover", handlePointerOver);
    document.addEventListener("pointerout", handlePointerOut);
    return () => {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("pointerover", handlePointerOver);
      document.removeEventListener("pointerout", handlePointerOut);
    };
  }, []);

  return (
    <div
      className={clsx(
        "pointer-events-none fixed z-[999] hidden -translate-x-1/2 -translate-y-1/2 rounded-full border border-fuchsia-400/70 mix-blend-screen lg:block",
        variant === "default" && "h-6 w-6 bg-fuchsia-400/20 backdrop-blur",
        variant === "focus" && "h-16 w-16 border-2 bg-fuchsia-400/10 backdrop-blur-2xl",
      )}
      style={{
        left: `${coords.x}px`,
        top: `${coords.y}px`,
        transition: "transform 0.2s ease, width 0.2s ease, height 0.2s ease",
      }}
    />
  );
};
