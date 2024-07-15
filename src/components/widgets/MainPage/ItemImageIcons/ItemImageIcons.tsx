import styles from "./ItemImageIcons.module.scss";
import { IoEyeOutline } from "react-icons/io5";
import { IoMdHeart } from "react-icons/io";
import { useState } from "react";
import { motion } from "framer-motion";
import { IoEyeOffOutline } from "react-icons/io5";
interface IItemImageIconsProps {
  size?: number;
}

export function ItemImageIcons({
  size = 24,
}: IItemImageIconsProps): JSX.Element {
  const [isLike, setIsLike] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      <div className={styles.icons}>
        <button onClick={() => setIsLike(!isLike)}>
          <motion.div
            whileTap={{ scale: 0.7 }}
            className={styles["IoMdHeart-container"]}
            transition={{ type: "spring", stiffness: 600, damping: 4 }}
          >
            <IoMdHeart
              size={size}
              style={{
                color: isLike ? "#e31313" : "white",
                stroke: "black",
                strokeWidth: 20,
              }}
            />
          </motion.div>
        </button>

        <button onClick={() => setIsVisible(!isVisible)}>
          {isVisible ? (
            <IoEyeOutline size={size} />
          ) : (
            <IoEyeOffOutline size={size} />
          )}
        </button>
      </div>
    </>
  );
}
