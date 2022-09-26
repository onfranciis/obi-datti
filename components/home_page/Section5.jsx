import Image from "next/image";
import styles from "../../styles/HomePage.module.scss";

const Section5 = () => {
  return (
    <div className={styles.Section5}>
      <div className={styles.group}>
        <p className={styles.heading}>
          Together, we must eliminate the challenges we face as a nation and
          build the Nigeria we want.
        </p>
        <div className={styles.decision}>
          <button className={styles.stay}>
            <p>Stay Updated</p>
          </button>

          <button className={styles.volunteer}>
            <p>Volunteer</p>
            <Image height={18} width={18} src="/icons/iosRightWhite.png" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section5;
