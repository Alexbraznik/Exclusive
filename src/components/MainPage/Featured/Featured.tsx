import Image from "next/image";
import { RectangleCategory, UpArrow } from "../../widgets";
import styles from "./Featured.module.scss";
import {
  Perfume,
  PlayStation,
  Speakers,
  WomensCollections,
} from "../../../shared/assets/MainPage";
import { Description } from "./Description/Description";
import { Advantages } from "./Advantages/Advantages";

export function Featured(): JSX.Element {
  return (
    <section className={styles.wrapper}>
      <RectangleCategory>Featured</RectangleCategory>
      <div className={styles.header}>
        <h2>New Arrival</h2>
      </div>

      <div className={styles.container}>
        <div className={styles.leftMenu}>
          <Image
            src={PlayStation}
            alt="PlayStation"
            className={styles.image}
            width={511}
            height={511}
            priority
          ></Image>
          <Description
            h3={"PlayStation 5"}
            p={"Black and White version of the PS5 coming out on sale."}
          />
        </div>
        <div className={styles.rightMenu}>
          <div className={styles["rightMenu__womenBlock"]}>
            <Image
              src={WomensCollections}
              alt="WomensCollections"
              priority
              className={styles.image}
              width={432}
              height={286}
            />
            <Description
              h3="Women’s Collections"
              p="Featured woman collections that give you another vibe."
              style={{
                width: "260px",
                p: { fontSize: "14px", lineHeight: "21px" },
              }}
            />
          </div>
          <div className={styles["rightMenu__bottom-block"]}>
            <div className={styles["rightMenu__speakers"]}>
              <Image
                src={Speakers}
                alt="Speakers"
                className={styles.image}
                width={190}
                height={221}
              />
              <div className={styles.blur}></div>
              <Description
                h3="Speakers"
                p="Amazon wireless speakers"
                style={{ gap: "8px", p: { fontSize: "14px" } }}
              />
            </div>
            <div className={styles["rightMenu__perfume"]}>
              <Image
                src={Perfume}
                alt="Perfume"
                className={styles.image}
                width={201}
                height={203}
              />
              <div className={styles.blur}></div>
              <Description
                h3="Perfume"
                p="GUCCI INTENSE OUD EDP"
                style={{ gap: "8px", p: { fontSize: "14px" } }}
              />
            </div>
          </div>
        </div>
      </div>

      <Advantages />
      {/* <UpArrow className={styles.upArrow} /> */}
    </section>
  );
}
