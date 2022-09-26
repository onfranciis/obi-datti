import Image from "next/image";
import styles from "../../styles/HomePage.module.scss";

const Section4 = () => {
  const handleForm = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.Section4}>
      <div className={styles.part1}>
        <div>
          <p className={styles.title}>Get our stories delivered</p>
          <p className={styles.title}>From us to your inbox weekly.</p>
        </div>

        <form action="" onSubmit={handleForm}>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
          />
          <button className={styles.submitButton}>
            <p className={styles.text}>Get started</p>
          </button>
        </form>

        <p className={styles.tagline}>
          Get a response tomorrow if you submit by 9pm today. If we received
          after 9pm will get a reponse the following day.
        </p>
      </div>

      <div className={styles.part2}>
        <Image src="/images/presidoAndVice.png" height={456.09} width={537} />
      </div>
    </div>
  );
};

export default Section4;
