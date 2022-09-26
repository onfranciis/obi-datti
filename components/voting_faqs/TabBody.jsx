import styles from "../../styles/VotingFAQS.module.scss";
import Section2 from "./Section2";
import Section2b from "./Section2b";
const TabBody = (props) => {
  const returnBody = (value) => {
    switch (value) {
      case "Voting Registration":
        return <Section2 />;
        break;

      case "Voters card":
        return <Section2b />;
        break;

      default:
        return;

        break;
    }
  };
  return <div className={styles.TabBody}>{returnBody(props.Tab)}</div>;
};

export default TabBody;
