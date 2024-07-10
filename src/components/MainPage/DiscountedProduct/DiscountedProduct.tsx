import { useTimer } from "react-timer-hook";
import { Button, setTimer } from "../../widgets";
import styles from "./DiscountedProduct.module.scss";
import Image from "next/image";
import { Boombox } from "../../../shared/assets/MainPage";

interface ITimerItems {
  label: string;
  value: number;
  isHidden?: boolean;
}

export function DiscountedProduct(): JSX.Element {
  const expiryTimestamp = setTimer(23, 5); // установка таймера (дни, часы)

  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp,
  });

  const timerItems: ITimerItems[] = [
    { label: "Days", value: days },
    { label: "Hours", value: hours },
    { label: "Minutes", value: minutes },
    { label: "Seconds", value: seconds },
  ];

  return (
    <section className={styles.wrapper}>
      <div className={styles.description}>
        <p>Categories</p>
        <h2>Enhance Your Music Experience</h2>
        <div className={styles["description__timer"]}>
          {timerItems.map((item, index) => (
            <div key={index} className={styles["description__timer-item"]}>
              <span>{item.value}</span>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
        <Button className={styles.button}>Buy Now!</Button>
      </div>
      <div className={styles["image__container"]}>
        <div className={styles["container-blur"]}></div>
        <Image
          src={Boombox}
          alt="Boombox"
          layout="responsive"
          priority
          className={styles.image}
        ></Image>
      </div>
    </section>
  );
}
