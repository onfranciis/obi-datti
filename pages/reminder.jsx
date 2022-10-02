import { Router, useRouter } from "next/router";
import styles from "../styles/Reminder.module.scss";
import Countdown from "../components/reminder/Countdown";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Reminder = () => {
  const [timedOut, setTimedOut] = useState(false);
  const router = useRouter();

  const handleForm = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className={styles.Reminder}>
        <div className={styles.section1}>
          {timedOut ? "" : <p>Next Election:23rd February 2023</p>}
          <Countdown
            timedOut={timedOut}
            setTimedOut={(data) => {
              setTimedOut(data);
            }}
          />
        </div>
        <div className={styles.section2}>
          <p className={styles.vote}>Get Reminded to Vote!</p>
          <p className={styles.election}>
            Get reminders about the upcoming election-never miss an election!
          </p>

          <form action="" onSubmit={handleForm}>
            <label htmlFor="firstName">
              <p>First name</p>
              <input type="text" name="firstName" id="firstName" />
            </label>

            <label htmlFor="email">
              <p>Email address</p>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="you@example.com"
              />
            </label>

            <label htmlFor="state">
              <p>State of registration</p>
              <select name="state" id="state">
                <option value="">Select a state</option>
                <option value="">Abuja</option>
              </select>
            </label>

            <label htmlFor="other" className={styles.bottom}>
              <input type="checkbox" name="other" id="other" />
              <div className={styles.info}>
                <p className={styles.receive}>
                  Receive other mails about the elections from us
                </p>
                <p className={styles.we}>We wouldn&apos;t spam, we promise</p>
              </div>
            </label>

            <button type="submit">Get a reminder</button>
          </form>
        </div>
      </div>

      <div className={styles.float}>
        <nav className={styles.Navbar}>
          <Link href="/">
            <div className={styles.section1}>
              <p className={styles.logo}>
                Obi | Datti
                <span className={styles.twenty}> 20</span>
                <span className={styles.twenty_three}>23</span>
              </p>
            </div>
          </Link>

          <div className={styles.section2}>
            <button onClick={() => router.back()}>
              <p>Close</p>
              <Image alt="" height={10} width={10} src="/icons/close.png" />
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Reminder;
