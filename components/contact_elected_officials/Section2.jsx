import { useState } from "react";
import styles from "../../styles/ContactElectedOfficials.module.scss";
import Rating from "../voting_faqs/Rating";

const Section2 = () => {
  const [state, setState] = useState("");
  const [LG, setLG] = useState("");
  const [error, setError] = useState(false);

  const validator = () => {
    if (state == "" || LG == "") {
      return false;
    } else {
      return true;
    }
  };

  const handleForm = (e) => {
    e.preventDefault();
    setError(false);

    if (validator()) {
    } else {
      setError(true);
    }
  };

  return (
    <div className={styles.Section2Parent}>
      <div className={styles.Section2}>
        <div className={styles.top}>
          <p className={styles.title}>Contact Your Elected Officials</p>
          <p className={styles.subTitle}>
            Enter the following details to find and contact your elected
            officials
          </p>
          <p className={styles.error}>{error ? "Fill all details" : ""}</p>
        </div>

        <form action="" onSubmit={handleForm}>
          <label htmlFor="state">
            <p>State of registration</p>
            <select value={state} onChange={(e) => setState(e.target.value)}>
              <option name="state" id="state">
                Select a state
              </option>
              <option name="state" id="state">
                Abuja
              </option>
            </select>
          </label>

          <label htmlFor="LG">
            <p>Local government of registration</p>
            <select value={LG} onChange={(e) => setLG(e.target.value)}>
              <option name="LG" id="LG">
                Select a local government
              </option>
              <option name="LG" id="LG">
                Bwari
              </option>
            </select>
          </label>

          <button type="submit" className={styles.submit}>
            <p>Find your officials</p>
          </button>
        </form>

        <Rating />
      </div>
    </div>
  );
};

export default Section2;
