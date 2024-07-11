import styles from "./MainPage.module.scss";
import {
  BestSellingProducts,
  BrowseByCategory,
  CategorySection,
  DiscountedProduct,
  Featured,
  FlashSales,
  Footer,
  Header,
  OurProducts,
} from "./";

export function MainPage(): JSX.Element {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <CategorySection />
          <FlashSales />
          <BrowseByCategory />
          <BestSellingProducts />
          <DiscountedProduct />
          <OurProducts />
          <Featured />
        </div>
      </div>
      <Footer />
    </div>
  );
}
