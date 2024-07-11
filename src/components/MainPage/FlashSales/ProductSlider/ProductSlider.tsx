import styles from "./ProductSlider.module.scss";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProductSliderList } from "../../constants/ProductSliderList";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { RefObject, useState } from "react";
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
        slidesPerView={5}
        modules={[Navigation]}
        spaceBetween={30}
        loop={true}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
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
