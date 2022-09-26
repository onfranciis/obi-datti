import Image from "next/image";
import styles from "../../styles/Shop.module.scss";

const Section2Card = (props) => {
  return (
    <div className={styles.Section2Card}>
      <div className={styles.image}>
        <Image src={props.Image} width={props.Width} height={props.Height} />
      </div>
      <p className={styles.title}>{props.Title}</p>
      <button>
        <p className={styles.text}>Buy Now</p>

        <Image src="/icons/shopping-cart.png" width={26} height={26} />
      </button>
    </div>
  );
};

export default Section2Card;
