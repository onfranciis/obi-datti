import styles from "../../styles/LearnAboutYourVotingRights.module.scss";
import FAQToggle from "../voting_faqs/FAQToggle";

const FAQ = [
  {
    Number: "1",
    Question: "Right to register",
    Answer:
      "It is the right of every qualified citizen to register to vote during the 2019 general elections. This right is guaranteed by the constitution and cannot be denied any potential qualified citizen. However, the Commission has suspended the registration exercise in order to get the voters’ register ready for the 2019 elections. The register has to be certified, published and made available to the Political Parties at least 30 days to the elections. The Continuous Voter Registration exercise will resume after the 2019 general elections for eligible individuals to register.",
  },
  {
    Number: "2",
    Question: "Right to vote and be voted for when registered",
    Answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi aspernatur quod impedit voluptate ad perspiciatis excepturi magni quasi consectetur facilis suscipit sapiente eveniet eaque tempore accusamus modi quidem neque consequatur, enim, ut culpa dicta temporibus voluptates totam! Dolorem, perferendis accusamus ab officiis temporibus quod id, itaque laudantium commodi quidem tenetur?",
  },
  {
    Number: "3",
    Question: "Right to recall an elected representive",
    Answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi aspernatur quod impedit voluptate ad perspiciatis excepturi magni quasi consectetur facilis suscipit sapiente eveniet eaque tempore accusamus modi quidem neque consequatur, enim, ut culpa dicta temporibus voluptates totam! Dolorem, perferendis accusamus ab officiis temporibus quod id, itaque laudantium commodi quidem tenetur?",
  },
  {
    Number: "4",
    Question: "Right to secrecy (privacy) when voting",
    Answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi aspernatur quod impedit voluptate ad perspiciatis excepturi magni quasi consectetur facilis suscipit sapiente eveniet eaque tempore accusamus modi quidem neque consequatur, enim, ut culpa dicta temporibus voluptates totam! Dolorem, perferendis accusamus ab officiis temporibus quod id, itaque laudantium commodi quidem tenetur?",
  },
  {
    Number: "5",
    Question:
      "Right to attend Rallies and Campaigns of political Parties and Candidates",
    Answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi aspernatur quod impedit voluptate ad perspiciatis excepturi magni quasi consectetur facilis suscipit sapiente eveniet eaque tempore accusamus modi quidem neque consequatur, enim, ut culpa dicta temporibus voluptates totam! Dolorem, perferendis accusamus ab officiis temporibus quod id, itaque laudantium commodi quidem tenetur?",
  },
  {
    Number: "6",
    Question: "Right to Information About Election",
    Answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi aspernatur quod impedit voluptate ad perspiciatis excepturi magni quasi consectetur facilis suscipit sapiente eveniet eaque tempore accusamus modi quidem neque consequatur, enim, ut culpa dicta temporibus voluptates totam! Dolorem, perferendis accusamus ab officiis temporibus quod id, itaque laudantium commodi quidem tenetur?",
  },
];

const displayFAQ = () => {
  return FAQ.map((section) => (
    <FAQToggle
      key={section.Question}
      Number={`${section.Number}. `}
      Question={section.Question}
      Answer={section.Answer}
    />
  ));
};

const Section3 = () => {
  return <div className={styles.Section3}>{displayFAQ()}</div>;
};

export default Section3;
