import styles from "../../styles/VotingFAQS.module.scss";

const Section1 = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.Section1}>
      <div className={styles.group}>
        <p className={styles.heading}>Voting FAQs</p>
        <form action="" onSubmit={handleSubmit}>
          <input type="search" name="search" id="search" />
          <button>
            <p>Search</p>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Section1;
