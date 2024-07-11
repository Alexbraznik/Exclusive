import Link from "next/link";
import styles from "./Footer.module.scss";
import { GoPaperAirplane } from "react-icons/go";
import { InfoBlock } from "./InfoBlock/InfoBlock";
import {
  AccountLinkList,
  QuickLinkList,
  supportLinkList,
} from "./InfoBlock/LinkConstants";
import { Download } from "./Download/Download";
import { RiFacebookLine } from "react-icons/ri";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { RiLinkedinLine } from "react-icons/ri";

export function Footer(): JSX.Element {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.exclusive}>
          <h3 className={styles.h3}>Exclusive</h3>
          <Link href="/" className={styles.link}>
            Subscribe
          </Link>
          <form>
            <label htmlFor="email">Get 10% off your first order</label>
            <div>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Enter your email"
              />
              <GoPaperAirplane />
            </div>
          </form>
        </div>
        <div className={styles.support}>
          <h3 className={styles.h3}>Support</h3>
          <address>
            <p>
              111 Bijoy sarani, Dhaka,
              <br /> DH 1515, Bangladesh.
            </p>
            <InfoBlock
              title=""
              links={supportLinkList}
              style={{ marginTop: "-10px" }}
            />
          </address>
        </div>
        <InfoBlock title="Account" links={AccountLinkList} />
        <InfoBlock title="Quick Link" links={QuickLinkList} />
        <div className={styles.download}>
          <h3 className={styles.h3}>Download App</h3>
          <p>Save $3 with App New User Only</p>
          <Download />
          <div className={styles.social}>
            <Link href="/">
              <RiFacebookLine />
            </Link>
            <Link href="/">
              <CiTwitter />
            </Link>
            <Link href="/">
              <FaInstagram />
            </Link>
            <Link href="/">
              <RiLinkedinLine />
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        <span>&copy;</span>
        <p>Copyright Rimel 2022. All right reserved</p>
      </div>
    </footer>
  );
}
