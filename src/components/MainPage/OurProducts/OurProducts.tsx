import { useRef, useState } from "react";
import {
  BtnArrow,
  Button,
  ItemProduct,
  RectangleCategory,
} from "../../widgets";
import styles from "./OurProducts.module.scss";
import "swiper/css";
import { OurProductsList } from "../constants/OurProductsList";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation } from "swiper/modules";
import "swiper/css/grid";
import { useEffectSlider } from "../../../shared/model";

export function OurProducts(): JSX.Element {
  const [swiper, setSwiper] = useState(null); // хук, чтобы ref инициализировались после swiper

  // ref для стрелочек слайдера
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  useEffectSlider({ prevRef, nextRef, swiper });

  return (
    <section className={styles.wrapper}>
      <RectangleCategory>Our Products</RectangleCategory>

      <div className={styles.header}>
        <h2>Explore Our Products</h2>
        <BtnArrow prevRef={prevRef} nextRef={nextRef} />
      </div>

      <Swiper
        className={styles.itemList}
        onSwiper={setSwiper}
        slidesPerView={4}
        grid={{
          rows: 2,
          fill: "row",
        }}
        spaceBetween={30}
        modules={[Navigation, Grid]}
        loop
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
      >
        {OurProductsList.map((item) => (
          <SwiperSlide key={item.id}>
            <ItemProduct
              item={item}
              ratingFlex
              choiseColor={item.ChooseСolor}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Button style={{ margin: "0 auto" }}>View All Products</Button>
    </section>
  );
}
