import { useRef, useState } from "react";
import { ShopNow } from "../../../components/widgets";
import { DropDown } from "../../assets/MainPage";
import { LocalizationComp } from "./LocalizationComp/LocalizationComp";
import styles from "./TopHeader.module.scss";
import { useClickOutside } from "../../../features";
import { AnimatePresence } from "framer-motion";

export function TopHeader(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const localizationRef = useRef(null);

  useClickOutside(localizationRef, () => {
    if (isOpen) {
      setIsOpen(false);
    }
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.sale}>
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <ShopNow style={{ fontSize: "14px", fontWeight: "600" }} />
        </div>
        <div className={styles.language} onClick={() => setIsOpen(true)}>
          <p>English</p>
          <button>
            <DropDown className={styles.dropdown} />
          </button>
          <div className={styles.localizationCompWrapper} ref={localizationRef}>
            <AnimatePresence>{isOpen && <LocalizationComp />}</AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
