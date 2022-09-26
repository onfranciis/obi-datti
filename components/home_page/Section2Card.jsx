import Image from "next/image";
import styles from "../../styles/HomePage.module.scss";

const Section2Card = (props) => {
  return (
    <div className={styles.Section2Card}>
      <div className={styles.icon}>
        <Image src={props.Icon} width={80} height={80} />
      </div>
      <div className={styles.text}>
        <p className={styles.title}>Lorem ipsum dolor sit</p>
        <p className={styles.subTitle}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur
          ipsam earum odio sit ipsum neque nisi repellat rem reiciendis
          aspernatur.
        </p>
      </div>
      <button className={styles.button}>
        <p className={styles.text}>Get a reminder</p>
        <Image
          className={styles.arrow}
          src="/icons/right.png"
          width={16}
          height={16}
        />
      </button>
    </div>
  );
};

export default Section2Card;
