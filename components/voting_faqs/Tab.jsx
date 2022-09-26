import { useState } from "react";
import styles from "../../styles/VotingFAQS.module.scss";
import Sidebar from "./Sidebar";
import TabBody from "./TabBody";

const Tab = () => {
  const [tab, setTab] = useState();
  return (
    <div className={styles.Tab}>
      <Sidebar tab={tab} setTab={(data) => setTab(data)} />
      <TabBody Tab={tab} />
    </div>
  );
};

export default Tab;
