import Link from "next/link";
import styles from "../styles/VotingFAQS.module.scss";
import Navbar from "../components/Navbar";
import Section1 from "../components/voting_faqs/Section1";
import Section2 from "../components/voting_faqs/Section2";
import Section4 from "../components/home_page/Section4";
import Section5 from "../components/home_page/Section5";
import Tab from "../components/voting_faqs/Tab";
import Footer from "../components/Footer";

const VotingFAQS = () => {
  return (
    <div className={styles.VotingFAQS}>
      <Navbar />
      <Section1 />
      <Tab />
      <Section4 />
      <Section5 />
      <Footer />
    </div>
  );
};

export default VotingFAQS;
