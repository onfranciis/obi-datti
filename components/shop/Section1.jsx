import Image from "next/image";
import styles from "../../styles/Shop.module.scss";

const Section1 = () => {
  return (
    <div className={styles.Section1}>
      <div className={styles.part1}>
        <p className={styles.eat}>EAT.SLEEP.WEAR</p>
        <p className={styles.obi}>OBIdient</p>
      </div>
      <div className={styles.part2}>
        <Image src="/images/shopBanner.png" height={465} width={618} />
      </div>
    </div>
  );
};

export default Section1;
