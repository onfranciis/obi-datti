import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import styles from "../../styles/Utilities.module.scss";
import { HowToVote, GetInvolved } from "./NavBarDropdown";
import cn from "classnames";
import { useClickOutside } from "../../hooks/UseClickOutside";

const dropUp = "/icons/dropUp.png";
const dropDown = "/icons/dropDown.png";

const Sidebar = (props) => {
  const [howToVote, setHowToVote] = useState(false);
  const [getInvolved, setGetInvolved] = useState(false);
  const sideBarRef = useRef();
  useClickOutside(
    sideBarRef,
    () => {
      props.setSideBar(false);
      setHowToVote(false);
      setGetInvolved(false);
    },
    props.burgerRef
  );

  return (
    <nav
      className={cn({ [styles.Sidebar]: true })}
      style={{ top: props.SideBar ? 80 : "-100%" }}
      ref={sideBarRef}
    >
      <div className={styles.section2}>
        <div className={styles.button}>
          <div
            className={styles.ImageAndText}
            onClick={(e) => {
              //   setGetInvolved(false);
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
          <div
            className={cn(styles.SidebarDropdown)}
            style={{ height: howToVote ? "fit-content" : 0 }}
          >
            <Link href="/registration-status">
              <p>Check your Voter&apos;s registration status</p>
            </Link>
            <Link href="/reminder">
              <p>Get Election Reminders</p>
            </Link>
            <Link href="/how-to-vote-at-your-polling-unit">
              <p>How to vote at your polling unit</p>
            </Link>
            <p>What&apos;s on your ballot?</p>
          </div>
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
        <div className={styles.button}>
          <div
            className={styles.ImageAndText}
            onClick={() => {
              //   setHowToVote(false);
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
          </div>
          <div
            className={cn(styles.SidebarDropdown)}
            style={{ height: getInvolved ? "fit-content" : 0 }}
          >
            <p>Take action on the issues</p>
            <p>Learn about Voting rights</p>
            <Link href="/learn-about-your-voting-rights">
              <p>Learn about Democracy</p>
            </Link>
            <Link href="/contact-elected-officials">
              <p>Contact Elected Officials</p>
            </Link>
          </div>
        </div>
        <Link href="/reminder">
          <p>Volunteer</p>
        </Link>
      </div>
    </nav>
  );
};

export default Sidebar;
