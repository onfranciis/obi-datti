import Link from "next/link";
import { useRef } from "react";
import { useClickOutsideDropdown } from "../../hooks/UseClickOutside";
import styles from "../../styles/Utilities.module.scss";

export const HowToVote = ({ ParentRef, setHowToVote }) => {
  const HowToVoteRef = useRef();

  useClickOutsideDropdown(
    HowToVoteRef,
    () => {
      setHowToVote(false);
    },
    ParentRef
  );

  return (
    <div className={styles.NavBarDropdown} ref={HowToVoteRef}>
      <Link href="/registration-status">
        <p>Check your Voter&apos;s registration status</p>
      </Link>
      <Link href="/reminder">
        <p>Get Election Reminders</p>
      </Link>
      <Link href="/how-to-vote-at-your-polling-unit">
        <p>How to vote at your polling unit</p>
      </Link>
      <p>What&apos;s on your ballot?</p>
    </div>
  );
};

export const GetInvolved = ({ ParentRef, setGetInvolved }) => {
  const GetInvolvedRef = useRef();

  useClickOutsideDropdown(
    GetInvolvedRef,
    () => {
      setGetInvolved(false);
    },
    ParentRef
  );
  return (
    <div className={styles.NavBarDropdown} ref={GetInvolvedRef}>
      <p>Take action on the issues</p>
      <p>Learn about Voting rights</p>
      <Link href="/learn-about-your-voting-rights">
        <p>Learn about Democracy</p>
      </Link>
      <Link href="/contact-elected-officials">
        <p>Contact Elected Officials</p>
      </Link>
    </div>
  );
};
