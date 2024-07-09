import { DropDown } from "../../../../shared/assets/MainPage";
import styles from "./CategoryMenu.module.scss";

export function CategoryMenu(): JSX.Element {
  return (
    <nav className={styles.wrapper}>
      <ul className={styles.categories}>
        <div className={styles["categories__fashion"]}>
          <li> Woman’s Fashion</li>
          <DropDown className={styles.dropdown} />
        </div>
        <div className={styles["categories__fashion"]}>
          <li>Men’s Fashion</li>
          <DropDown className={styles.dropdown} />
        </div>
        <li>Electronics</li>
        <li>Home & Lifestyle</li>
        <li>Medicine</li>
        <li>Sports & Outdoor</li>
        <li>Baby’s & Toys</li>
        <li>Groceries & Pets</li>
        <li>Health & Beauty</li>
      </ul>
    </nav>
  );
}
