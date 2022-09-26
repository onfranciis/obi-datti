import Link from "next/link";
import styles from "../styles/RegistrationStatus.module.scss";
import Navbar from "../components/Navbar";
import Section4 from "../components/home_page/Section4";
import Section5 from "../components/home_page/Section5";
import Tab from "../components/voting_faqs/Tab";
import Footer from "../components/Footer";
import Section1 from "../components/registration_status/Section1";

const RegistrationStatus = () => {
  return (
    <div className={styles.RegistrationStatus}>
      <Navbar />
      <Section1 />
      <Section4 />
      <Section5 />
      <Footer />
    </div>
  );
};

export default RegistrationStatus;
