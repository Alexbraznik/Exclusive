import styles from "./FlashSales.module.scss";
import { setTimer } from "./Timer/setTimer";
// import { IoArrowForwardSharp } from "react-icons/io5";
import { ProductSlider, Timer } from "./";
import { useRef } from "react";
import { BtnArrow, RectangleCategory } from "../../widgets";

export function FlashSales(): JSX.Element {
  const expiryTimestamp = setTimer(10, 21); // установка таймера (дни, часы)

  // ref для стрелочек слайдера
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section className={styles.wrapper}>
      <RectangleCategory>Today’s</RectangleCategory>

      <div className={styles.flashSales}>
        <h2>Flash Sales</h2>
        <Timer expiryTimestamp={expiryTimestamp} />

        <BtnArrow prevRef={prevRef} nextRef={nextRef} />
      </div>

      <ProductSlider prevRef={prevRef} nextRef={nextRef} />
      <button className={styles.viewAll}>View All Products</button>
    </section>
  );
}
