import { useState } from "react";
import styles from "../../styles/VotingFAQS.module.scss";
const openButton = "/icons/MinusCircle.png";
const closeButton = "/icons/PlusCircle.png";

const FAQToggle = (props) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={styles.FAQToggle}>
      <div className={styles.Top} onClick={() => setToggle(!toggle)}>
        <p className={styles.Question}>
          {props.Number} {props.Question}
        </p>
        <img height={24} width={24} src={toggle ? openButton : closeButton} />
      </div>
      <p
        className={styles.Answer}
        style={{ display: toggle ? "block" : "none" }}
      >
        {props.Answer}
      </p>
    </div>
  );
};

export default FAQToggle;
