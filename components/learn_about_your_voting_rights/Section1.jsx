import styles from "../../styles/LearnAboutYourVotingRights.module.scss";

const Section1 = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.Section1}>
      <div className={styles.group}>
        <p className={styles.heading}>Learn About Your Voting Rights</p>
      </div>
    </div>
  );
};

export default Section1;
