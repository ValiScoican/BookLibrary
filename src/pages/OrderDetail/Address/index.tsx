import styles from "./Address.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { AdressInputsProps } from "../../../models/OrderProps";

const countryApi = "https://api.first.org/data/v1/countries";

const SortArray = (resp: { [x: string]: { [x: string]: any } }) => {
  const TempVar: Array<string> = [];
  Object.keys(resp).forEach(function (key: any) {
    TempVar.push(resp[key]["country"]);
  });
  return TempVar.sort((a, b) => a.localeCompare(b));
};

const AddressInputs = ({
  addressDetails,
  isBillingAddress,
  setOrderDetails,
  addressDetailsError,
  setOrderDetailsError,
  formWasSubbmitted,
}: AdressInputsProps) => {
  const [countriesArray, setCountriesArray] = useState<string[]>([]);
  const filledName = (
    e: any,
    name: string,
    erorrName: string,
    hasError: boolean
  ) => {
    const wayOfDelivery = isBillingAddress
      ? "billingAddress"
      : "deliveryAddress";
    const wayOfDeliveryError = isBillingAddress
      ? "billingAddressError"
      : "deliveryAddressError";

    setOrderDetailsError((prevState) => ({
      ...prevState,
      [wayOfDeliveryError]: {
        ...prevState[wayOfDeliveryError],
        [erorrName]: hasError,
      },
    }));

    setOrderDetails((prevState) => ({
      ...prevState,
      [wayOfDelivery]: {
        ...prevState[wayOfDelivery],
        [name]: e.target.value,
      },
    }));
  };

  useEffect(() => {
    axios
      .get(countryApi, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(function (response) {
        setCountriesArray(SortArray(response["data"]["data"]));
      });
  }, []);

  return (
    <section className={styles.billingAddress}>
      <div className={styles.inputs}>
        <select
          className={
            !addressDetailsError?.countryError
              ? `${styles.select} `
              : `${styles.select} ${styles.invalid}`
          }
          defaultValue={addressDetails?.country || "Select"}
          placeholder="test"
          name="country"
          value={addressDetails?.country}
          onChange={(e) => {
            filledName(
              e,
              "country",
              "countryError",
              e.target.value === "Select"
            );
          }}
        >
          <option disabled value="Select">
            Select your option
          </option>
          {countriesArray.map((element, index) => (
            <option key={index} value={element}>
              {element}
            </option>
          ))}
        </select>

        {formWasSubbmitted && addressDetailsError?.countryError && (
          <span className={styles.invalidLabel}>You must select a country</span>
        )}
        <input
          value={addressDetails?.address}
          className={
            !addressDetailsError?.addressError
              ? `${styles.input} `
              : `${styles.input} ${styles.invalid}`
          }
          placeholder="Address"
          onChange={(e) => {
            filledName(e, "address", "addressError", e.target.value === "");
          }}
        />
        {formWasSubbmitted && addressDetailsError?.addressError && (
          <span className={styles.invalidLabel}>
            We need your address. Don't forget to provide it
          </span>
        )}
        <input
          value={addressDetails?.phoneNumber}
          className={
            !addressDetailsError?.phoneNumberError
              ? `${styles.input} `
              : `${styles.input} ${styles.invalid}`
          }
          onChange={(e) => {
            const PHONE_REGEX = new RegExp(
              "(/[^d]/g)|(0(([7][456728])|([23]51)).*)"
            );
            const hasError =
              e.target.value === "" || !PHONE_REGEX.test(e.target.value);
            filledName(e, "phoneNumber", "phoneNumberError", hasError);
          }}
          placeholder="Phone Number"
        />
        {formWasSubbmitted && addressDetailsError?.phoneNumberError && (
          <span className={styles.invalidLabel}>
            I guess you don't wanna know when your books arrive...
          </span>
        )}
      </div>
    </section>
  );
};

export default AddressInputs;
