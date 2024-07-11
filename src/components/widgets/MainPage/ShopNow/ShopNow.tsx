import styles from "./ShopNow.module.scss";

interface ShopNowProps {
  style?: React.CSSProperties;
}

export function ShopNow({ style }: ShopNowProps): JSX.Element {
  return (
    <button className={styles.btn} style={style}>
      Shop Now
    </button>
  );
}
