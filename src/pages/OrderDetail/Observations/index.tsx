import { ObservationProps } from "../../../models/OrderProps";
import styles from "./Observations.module.scss";

const Observations = ({ observations, setOrderDetails }: ObservationProps) => {
  return (
    <section className={styles.observationsArea}>
      <h3>Observations</h3>
      <div className={styles.inputs}>
        <textarea
          placeholder="Do you have any?"
          value={observations}
          onChange={(e) =>
            setOrderDetails((prevState) => ({
              ...prevState,
              observations: e.target.value,
            }))
          }
        ></textarea>
      </div>
    </section>
  );
};

export default Observations;
