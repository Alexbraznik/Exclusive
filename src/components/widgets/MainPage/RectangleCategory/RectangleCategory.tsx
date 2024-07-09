import styles from "./RectangleCategory.module.scss";

export function RectangleCategory({ children }): JSX.Element {
  return (
    <div className={styles.container}>
      <div></div>
      <p>{children}</p>
    </div>
  );
}
