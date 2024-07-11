import { DropDown } from "../../../../shared/assets/MainPage";
import { ShopNow } from "../ShopNow/ShopNow";
import styles from "./TopHeader.module.scss";

export function TopHeader(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.sale}>
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <ShopNow style={{ fontSize: "14px", fontWeight: "600" }} />
        </div>
        <div className={styles.language}>
          <p>English</p>
          <button>
            <DropDown className={styles.dropdown} />
          </button>
        </div>
      </div>
    </div>
  );
}
