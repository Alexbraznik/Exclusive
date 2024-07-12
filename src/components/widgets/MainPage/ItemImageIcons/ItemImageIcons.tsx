import styles from "./ItemImageIcons.module.scss";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";

import { useState } from "react";

interface IItemImageIconsProps {
  size?: number;
}

export function ItemImageIcons({
  size = 24,
}: IItemImageIconsProps): JSX.Element {
  const [isLike, setIsLike] = useState(false);

  return (
    <div className={styles.icons}>
      <button onClick={() => setIsLike(!isLike)}>
        <IoMdHeart
          size={size}
          style={{
            color: isLike ? "#e31313" : "white",
            stroke: "black",
            strokeWidth: 20,
          }}
        />
      </button>
      <button>
        <IoEyeOutline size={size} />
      </button>
    </div>
  );
}
