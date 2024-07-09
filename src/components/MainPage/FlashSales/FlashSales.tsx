import styles from "./FlashSales.module.scss";
import { setTimer } from "./Timer/setTimer";
import { IoArrowForwardSharp } from "react-icons/io5";
import { ProductSlider, Timer } from "./";
import { useRef } from "react";

export function FlashSales(): JSX.Element {
  const expiryTimestamp = setTimer(10, 21); // установка таймера (дни, часы)

  // ref для стрелочек слайдера
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section className={styles.wrapper}>
      <div className={styles.today}>
        <div></div>
        <p>Todays</p>
      </div>

      <div className={styles.flashSales}>
        <h2>Flash Sales</h2>
        <Timer expiryTimestamp={expiryTimestamp} />

        <div className={styles.flashSales__arrow}>
          <button ref={prevRef} className={styles["btn-prev"]}>
            <IoArrowForwardSharp className={styles["arrow-prev"]} />
          </button>
          <button ref={nextRef} className={styles["btn-next"]}>
            <IoArrowForwardSharp className={styles["arrow-next"]} />
          </button>
        </div>
      </div>

      <ProductSlider prevRef={prevRef} nextRef={nextRef} />
      <button className={styles.viewAll}>View All Products</button>
    </section>
  );
}
