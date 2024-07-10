import { useEffect } from "react";

// Функция инициализации ref
export function useEffectSlider({ prevRef, nextRef, swiper }) {
  useEffect(() => {
    if (prevRef.current && nextRef.current) {
      const navigation = {
        prevEl: prevRef.current,
        nextEl: nextRef.current,
      };
    }
  }, [swiper, prevRef, nextRef]);
}
