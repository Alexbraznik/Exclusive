import styles from "./ItemList.module.scss";

interface ItemListProps {
  items: string[];
}

export function ItemList({ items }: ItemListProps): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.container}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
