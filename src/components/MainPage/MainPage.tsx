import styles from "./MainPage.module.scss";
import {
  BestSellingProducts,
  BrowseByCategory,
  CategorySection,
  DiscountedProduct,
  FlashSales,
  Header,
  OurProducts,
} from "./";

export function MainPage(): JSX.Element {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <Header />
        <CategorySection />
        <FlashSales />
        <BrowseByCategory />
        <BestSellingProducts />
        <DiscountedProduct />
        <OurProducts />
      </div>
    </div>
  );
}
