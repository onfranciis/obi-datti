import styles from "../../styles/HowToVoteAtYourPollingUnit.module.scss";

const Section1 = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.Section1}>
      <div className={styles.group}>
        <p className={styles.heading}>How To Vote At Your Polling Unit</p>
      </div>
    </div>
  );
};

export default Section1;
