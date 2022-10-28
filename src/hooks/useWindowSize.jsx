import { useState, useEffect } from "react";
export const useWindowSize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateWidth = (e) => {
      setWidth(e.target.innerWidth);
    };

    window.addEventListener("resize", updateWidth);
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  });

  return { width };
};
