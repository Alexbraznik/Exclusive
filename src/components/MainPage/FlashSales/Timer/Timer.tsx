import { useTimer } from "react-timer-hook";
import styles from "./Timer.module.scss";

interface ITimerItems {
  label: string;
  value: number;
  isHidden?: boolean;
}

export function Timer({ expiryTimestamp }): JSX.Element {
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp,
  });

  const timerItems: ITimerItems[] = [
    { label: "Days", value: days },
    { label: "Hours", value: hours },
    { label: "Minutes", value: minutes },
    { label: "Seconds", value: seconds, isHidden: true },
  ];

  return (
    <div className={styles.container}>
      {timerItems.map((item, index) => (
        <div key={index} className={styles.item}>
          <p>{item.label}</p>
          <div>
            <span className={styles.item__countdown}>{item.value}</span>
            <q style={{ visibility: item.isHidden ? "hidden" : "visible" }}>
              :
            </q>
          </div>
        </div>
      ))}
    </div>
  );
}
