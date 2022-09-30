import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import styles from "../styles/Utilities.module.scss";
import { HowToVote, GetInvolved } from "./navbar/NavBarDropdown";

const dropUp = "/icons/dropUp.png";
const dropDown = "/icons/dropDown.png";

const Navbar = () => {
  const [howToVote, setHowToVote] = useState(false);
  const [getInvolved, setGetInvolved] = useState(false);

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
        <div>
          <div
            className={styles.ImageAndText}
            onClick={() => {
              setGetInvolved(false);
              setHowToVote(!howToVote);
            }}
          >
            <p>How to Vote</p>
            <Image
              alt=""
              src={howToVote ? dropUp : dropDown}
              height={24}
              width={24}
            />
          </div>
          {howToVote ? <HowToVote /> : ""}
        </div>
        <Link href="/voting-faqs">
          <p>Voting Faqs</p>
        </Link>
        <Link href="/community">
          <p>Our Community</p>
        </Link>
        <Link href="/shop">
          <p>Shop</p>
        </Link>
        <div>
          <div
            className={styles.ImageAndText}
            onClick={() => {
              setHowToVote(false);
              setGetInvolved(!getInvolved);
            }}
          >
            <p>Get Involved</p>
            <Image
              alt=""
              src={getInvolved ? dropUp : dropDown}
              height={24}
              width={24}
            />
            {getInvolved ? <GetInvolved /> : ""}
          </div>
        </div>
        <Link href="/reminder">
          <p>Volunteer</p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
