import React from "react";
import styles from "../../styles/HomePage.module.scss";
import Section2Card from "./Section2Card";

const Section2 = () => {
  return (
    <div className={styles.Section2}>
      <Section2Card Icon="/icons/greenBellIcon.png" ButtonText="" />
      <Section2Card Icon="/icons/greenVoteIcon.png" ButtonText="" />
    </div>
  );
};

export default Section2;
