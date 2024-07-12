import Image from "next/image";
import { ItemImageIcons } from "../ItemImageIcons/ItemImageIcons";
import styles from "./ItemProduct.module.scss";
import { Rating } from "@mui/material";

export function ItemProduct({
  item,
  ratingFlex = false,
  choiseColor = false,
}): JSX.Element {
  // Функция для определения цвета color-one
  const getColor = (colorName: string): string => {
    const colors: { [key: string]: string } = {
      Crimson: "EEFF61",
      Yellow: "#EEFF61",
      Black: "#000000",
    };
    return colors[colorName] || "#EEFF61";
  };

  return (
    <div className={styles.item}>
      <div className={styles["item__image-container"]}>
        <Image
          src={item.image}
          alt={item.imageTitle}
          width={190}
          priority
        ></Image>

        {(item.discount || item.newProduct) && (
          <div
            className={styles.discount}
            style={{ backgroundColor: item.discount ? "#DB4444" : "#00FF66" }}
          >
            <span>NEW</span>
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
          <div style={{ display: ratingFlex ? "flex" : "block" }}>
            <span className={styles["current-price"]}>
              ${item.currentPrice}
            </span>
            {item.prevPrice && (
              <span className={styles["prev-price"]}>${item.prevPrice}</span>
            )}

            <div className={styles.item__rating}>
              <Rating defaultValue={5} precision={0.5} />
              <p>{item.rating}</p>
            </div>
          </div>
          {choiseColor && (
            <div className={styles.choiseColor}>
              <div
                className={styles["color-one"]}
                style={{ backgroundColor: getColor(item.colorOne) }}
              ></div>
              <div className={styles["color-two"]}></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
