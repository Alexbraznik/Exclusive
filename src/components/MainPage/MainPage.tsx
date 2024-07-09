import styles from "./MainPage.module.scss";
import { CategorySection, FlashSales, Header } from "./";

export function MainPage(): JSX.Element {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <Header />
        <CategorySection />
        <FlashSales />
      </div>
    </div>
  );
}
