import Image from "next/image";
import styles from "./ProductSlider.module.scss";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import Rating from "@mui/material/Rating";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProductSliderList } from "../../constants/ProductSliderList";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { RefObject, useEffect, useState } from "react";

interface IProductSliderProps {
  prevRef: RefObject<HTMLButtonElement>;
  nextRef: RefObject<HTMLButtonElement>;
}

export function ProductSlider({
  prevRef,
  nextRef,
}: IProductSliderProps): JSX.Element {
  const [swiper, setSwiper] = useState(null); // хук, чтобы ref инициализировались после swiper

  // хук инициализации ref
  useEffect(() => {
    if (prevRef.current && nextRef.current) {
      const navigation = {
        prevEl: prevRef.current,
        nextEl: nextRef.current,
      };
    }
  }, [swiper, prevRef, nextRef]);

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
          <SwiperSlide key={item.id} className={styles.item}>
            <div className={styles["item__picture-container"]}>
              <div>
                <Image src={item.picture} alt="Gamepad" priority></Image>
              </div>
              <div className={styles.discount}>
                <span>-{item.discount}</span>
              </div>
              <div className={styles.icons}>
                <button>
                  <CiHeart size={24} />
                </button>
                <button>
                  <IoEyeOutline size={24} />
                </button>
              </div>
              <button className={styles.addCart}>
                <p>Add To Cart</p>
              </button>
            </div>
            <div className={styles["item__description"]}>
              <p>{item.title}</p>
              <div className={styles["item__description-discount"]}>
                <span className={styles["current-price"]}>
                  ${item.currentPrice}
                </span>
                <span className={styles["prev-price"]}>${item.prevPrice}</span>
              </div>
              <div className={styles.item__rating}>
                <Rating defaultValue={5} precision={0.5} />
                <p>({item.rating})</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
