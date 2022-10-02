import Image from "next/image";
import styles from "../../styles/HomePage.module.scss";
import Section3Card from "./Section3Card";

const Section3 = (props) => {
  return (
    <div
      className={styles.Section3}
      style={{ backgroundColor: props.halfBottom }}
    >
      <div className={styles.ash}></div>
      <div className={styles.headingParent}>
        <div className={styles.groupParent}>
          <p className={styles.heading}>{props.Heading}</p>
          <div className={styles.group}>
            <Section3Card
              Image="/images/whiteShirtMerch.png"
              Height={251}
              Width={300}
              Title="Obi \ Datti White T-Shirt"
            />
            <Section3Card
              Image="/images/baseballCapMerch.png"
              Height={251}
              Width={251}
              Title="A Voter Baseball Cap"
            />
            <Section3Card
              Image="/images/waterBottleMerch.png"
              Height={251}
              Width={251}
              Title="Obi \ Datti Watter Bottle"
            />
            <Section3Card
              Image="/images/shirtMerch.png"
              Height={251}
              Width={251}
              Title="Obi \ Datti Shirt"
            />
            <button className={styles.iosRight}>
              <Image height={16} width={9} src="/icons/iosRightBlue.png" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
