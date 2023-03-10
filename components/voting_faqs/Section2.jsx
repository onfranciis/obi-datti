import styles from "../../styles/VotingFAQS.module.scss";
import FAQToggle from "./FAQToggle";
import Rating from "./Rating";

const FAQ = [
  {
    Number: "1",
    Question: "Can we register to vote online?",
    Answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi aspernatur quod impedit voluptate ad perspiciatis excepturi magni quasi consectetur facilis suscipit sapiente eveniet eaque tempore accusamus modi quidem neque consequatur, enim, ut culpa dicta temporibus voluptates totam! Dolorem, perferendis accusamus ab officiis temporibus quod id, itaque laudantium commodi quidem tenetur?",
  },
  {
    Number: "2",
    Question: "Sit amet consectetur adipisicing elit?",
    Answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi aspernatur quod impedit voluptate ad perspiciatis excepturi magni quasi consectetur facilis suscipit sapiente eveniet eaque tempore accusamus modi quidem neque consequatur, enim, ut culpa dicta temporibus voluptates totam! Dolorem, perferendis accusamus ab officiis temporibus quod id, itaque laudantium commodi quidem tenetur?",
  },
  {
    Number: "3",
    Question: "Sit amet consectetur adipisicing elit?",
    Answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi aspernatur quod impedit voluptate ad perspiciatis excepturi magni quasi consectetur facilis suscipit sapiente eveniet eaque tempore accusamus modi quidem neque consequatur, enim, ut culpa dicta temporibus voluptates totam! Dolorem, perferendis accusamus ab officiis temporibus quod id, itaque laudantium commodi quidem tenetur?",
  },
  {
    Number: "4",
    Question: "Sit amet consectetur adipisicing elit?",
    Answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi aspernatur quod impedit voluptate ad perspiciatis excepturi magni quasi consectetur facilis suscipit sapiente eveniet eaque tempore accusamus modi quidem neque consequatur, enim, ut culpa dicta temporibus voluptates totam! Dolorem, perferendis accusamus ab officiis temporibus quod id, itaque laudantium commodi quidem tenetur?",
  },
];

const displayFAQ = () => {
  return FAQ.map((section) => (
    <FAQToggle
      key={section.Question}
      Number={`Q${section.Number}: `}
      Question={section.Question}
      Answer={section.Answer}
    />
  ));
};

const Section2 = () => {
  return (
    <div className={styles.Section2}>
      {displayFAQ()}
      <Rating />
    </div>
  );
};

export default Section2;
