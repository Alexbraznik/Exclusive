import styles from "./ShopNow.module.scss";
import { motion } from "framer-motion";

interface ShopNowProps {
  style?: React.CSSProperties;
}

export function ShopNow({ style }: ShopNowProps): JSX.Element {
  return (
    <motion.button className={styles.btn} style={style}>
      Shop Now
    </motion.button>
  );
}
