import { motion } from "framer-motion";
import styles from "./LocalizationComp.module.scss";

export function LocalizationComp(): JSX.Element {
  return (
    <motion.div
      className={styles.wrapper}
      initial={{ opacity: 0, y: -1000 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.2,
        },
      }}
      exit={{
        opacity: 0,
        y: -1000,
        transition: {
          duration: 1,
        },
      }}
    >
      <p>Русский</p>
      <p>English</p>
    </motion.div>
  );
}
