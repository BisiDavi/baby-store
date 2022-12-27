/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useCallback, useEffect } from "react";

export default function useScroll() {
  const [scroll, setScroll] = useState<any>(null);

  const handleNavigation = useCallback(
    (e: any) => {
      const window = e.currentTarget;
      setScroll(window.scrollY);
    },
    [scroll]
  );

  useEffect(() => {
    setScroll(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, []);

  return {
    scroll,
  };
}
