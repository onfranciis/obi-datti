import { useState } from "react";
import styles from "../../styles/RegistrationStatus.module.scss";

const Section1 = () => {
  const [state, setState] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [vin, setVin] = useState("");
  const [error, setError] = useState(false);

  const validator = () => {
    if (
      state == "" ||
      firstName == "" ||
      lastName == "" ||
      dob == "" ||
      vin == ""
    ) {
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
    <div className={styles.Section1Parent}>
      <div className={styles.Section1}>
        <div className={styles.top}>
          <p className={styles.title}>Voter&apos;s Registration Status</p>
          <p className={styles.subTitle}>
            Not sure if you&apos;re registered to vote? Check your voter&apos;s
            registration status here
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
          <div className={styles.group}>
            <label htmlFor="firstName">
              <p>First name</p>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="first name"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                  setError(false);
                }}
              />
            </label>

            <label htmlFor="lastName">
              <p>Last name</p>
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="last name"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                  setError(false);
                }}
              />
            </label>
          </div>

          <div className={styles.group}>
            <label htmlFor="dob">
              <p>Date of birth</p>
              <input
                type="text"
                name="dob"
                id="dob"
                placeholder="DD/MM/YYYY"
                value={dob}
                onChange={(e) => {
                  setDob(e.target.value);
                  setError(false);
                }}
              />
            </label>

            <label htmlFor="vin">
              <p>Voter Identification Number (VIN)</p>
              <input
                type="text"
                name="vin"
                id="vin"
                placeholder="DD/MM/YYYY"
                value={vin}
                onChange={(e) => {
                  setVin(e.target.value);
                  setError(false);
                }}
              />
            </label>
          </div>

          <button type="submit" className={styles.submit}>
            <p>Check your status</p>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Section1;
