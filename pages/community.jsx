import Link from "next/link";
import styles from "../styles/VotingFAQS.module.scss";
import Navbar from "../components/Navbar";
import Section1 from "../components/community/Section1";
import Section2 from "../components/community/Section2";
import Section4 from "../components/home_page/Section4";
import Section5 from "../components/home_page/Section5";
import Footer from "../components/Footer";

const Community = () => {
  return (
    <div className={styles.Community}>
      <Navbar />
      <Section1 />
      <Section2 />
      <Section4 />
      <Section5 />
      <Footer />
    </div>
  );
};

export default Community;
