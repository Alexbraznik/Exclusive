import Image from "next/image";
import styles from "./Download.module.scss";
import QR from "../png/QR.png";
import GooglePlay from "../png/GooglePlay.png";
import { FaApple } from "react-icons/fa";

export function Download(): JSX.Element {
  return (
    <div className={styles.container}>
      <Image src={QR} alt="QR" width={90} height={90} className={styles.QR} />
      <div className={styles["download__buttons"]}>
        <button>
          <div className={styles["download__button-content"]}>
            <Image src={GooglePlay} alt="GooglePlay" width={25} height={25} />
            <div>
              <p>GET IN ON</p>
              <span>Goggle Play</span>
            </div>
          </div>
        </button>

        <button>
          <div className={styles["download__button-content"]}>
            <FaApple size={25} />
            <div>
              <p>Download on the</p>
              <span>App Store</span>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
