import styles from "../styles/ContactElectedOfficials.module.scss";
import Navbar from "../components/Navbar";
import Section4 from "../components/home_page/Section4";
import Section5 from "../components/home_page/Section5";
import Footer from "../components/Footer";
import Section1 from "../components/contact_elected_officials/Section1";
import Section2 from "../components/contact_elected_officials/Section2";

const ContactElectedOfficials = () => {
  return (
    <div className={styles.ContactElectedOfficials}>
      <Navbar />
      <Section1 />
      <Section2 />
      <Section4 />
      <Section5 />
      <Footer />
    </div>
  );
};

export default ContactElectedOfficials;
