import { useState } from "react";
import { DropDown } from "../../../../shared/assets/MainPage";
import styles from "./CategorySection.module.scss";
import { ItemList } from "./ItemList/ItemList";
import {
  MensFashionArr,
  WomansFashionArr,
} from "./CategoryListConst/ItemListArr";

export function CategorySection(): JSX.Element {
  const [isOpenWoman, setIsOpenWoman] = useState(false);
  const [isOpenMan, setIsOpenMan] = useState(false);

  return (
    <nav className={styles.wrapper}>
      <ul className={styles.categories}>
        <li
          className={styles["categories__fashion"]}
          onMouseEnter={() => setIsOpenWoman(true)}
          onMouseLeave={() => setIsOpenWoman(false)}
        >
          <span> Woman’s Fashion</span>
          <DropDown className={styles.dropdown} />
          <div>{isOpenWoman && <ItemList items={WomansFashionArr} />}</div>
        </li>
        <li
          className={styles["categories__fashion"]}
          onMouseEnter={() => setIsOpenMan(true)}
          onMouseLeave={() => setIsOpenMan(false)}
        >
          <span>Men’s Fashion</span>
          <DropDown className={styles.dropdown} />
          <div> {isOpenMan && <ItemList items={MensFashionArr} />}</div>
        </li>
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
