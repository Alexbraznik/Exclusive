import { BtnArrow, RectangleCategory } from "../../widgets";
import styles from "./BrowseByCategory.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef, useState } from "react";
import { BrowseByCategorySlider } from "../constants/BrowseByCategorySlider";
import { useEffectSlider } from "../../../shared/model";

export function BrowseByCategory(): JSX.Element {
  const [swiper, setSwiper] = useState(null); // хук, чтобы ref инициализировались после swiper

  // ref для стрелочек слайдера
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  useEffectSlider({ prevRef, nextRef, swiper });

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
        loop={true}
        modules={[Navigation]}
        onSwiper={setSwiper}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
      >
        {BrowseByCategorySlider.map((item) => (
          <SwiperSlide key={item.id} className={styles.item}>
            <div className={styles["item__container"]}>
              <div>{item.image}</div>
              <p>{item.title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
