import styles from "./ProductSlider.module.scss";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProductSliderList } from "../../constants/ProductSliderList";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { RefObject, useEffect, useState } from "react";
import { useEffectSlider } from "../../../../shared/model";
import { ItemProduct } from "../../../widgets";

interface IProductSliderProps {
  prevRef: RefObject<HTMLButtonElement>;
  nextRef: RefObject<HTMLButtonElement>;
}

export function ProductSlider({
  prevRef,
  nextRef,
}: IProductSliderProps): JSX.Element {
  const [swiper, setSwiper] = useState(null); // хук, чтобы ref инициализировались после swiper

  useEffectSlider({ prevRef, nextRef, swiper });

  return (
    <div className={styles.wrapper}>
      <Swiper
        className={styles.itemList}
        onSwiper={setSwiper}
        slidesPerView={4}
        modules={[Navigation]}
        spaceBetween={30}
        loop={true}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        breakpoints={{
          1: {
            slidesPerView: 2, // Если больше 480 пикселей
          },
          360: {
            slidesPerView: 2, // Если больше 480 пикселей
          },
          768: {
            slidesPerView: 3, // Если больше 480 пикселей
          },
          1024: {
            slidesPerView: 4, // Если больше 768 пикселей
          },
        }}
      >
        {ProductSliderList.map((item) => (
          <SwiperSlide key={item.id}>
            <ItemProduct item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
