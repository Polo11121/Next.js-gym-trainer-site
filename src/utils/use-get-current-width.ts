import { useLayoutEffect, useState } from "react";

export const useGetCurrentWidth = (): number => {
  const [currentWidth, setCurrentWidth] = useState(() => window.innerWidth);

  useLayoutEffect(() => {
    const updateSize = (): void => {
      setCurrentWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateSize);
    return (): void => window.removeEventListener("resize", updateSize);
  }, []);

  return currentWidth;
};
