import styles from "./MainPage.module.scss";
import {
  BestSellingProducts,
  BrowseByCategory,
  CategorySection,
  DiscountedProduct,
  Featured,
  FlashSales,
  Header,
  OurProducts,
} from "./";
import { UpArrow } from "../widgets";
import { TopHeader, Footer } from "../../shared/components";

export function MainPage(): JSX.Element {
  return (
    <div className={styles.main}>
      <TopHeader />
      <Header />
      <div className={styles.container}>
        <CategorySection />
        <FlashSales />
        <BrowseByCategory />
        <BestSellingProducts />
        <DiscountedProduct />
        <OurProducts />
        <Featured />

        {/* <UpArrow className={styles.upArrow} /> */}
      </div>
      <Footer />
    </div>
  );
}
