import Image from "next/image";
import { ItemImageIcons } from "../ItemImageIcons/ItemImageIcons";
import styles from "./ItemProduct.module.scss";
import { Rating } from "@mui/material";

export function ItemProduct({ item, ratingFlex }): JSX.Element {
  return (
    <div className={styles.item}>
      <div className={styles["item__image-container"]}>
        <Image src={item.image} alt={item.imageTitle} width={190}></Image>

        {item.discount && (
          <div className={styles.discount}>
            <span>-{item.discount}</span>
          </div>
        )}

        <ItemImageIcons />

        <button className={styles.addCart}>
          <p>Add To Cart</p>
        </button>
      </div>

      <div className={styles["item__description"]}>
        <p>{item.title}</p>

        <div className={styles["item__description-discount"]}>
          <span className={styles["current-price"]}>${item.currentPrice}</span>
          {item.prevPrice && (
            <span className={styles["prev-price"]}>${item.prevPrice}</span>
          )}
        </div>
        <div className={styles.item__rating}>
          <Rating defaultValue={5} precision={0.5} />
          <p>{item.rating}</p>
        </div>
      </div>
    </div>
  );
}
