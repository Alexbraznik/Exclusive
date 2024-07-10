import { useRef, useState } from "react";
import { BtnArrow, ItemProduct, RectangleCategory } from "../../widgets";
import styles from "./OurProducts.module.scss";
import { OurProductsList } from "../constants/OurProductsList";

export function OurProducts(): JSX.Element {
  const [swiper, setSwiper] = useState(null); // хук, чтобы ref инициализировались после swiper

  // ref для стрелочек слайдера
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section>
      <RectangleCategory>Our Products</RectangleCategory>

      <div className={styles.header}>
        <h2>Explore Our Products</h2>
        <BtnArrow prevRef={prevRef} nextRef={nextRef} />
      </div>

      <div className={styles.itemList}>
        {OurProductsList.map((item) => (
          <ItemProduct item={item} key={item.id} ratingFlex />
        ))}
      </div>
    </section>
  );
}
