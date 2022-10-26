import { useState } from "react";
import styles from "../../styles/Utilities.module.scss";

const CountdownMini = (props) => {
  const [demo, setDemo] = useState("");
  const [weeks, setWeeks] = useState();
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  // Set the date we're counting down to
  //   const countDownDate = new Date("Feb 23, 2023 00:00:00").getTime();
  const countDownDate = new Date("Feb 23, 2023 23:34:00").getTime();

  // Update the count down every 1 second
  const x = setInterval(function () {
    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    const distance = countDownDate - now;

    // Time calculations for weeks, days, hours, minutes and seconds
    setWeeks(Math.floor(distance / (1000 * 60 * 60 * 24 * 7)));
    setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
    setSeconds(Math.floor((distance % (1000 * 60)) / 1000));

    // Display the result in the element with id="demo"
    setDemo(`${weeks}w ${days}d ${hours}h ${minutes}m ${seconds}s`);

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      setDemo("It has started!");
      props.setTimedOut(true);
    }
  }, 1000);

  return (
    <>
      {!props.timedOut ? (
        <div className={styles.CountdownMiniParent}>
          <p className={styles.Title}>Next Election : 23rd February 2023</p>
          <div className={styles.CountdownMini}>
            <div className={styles.section}>
              <p className={styles.number}>{days}</p>
              <p className={styles.variable}>Days</p>
            </div>
            <p className={styles.column}>:</p>
            <div className={styles.section}>
              <p className={styles.number}>{hours}</p>
              <p className={styles.variable}>Hours</p>
            </div>
            <p className={styles.column}>:</p>
            <div className={styles.section}>
              <p className={styles.number}>{minutes}</p>
              <p className={styles.variable}>Mins</p>
            </div>
            <p className={styles.column}>:</p>
            <div className={styles.section}>
              <p className={styles.number}>{seconds}</p>
              <p className={styles.variable}>Secs</p>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.CountdownDone}>
          <p className={styles.election}>Election Has Started!</p>
          <p className={styles.go}>
            Go and vote for <br />
            <span className={styles.peter}>Peter Obi</span> of{" "}
            <span className={styles.labour}>Labour Party</span>
          </p>
        </div>
      )}
    </>
  );
};

export default CountdownMini;
