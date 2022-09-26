import Image from "next/image";
import { useState } from "react";
import styles from "../../styles/Utilities.module.scss";

const Rating = () => {
  const [helpful, setHelpful] = useState();

  return (
    <div className={styles.Rating}>
      <p className={styles.title}>Was this helpful?</p>
      <div className={styles.buttons}>
        <button
          onClick={() => {
            setHelpful("Yes");
          }}
          style={{
            backgroundColor:
              helpful == "Yes" ? "rgba(0, 0, 0, 0.08)" : "transparent",
          }}
        >
          <Image src="/icons/goodRating.png" alt="" height={16} width={16} />
          <p>Yes</p>
        </button>

        <button
          onClick={() => {
            setHelpful("No");
          }}
          style={{
            backgroundColor:
              helpful == "No" ? "rgba(0, 0, 0, 0.08)" : "transparent",
          }}
        >
          <Image src="/icons/badRating.png" alt="" height={16} width={16} />
          <p>No</p>
        </button>
      </div>
      <p className={styles.number}>8 of 10 people found this helpful</p>
    </div>
  );
};

export default Rating;
