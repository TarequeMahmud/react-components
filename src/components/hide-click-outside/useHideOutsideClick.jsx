import { useEffect } from "react";

export default function useHideOutsideClick(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (ref.current && ref.current.contains(event.target)) return;

      handler();
    };
    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
}
