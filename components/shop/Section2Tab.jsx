import { useState } from "react";
import styles from "../../styles/Shop.module.scss";
import Section2TabButtons from "./Section2TabButtons";

const Section2Tab = () => {
  const [tab, setTab] = useState();

  return (
    <div className={styles.Section2Tab}>
      <Section2TabButtons
        Name="New Arrival"
        Tab={tab}
        setTab={(data) => setTab(data)}
      />
      <Section2TabButtons
        Name="Best Sellers"
        Tab={tab}
        setTab={(data) => setTab(data)}
      />
      <Section2TabButtons
        Name="Upcoming"
        Tab={tab}
        setTab={(data) => setTab(data)}
      />
    </div>
  );
};

export default Section2Tab;
