import styles from "../../styles/Community.module.scss";
import Section2Card from "./Section2Card";

const Section2 = () => {
  return (
    <div className={styles.Section2}>
      <p className={styles.mainTitle}>Trending Topics 🔥🔥</p>
      <Section2Card />
      <Section2Card />
      <Section2Card />
      <Section2Card />
    </div>
  );
};

export default Section2;
