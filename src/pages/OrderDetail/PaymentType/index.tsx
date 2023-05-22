import { PaymentTypeProps } from "../../../models/OrderProps";
import styles from "./PaymentType.module.scss";

const PaymentType = ({ paymentType, setOrderDetails }: PaymentTypeProps) => {
  const isRadioSelected = (value: string): boolean => paymentType === value;
  return (
    <section className={styles.paymentType}>
      <h3>Payment Type</h3>
      <div className={styles.inputs}>
        <div>
          <input
            type="radio"
            value="online"
            checked={isRadioSelected("online")}
            onChange={(e) =>
              setOrderDetails((prevState) => ({
                ...prevState,
                paymentType: e.target.value,
              }))
            }
          />
          <label>Online</label>
        </div>
        <div>
          <input
            type="radio"
            value="cash"
            checked={isRadioSelected("cash")}
            onChange={(e) =>
              setOrderDetails((prevState) => ({
                ...prevState,
                paymentType: e.target.value,
              }))
            }
          />
          <label>Cash</label>
        </div>
      </div>
    </section>
  );
};

export default PaymentType;
