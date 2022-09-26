import Image from "next/image";
import styles from "../styles/Utilities.module.scss";

const Footer = () => {
  return (
    <nav className={styles.Footer}>
      <p>© Copyright 2022, All Rights Reserved</p>

      <div className={styles.left}>
        <div className={styles.socials}>
          <Image src="/icons/twitter.png" height={18} width={15} />
          <Image src="/icons/facebook.png" height={18} width={12} />
          <Image src="/icons/linkedin.png" height={18} width={15} />
          <Image src="/icons/instagram.png" height={18} width={17} />
        </div>
        <p>Contact</p>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
      </div>
    </nav>
  );
};

export default Footer;
