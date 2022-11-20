import styles from "../../styles/HomePage.module.scss";
import VideoPreviewCard from "../community/VideoPreviewCard";

const Section2Video = () => {
  return (
    <div className={styles.Section2Video}>
      <p className={styles.Title}>Get the latest from Peter Obi</p>
      <div className={styles.body}>
        <VideoPreviewCard />
        <VideoPreviewCard />
      </div>
    </div>
  );
};

export default Section2Video;
