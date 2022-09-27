import Link from "next/link";

import styles from "../styles/Utilities.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      <Link href="/">
        <div className={styles.section1}>
          <p className={styles.logo}>
            Obi | Datti
            <span className={styles.twenty}> 20</span>
            <span className={styles.twenty_three}>23</span>
          </p>
        </div>
      </Link>

      <div className={styles.section2}>
        <Link href="/registration-status">
          <p>How to Vote</p>
        </Link>
        <Link href="/voting-faqs">
          <p>Voting Faqs</p>
        </Link>
        <Link href="/community">
          <p>Our Community</p>
        </Link>
        <Link href="/shop">
          <p>Shop</p>
        </Link>
        <p>Get Involved</p>
        <Link href="/reminder">
          <p>Volunteer</p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
