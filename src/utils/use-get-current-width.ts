"use client";

import { useLayoutEffect, useState } from "react";

export const useGetCurrentWidth = (): number => {
  const [currentWidth, setCurrentWidth] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    const updateSize = (): void => {
      setCurrentWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateSize);
    return (): void => window.removeEventListener("resize", updateSize);
  }, []);

  return currentWidth;
};
