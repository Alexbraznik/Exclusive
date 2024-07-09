import { CategoryMenu, Slider } from "./";
import styles from "./CategorySection.module.scss";

export function CategorySection(): JSX.Element {
  return (
    <section className={styles.wrapper}>
      <CategoryMenu />
      <Slider />
    </section>
  );
}
