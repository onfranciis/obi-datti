import styles from "../../styles/HomePage.module.scss";
import { BiPlay } from "react-icons/bi";

const VideoPreviewCard = () => {
  return (
    <div className={styles.VideoPreviewCard}>
      <div className={styles.image}>
        <button>
          <BiPlay className={styles.icon} size={25} />
        </button>
      </div>
      <p className={styles.heading}>Lorem ipsum dolor sit amet consectetur</p>
      <p className={styles.date}>October 13, 2022</p>
    </div>
  );
};

export default VideoPreviewCard;
