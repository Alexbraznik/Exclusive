import { forwardRef, RefObject } from "react";
import styles from "./BtnArrow.module.scss";
import { IoArrowForwardSharp } from "react-icons/io5";

interface IBtnArrowProps {
  prevRef: RefObject<HTMLButtonElement>;
  nextRef: RefObject<HTMLButtonElement>;
}

export const BtnArrow = forwardRef<HTMLDivElement, IBtnArrowProps>(
  ({ prevRef, nextRef }, ref) => {
    return (
      <div ref={ref} className={styles.container}>
        <button ref={prevRef} className={styles["btn-prev"]}>
          <IoArrowForwardSharp className={styles["arrow-prev"]} />
        </button>
        <button ref={nextRef} className={styles["btn-next"]}>
          <IoArrowForwardSharp className={styles["arrow-next"]} />
        </button>
      </div>
    );
  }
);
