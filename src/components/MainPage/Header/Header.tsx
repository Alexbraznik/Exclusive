import { BsSearch } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";

import styles from "./Header.module.scss";

export function Header(): JSX.Element {
  return (
    <header className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.nav}>
          <h1>Exclusive</h1>
          <ul>
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
            <li>Sign Up</li>
          </ul>
        </div>
        <div className={styles["shopping__tools"]}>
          <div className={styles["shopping__tools-search"]}>
            <input type="text" placeholder="What are you looking for?" />
            <BsSearch className={styles.search} />
          </div>
          <div className={styles["shopping__tools-purchases"]}>
            <IoMdHeartEmpty className={styles.wishlist} />
            <IoCartOutline className={styles.cart} />
          </div>
        </div>
      </div>

      <div className={styles.line}></div>
    </header>
  );
}
