import styles from "./Slider.module.scss";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { CategoryMenuSlider } from "../../constants/CategoryMenuSlider";
import Image from "next/image";
import { FaApple } from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";
import { Pagination, Autoplay, Mousewheel } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/mousewheel";
import { useEffect } from "react";
import { ShopNow } from "../../../widgets";

export function Slider(): JSX.Element {
  // useEffect для стилизации Swiper
  useEffect(() => {
    const paginationBullets = document.querySelectorAll(
      ".swiper-pagination-bullet"
    ) as NodeListOf<HTMLElement>;
    paginationBullets.forEach((bullet) => {
      bullet.style.border = "2px solid white";
    });

    const paginationContainer = document.querySelector(
      ".swiper-pagination"
    ) as HTMLElement;
    paginationContainer.style.paddingBottom = "11px";
  }, []);

  return (
    <div>
      <Swiper
        className={styles.wrapper}
        modules={[Pagination, Autoplay, Mousewheel]}
        pagination={{ clickable: true }}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        mousewheel={{ sensitivity: 1 }}
        loop={true}
        style={
          {
            "--swiper-pagination-color": "#DB4444",
            "--swiper-pagination-bullet-inactive-color": "#808080",
            "--swiper-pagination-bullet-size": "12px",
            "--swiper-pagination-bullet-horizontal-gap": "8px",
          } as any
        }
      >
        {CategoryMenuSlider.map((item) => (
          <SwiperSlide key={item.id} className={styles.item}>
            <div className={styles["item__description"]}>
              <div className={styles["item__description-title"]}>
                <FaApple className={styles.faApple} />
                <p>iPhone 14 Series</p>
              </div>
              <p className={styles["item-voucher"]}>Up to 10% off Voucher</p>
              <div className={styles["item__action"]}>
                <ShopNow style={{ scale: "1.01" }} />
                <IoMdArrowForward className={styles.arrow} />
              </div>
            </div>
            <Image
              src={item.photo}
              alt="Iphone14"
              priority
              className={styles["item-image"]}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
