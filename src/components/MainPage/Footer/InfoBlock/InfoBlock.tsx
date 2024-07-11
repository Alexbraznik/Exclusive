import Link from "next/link";
import styles from "./InfoBlock.module.scss";
import { LinkList } from "./LinkConstants";

interface IInfoBlockProps {
  title: string;
  links: LinkList[];
  style?: React.CSSProperties;
}

export function InfoBlock({
  title,
  links,
  style,
}: IInfoBlockProps): JSX.Element {
  return (
    <div className={styles.container} style={style}>
      <h3>{title}</h3>
      <ul>
        {links.map((item, index) => (
          <li key={index}>
            <Link href={item.url} className={styles.link}>
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
