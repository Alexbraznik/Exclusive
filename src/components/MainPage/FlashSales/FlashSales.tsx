import styles from "./FlashSales.module.scss";
import { ProductSlider, Timer } from "./";
import { useRef } from "react";
import { BtnArrow, Button, RectangleCategory, setTimer } from "../../widgets";

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
      <Button style={{ margin: "0 auto", marginBottom: "60px" }}>
        View All Products
      </Button>
    </section>
  );
}
