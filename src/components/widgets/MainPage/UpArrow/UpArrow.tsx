import styles from "./UpArrow.module.scss";
import { IoArrowForwardSharp } from "react-icons/io5";

export function UpArrow({ className }): JSX.Element {
  return (
    <button className={`${styles["btn-next"]} ${className}`}>
      <IoArrowForwardSharp className={styles["arrow-next"]} />
    </button>
  );
}
