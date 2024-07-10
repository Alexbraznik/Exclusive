import styles from "./ItemImageIcons.module.scss";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";

interface IItemImageIconsProps {
  size?: number;
}

export function ItemImageIcons({
  size = 24,
}: IItemImageIconsProps): JSX.Element {
  return (
    <div className={styles.icons}>
      <button>
        <CiHeart size={size} />
      </button>
      <button>
        <IoEyeOutline size={size} />
      </button>
    </div>
  );
}
