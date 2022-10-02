import Link from "next/link";
import styles from "../../styles/Utilities.module.scss";

export const HowToVote = () => {
  return (
    <div className={styles.NavBarDropdown}>
      <Link href="/registration-status">
        <p>Check your Voter&apos;s registration status</p>
      </Link>
      <Link href="/reminder">
        <p>Get Election Reminders</p>
      </Link>
      <p>How to vote at your polling unit</p>
      <p>What&apos;s on your ballot?</p>
    </div>
  );
};

export const GetInvolved = () => {
  return (
    <div className={styles.NavBarDropdown}>
      <p>Take action on the issues</p>
      <p>Learn about Voting rights</p>
      <p>Learn about Democracy</p>
      <Link href="/contact-elected-officials">
        <p>Contact Elected Officials</p>
      </Link>
    </div>
  );
};
