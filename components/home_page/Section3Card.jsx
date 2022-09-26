import Image from "next/image";
import styles from "../../styles/HomePage.module.scss";

const Section3Card = (props) => {
  return (
    <div className={styles.Section3Card}>
      <div className={styles.image}>
        <Image src={props.Image} width={props.Width} height={props.Height} />
      </div>
      <p className={styles.title}>{props.Title}</p>
      <p className={styles.spec}>The specification here</p>
      <button>
        <p className={styles.text}>Buy Now</p>
      </button>
    </div>
  );
};

export default Section3Card;
