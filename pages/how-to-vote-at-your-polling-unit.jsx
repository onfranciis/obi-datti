import Navbar from "../components/Navbar";
import Section1 from "../components/how_to_vote_at_your_polling_unit/Section1";
import Section2 from "../components/how_to_vote_at_your_polling_unit/Section2";
import Section4 from "../components/home_page/Section4";
import Section5 from "../components/home_page/Section5";
import Footer from "../components/Footer";
import styles from "../styles/HowToVoteAtYourPollingUnit.module.scss";

const HowToVoteAtYourPollingUnit = () => {
  return (
    <div className={styles.HowToVoteAtYourPollingUnit}>
      <Navbar />
      <Section1 />
      <Section2 />
      <Section4 />
      <Section5 />
      <Footer />
    </div>
  );
};

export default HowToVoteAtYourPollingUnit;
