import styles from "@/styles/shared/Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <span className={styles.links}>
        <Link href="/privacy">
          <a>Privacy Policy</a>
        </Link>
        <span>Copyright © 2022 Seetizen</span>
        <Link href="/terms">
          <a>Termini e condizioni</a>
        </Link>
      </span>
    </div>
  );
};

export default Footer;
