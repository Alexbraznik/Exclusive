import { RefObject, useEffect } from "react";

export const useClickOutside = (
  ref: RefObject<Element>,
  callback: () => void
) => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        ref?.current &&
        !ref?.current?.contains(e.target as Element) &&
        callback
      ) {
        setTimeout(() => {
          callback();
        }, 200);
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [ref, callback]);
};
