import Image from "next/image";
import styles from "../../styles/Shop.module.scss";
import Section2Card from "./Section2Card";
import Section2Tab from "./Section2Tab";

const Section2 = () => {
  return (
    <div className={styles.Section2}>
      <div className={styles.Heading}>
        <p>Top Items</p>
        <Section2Tab />
      </div>
      <div className={styles.Display}>
        <Section2Card
          Image="/images/whiteShirtMerch.png"
          Height={251}
          Width={300}
          Title="Obi \ Datti White T-Shirt"
        />
        <Section2Card
          Image="/images/baseballCapMerch.png"
          Height={251}
          Width={251}
          Title="A Voter Baseball Cap"
        />
        <Section2Card
          Image="/images/waterBottleMerch.png"
          Height={251}
          Width={251}
          Title="Obi \ Datti Watter Bottle"
        />
        <Section2Card
          Image="/images/shirtMerch.png"
          Height={251}
          Width={251}
          Title="Obi \ Datti Shirt"
        />
        <Section2Card
          Image="/images/whiteShirtMerch.png"
          Height={251}
          Width={300}
          Title="Obi \ Datti White T-Shirt"
        />
        <Section2Card
          Image="/images/baseballCapMerch.png"
          Height={251}
          Width={251}
          Title="A Voter Baseball Cap"
        />
        <Section2Card
          Image="/images/waterBottleMerch.png"
          Height={251}
          Width={251}
          Title="Obi \ Datti Watter Bottle"
        />
        <Section2Card
          Image="/images/shirtMerch.png"
          Height={251}
          Width={251}
          Title="Obi \ Datti Shirt"
        />
      </div>
    </div>
  );
};

export default Section2;
