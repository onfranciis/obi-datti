import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import cn from "classnames";

import styles from "../styles/Utilities.module.scss";
import { HowToVote, GetInvolved } from "./navbar/NavBarDropdown";
import Sidebar from "./navbar/Sidebar";

const dropUp = "/icons/dropUp.png";
const dropDown = "/icons/dropDown.png";

const Navbar = () => {
  const [sideBar, setSideBar] = useState(false);
  const [howToVote, setHowToVote] = useState(false);
  const [getInvolved, setGetInvolved] = useState(false);
  const burgerRef = useRef();

  const handleBurger = () => {
    setSideBar(!sideBar);
    setHowToVote(false);
    setGetInvolved(false);
  };

  return (
    <div>
      <nav className={cn({ [styles.Navbar]: true })}>
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
              className={`${styles.ImageAndText} "hii"`}
              onClick={(e) => {
                setGetInvolved(false);
                setHowToVote(!howToVote);
                console.log(e.target);
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
            </div>
            {getInvolved ? <GetInvolved /> : ""}
          </div>
          <Link href="/reminder">
            <p>Volunteer</p>
          </Link>
        </div>
        <div className={styles.burgerParent} ref={burgerRef}>
          {sideBar ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={30}
              height={30}
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
              onClick={() => {
                handleBurger();
              }}
            >
              <path
                fill="currentColor"
                d="M17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41L17.59 5Z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={30}
              height={30}
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 1024 1024"
              onClick={() => {
                handleBurger();
              }}
            >
              <path
                fill="currentColor"
                d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"
              />
            </svg>
          )}
          {/* <BiMenu size={30} className={styles.burger} /> */}
        </div>
      </nav>
      <Sidebar
        SideBar={sideBar}
        setSideBar={(data) => {
          setSideBar(data);
        }}
        burgerRef={burgerRef}
      />
    </div>
  );
};

export default Navbar;
