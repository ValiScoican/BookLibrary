import styles from "./DeliveryDate.module.scss";
import Calendar from "../../../shared/utils/graphics/icons/Calendar";
import { DeliveryDateProps } from "../../../models/OrderProps";

const DeliveryDate = ({ deliveryDate, setOrderDetails }: DeliveryDateProps) => {
  const date = new Date();
  date.setDate(date.getDate() + 2);

  return (
    <section className={styles.deliveryDate}>
      <h3>Delivery Date</h3>
      <div className={styles.inputs}>
        <input
          value={deliveryDate}
          onChange={(e) =>
            setOrderDetails((prevState) => ({
              ...prevState,
              deliveryDate: e.target.value,
            }))
          }
          type="date"
          placeholder="Delivery Date"
          min={date.toISOString().split("T")[0]}
        />
        <Calendar className={styles.calendar} />
      </div>
    </section>
  );
};

export default DeliveryDate;
