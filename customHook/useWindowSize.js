import { useState, useEffect } from "react";

export default function useWindowSize() {
  const hasWindow = typeof window !== "undefined";

  function getWindowSize() {
    const width = hasWindow ? window.innerWidth : null;
    const height = hasWindow ? window.innerHeight : null;
    return {
      width,
      height,
    };
  }

  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    if (hasWindow) {
      function resize() {
        setWindowSize(getWindowSize());
      }

      window.addEventListener("resize", resize);
      return () => window.removeEventListener("resize", resize);
    }
  }, [hasWindow]);

  return windowSize;
}
