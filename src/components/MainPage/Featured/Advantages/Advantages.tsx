import styles from "./Advantages.module.scss";
import { AdvantagesList } from "./AdvantagesList";

export function Advantages(): JSX.Element {
  return (
    <div className={styles.container}>
      {AdvantagesList.map((item) => (
        <div className={styles.item}>
          <div>{item.icon}</div>
          <h3>{item.h3}</h3>
          <p>{item.p}</p>
        </div>
      ))}
    </div>
  );
}
