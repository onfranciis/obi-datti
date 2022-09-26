import Image from "next/image";
import { useState } from "react";
import styles from "../../styles/Community.module.scss";

const like = "/icons/like.png";
const dislike = "/icons/dislike.png";
const comment = "/icons/comment.png";
const likeFilled = "/icons/likeFilled.png";
const dislikeFilled = "/icons/dislikeFilled.png";
const commentFilled = "/icons/commentFilled.png";

const Section2Card = () => {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [commented, setCommented] = useState(false);
  const [commentCount, setCommentCount] = useState(300);

  return (
    <div className={styles.Section2Card}>
      <div className={styles.top}>
        <p className={styles.title}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p className={styles.preview}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid est
          ipsa ut deserunt veniam atque voluptate ea nesciunt consequatur. Quasi
          est porro consequatur dicta vitae officiis, enim fugit reprehenderit
          qui dignissimos placeat magnam dolores blanditiis nemo mollitia saepe
          provident aperiam consequuntur eligendi iusto eaque esse ipsum officia
          possimus? Doloribus hic in, rerum odit a placeat ullam tempore est rem
          debitis pariatur aut minima ad perspiciatis vero veritatis earum quae
        </p>
        <div className={styles.tags}>
          <p className={styles.tag}>ELECTION</p>
          <p className={styles.tag}>VOTING</p>
          <p className={styles.tag}>BALLOT</p>
        </div>
      </div>
      <div className={styles.profile}>
        <Image src="/images/presidoAndVice.png" alt="" height={40} width={40} />
        <div className={styles.info}>
          <p className={styles.name}>Ayoola Babalola</p>
          <p className={styles.date}>June 21, 2022</p>
        </div>
      </div>
      <div className={styles.actions}>
        <div className={styles.action}>
          <Image
            src={liked ? likeFilled : like}
            alt=""
            height={32}
            width={32}
            onClick={() => {
              setLiked(!liked);
            }}
          />
          <p className={styles.value}>
            23k <div className={styles.split}></div> Likes
          </p>
        </div>

        <div className={styles.action}>
          <Image
            src={disliked ? dislikeFilled : dislike}
            alt=""
            height={32}
            width={32}
            onClick={() => {
              setDisliked(!disliked);
            }}
          />
          <p className={styles.value}>
            1k <div className={styles.split}></div> Dislikes
          </p>
        </div>

        <div className={styles.action}>
          <Image
            src={commented ? commentFilled : comment}
            alt=""
            height={32}
            width={32}
            onClick={() => {
              setCommented(!commented);
              if (commented) {
                setCommentCount(commentCount - 1);
              } else {
                setCommentCount(commentCount + 1);
              }
            }}
          />
          <p className={styles.value}>
            {commentCount} <div className={styles.split}></div> Comments
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section2Card;
