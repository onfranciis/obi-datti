import styles from "../styles/LearnAboutYourVotingRights.module.scss";
import Navbar from "../components/Navbar";
import Section4 from "../components/home_page/Section4";
import Section5 from "../components/home_page/Section5";
import Footer from "../components/Footer";
import Section1 from "../components/learn_about_your_voting_rights/Section1";
import Section2 from "../components/learn_about_your_voting_rights/Section2";
import Section3 from "../components/learn_about_your_voting_rights/Section3";
import Rating from "../components/voting_faqs/Rating";

const LearnAboutYourVotingRights = () => {
  return (
    <div className={styles.LearnAboutYourVotingRights}>
      <Navbar />
      <Section1 />
      <div className={styles.group}>
        <Section2 />
        <Section3 />
        <Rating />
      </div>
      <Section4 />
      <Section5 />
      <Footer />
    </div>
  );
};

export default LearnAboutYourVotingRights;
