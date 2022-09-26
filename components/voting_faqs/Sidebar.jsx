import { useState } from "react";
import styles from "../../styles/VotingFAQS.module.scss";
import TabButtons from "./TabButtons";

const Sidebar = (props) => {
  return (
    <div className={styles.Sidebar}>
      <TabButtons
        Name="Voting Registration"
        setName={(data) => {
          props.setTab(data);
        }}
        Tab={props.tab}
      />
      <TabButtons
        Name="Voters card"
        setName={(data) => {
          props.setTab(data);
        }}
        Tab={props.tab}
      />
      <TabButtons
        Name="Voting on Election Day"
        setName={(data) => {
          props.setTab(data);
        }}
        Tab={props.tab}
      />
      <TabButtons
        Name="Lorem Ipsum"
        setName={(data) => {
          props.setTab(data);
        }}
        Tab={props.tab}
      />
    </div>
  );
};

export default Sidebar;
