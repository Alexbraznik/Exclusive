import { ShopNow } from "../../../widgets";
import styles from "./Description.module.scss";

interface IDescriptionProps {
  h3: string;
  p: string;
  style?: IDefaultStyle;
}

interface IDefaultStyle extends React.CSSProperties {
  h3?: React.CSSProperties;
  p?: React.CSSProperties;
}

export function Description({ h3, p, style }: IDescriptionProps): JSX.Element {
  const defaultStyle = {
    h3: { fontSize: "24px", lineHeight: "24px" },
    p: { fontSize: "14px", lineHeight: "24px" },
  };

  const h3Style = style?.h3 || defaultStyle.h3;
  const pStyle = style?.p || defaultStyle.p;

  return (
    <div className={styles.decription} style={style}>
      <h3 style={h3Style}>{h3}</h3>
      <p style={pStyle}>{p}</p>
      <ShopNow style={{ padding: 0 }} />
    </div>
  );
}
