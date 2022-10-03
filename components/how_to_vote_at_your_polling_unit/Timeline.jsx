import styles from "../../styles/HowToVoteAtYourPollingUnit.module.scss";

const Timeline = (props) => {
  return (
    <div
      className={styles.Timeline}
      style={{ borderColor: props.Last ? "transparent" : "black" }}
    >
      <p className={styles.title}>Step {props.Number}</p>
      <p className={styles.body}>{props.Body}</p>
      <div className={styles.number}>
        <p>{props.Number}</p>
      </div>
    </div>
  );
};

export default Timeline;
