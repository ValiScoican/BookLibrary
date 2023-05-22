import styles from "./ContactDetails.module.scss";
import { ContactDetailsProps } from "../../../models/OrderProps";

const ContactDetails = ({
  firstName,
  lastName,
  setOrderDetails,
  firstNameError,
  lastNameError,
  setOrderDetailsError,
  formWasSubbmitted,
}: ContactDetailsProps) => {
  return (
    <section className={styles.contactDetails}>
      <h3>Contact Details</h3>
      <div className={styles.inputs}>
        <input
          className={
            !firstNameError
              ? `${styles.inputEntry} `
              : `${styles.inputEntry} ${styles.invalid}`
          }
          type="text"
          value={firstName}
          placeholder="First Name"
          onChange={(e) => {
            setOrderDetailsError((prevState) => ({
              ...prevState,
              firstNameError: e.target.value === "",
            }));

            setOrderDetails((prevState) => ({
              ...prevState,
              firstName: e.target.value,
            }));
          }}
        />

        <input
          className={
            !lastNameError
              ? `${styles.inputEntry} `
              : `${styles.inputEntry} ${styles.invalid}`
          }
          type="text"
          value={lastName}
          placeholder="Last Name"
          onChange={(e) => {
            setOrderDetailsError((prevState) => ({
              ...prevState,
              lastNameError: e.target.value === "",
            }));

            setOrderDetails((prevState) => ({
              ...prevState,
              lastName: e.target.value,
            }));
          }}
        />
        {formWasSubbmitted && firstNameError && (
          <span className={styles.invalidLabel}>First name is mandatory</span>
        )}
        {formWasSubbmitted && lastNameError && (
          <span className={styles.invalidLabel_lastName}>
            Last name is also mandatory
          </span>
        )}
      </div>
    </section>
  );
};

export default ContactDetails;
