import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Section1 from "../components/home_page/Section1";
import styles from "../styles/HomePage.module.scss";
import Section2 from "../components/home_page/Section2";
import Section3 from "../components/home_page/Section3";
import Section4 from "../components/home_page/Section4";
import Section5 from "../components/home_page/Section5";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className={styles.HomePage}>
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 Heading="🔥 Obi | Datti Merchandise" halfBottom="#ebebeb" />
      <Section4 />
      <Section5 />
      <Footer />
    </div>
  );
}
