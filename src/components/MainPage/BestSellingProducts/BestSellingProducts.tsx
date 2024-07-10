import { Button, ItemProduct, RectangleCategory } from "../../widgets";
import { BestSellingProductsList } from "../constants/BestSellingProductsList";
import styles from "./BestSellingProducts.module.scss";

export function BestSellingProducts(): JSX.Element {
  return (
    <section className={styles.wrapper}>
      <RectangleCategory>This Month</RectangleCategory>
      <div className={styles.header}>
        <h2>Best Selling Products</h2>
        <Button style={{ marginLeft: "auto" }}>View All</Button>
      </div>

      <div className={styles.itemList}>
        {BestSellingProductsList.map((item) => (
          <ItemProduct item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
}
