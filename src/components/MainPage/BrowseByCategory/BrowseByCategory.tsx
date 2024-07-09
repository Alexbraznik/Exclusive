import { BtnArrow, RectangleCategory } from "../../widgets";
import styles from "./BrowseByCategory.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";
import { BrowseByCategorySlider } from "../constants/BrowseByCategorySlider";

export function BrowseByCategory(): JSX.Element {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section className={styles.wrapper}>
      <RectangleCategory>Categories</RectangleCategory>
      <div className={styles.header}>
        <h2>Browse By Category</h2>
        <BtnArrow prevRef={prevRef} nextRef={nextRef} />
      </div>
      <Swiper
        className={styles.categoryList}
        slidesPerView={6}
        spaceBetween={30}
      >
        {BrowseByCategorySlider.map((item) => (
          <SwiperSlide key={item.id} className={styles.item}>
            <div className={styles["item-container"]}>
              <div>{item.picture}</div>
              <p>{item.title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
