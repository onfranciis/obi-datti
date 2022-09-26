import styles from "../../styles/VotingFAQS.module.scss";

const TabButtons = (props) => {
  return (
    <div
      className={styles.TabButtons}
      onClick={() => props.setName(props.Name)}
    >
      <p
        style={{
          color: props.Tab == props.Name ? "#272b30" : "#6c737b",
          fontWeight: props.Tab == props.Name ? "500" : "400",
        }}
      >
        {props.Name}
      </p>
      <div
        className={styles.indicator}
        style={{ opacity: props.Tab == props.Name ? 1 : 0 }}
      ></div>
    </div>
  );
};

export default TabButtons;
