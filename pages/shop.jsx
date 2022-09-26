import Footer from "../components/Footer";
import Section3 from "../components/home_page/Section3";
import Section4 from "../components/home_page/Section4";
import Section5 from "../components/home_page/Section5";
import Navbar from "../components/Navbar";
import Section1 from "../components/shop/Section1";
import Section2 from "../components/shop/Section2";
import styles from "../styles/Shop.module.scss";

const shop = () => {
  return (
    <div className={styles.Shop}>
      <Navbar />
      <Section1 />
      <Section3 Heading="🔥 Hot Items" halfBottom="white" />
      <Section2 />
      <Section4 />
      <Section5 />
      <Footer />
    </div>
  );
};

export default shop;
