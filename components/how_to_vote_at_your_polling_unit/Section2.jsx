import styles from "../../styles/HowToVoteAtYourPollingUnit.module.scss";
import Rating from "../voting_faqs/Rating";
import Timeline from "./Timeline";

const Data = [
  {
    number: "1",
    body: "At the polling unit, join the queue. An INEC official will check if you are at the correct polling unit and confirm that the PVC presented belongs to you.",
  },
  {
    number: "2",
    body: "An INEC official will confirm if your PVC is genuine using the card reader. You will be asked to place your finger on the card reader.",
  },
  {
    number: "3",
    body: "An INEC official will ask for your PVC and confirm you are listed in the Voters Register. Your name will be ticked and your finger will be inked to confirm you have voted. If your name is not found you cannot vote.",
  },
  {
    number: "4",
    body: "The Presiding officer will stamp, sign and endorse your ballot paper. You will be given the ballot paper rolled with the printed side inwards and directed to the voting cubicle.",
  },
  {
    number: "5",
    body: "Stain your finger with the ink given and mark the box for your preferred candidate/party. Roll the ballot paper in the manner you were given and flatten it.",
  },
  {
    number: "6",
    body: "Leave the voting cubicle and drop the ballot paper in the ballot box in full view of people at the Polling Unit.",
  },
  {
    number: "7",
    body: "Leave the Polling Unit or wait if you so choose, in an orderly and peaceful manner, to watch the process up to declaration of result.The result of each Polling Unit shall be pasted at the unit for everyone to see.",
  },
];

const Section2 = () => {
  return (
    <div className={styles.Section2}>
      <div className={styles.Section2A}>
        <p className={styles.Title}>How to Vote</p>
        <p>
          This is designed to help you understand the Voting Procedures during
          an election. Remember that you are qualified to vote if you are a
          registered voter and your name appears on the register of voters at
          your polling
        </p>
        <p>
          On each Election Day, polling stations will open for Accreditation and
          Voting from 8:00 am to 2.00 pm. However, voters on the queue before
          the close of poll at 2:00pm will be accredited and allowed to vote.
        </p>
      </div>
      <div className={styles.Section2B}>
        {Data.map((section) => (
          <Timeline
            Key={section.number}
            Number={section.number}
            Body={section.body}
            Last={Data.length == section.number ? true : false}
          />
        ))}
      </div>
      <Rating />
    </div>
  );
};

export default Section2;
