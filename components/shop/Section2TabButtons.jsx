import styles from "../../styles/Shop.module.scss";

const Section2TabButtons = (props) => {
  return (
    <div
      className={styles.Section2TabButtons}
      onClick={() => {
        props.setTab(props.Name);
      }}
    >
      <p
        style={{
          color: props.Tab == props.Name ? "black" : "#6c737b",
          fontWeight: props.Tab == props.Name ? "700" : "400",
        }}
      >
        {props.Name}
      </p>
    </div>
  );
};

export default Section2TabButtons;
