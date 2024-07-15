import { CategorySection, Slider } from ".";
import styles from "./CategoryList.module.scss";

export function CategoryList(): JSX.Element {
  return (
    <section className={styles.wrapper}>
      <CategorySection />
      <Slider />
    </section>
  );
}
