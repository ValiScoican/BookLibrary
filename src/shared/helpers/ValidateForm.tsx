import { Dispatch, SetStateAction } from "react";
import { OrderDetails, OrderDetailsError } from "../../models/OrderModel";

export const validateForm = (
  hideDeliveryDate: boolean,
  orderDetails: OrderDetails,
  setOrderDetailsError: Dispatch<SetStateAction<OrderDetailsError>>
) => {
  let isValid = true;
  const validateString = (value: string, name: string) => {
    if (!value || value === "") {
      setOrderDetailsError((prevState) => ({
        ...prevState,
        [name]: true,
      }));
      isValid = false;
    }
    return !value || value === "";
  };

  const validateNestedString = (
    value: string,
    name: string,
    parentName: "billingAddressError" | "deliveryAddressError"
  ) => {
    if (!value || value === "") {
      setOrderDetailsError((prevState) => ({
        ...prevState,
        [parentName]: {
          ...prevState[parentName],
          [name]: true,
        },
      }));
      isValid = false;
    }
    return !value || value === "";
  };

  const validateNestedStringNumber = (
    value: string,
    parentName: "billingAddressError" | "deliveryAddressError"
  ) => {
    const PHONE_REGEX = new RegExp("(/[^d]/g)|(0(([7][456728])|([23]51)).*)");

    if (!value || value === "" || !PHONE_REGEX.test(value)) {
      setOrderDetailsError((prevState) => ({
        ...prevState,
        [parentName]: {
          ...prevState[parentName],
          phoneNumberError: true,
        },
      }));
      isValid = false;
    }
    return !value || value === "";
  };

  validateString(orderDetails.firstName, "firstNameError");
  validateString(orderDetails.lastName, "lastNameError");
  validateString(orderDetails.deliveryDate, "deliveryDateError");
  validateNestedString(
    orderDetails.billingAddress?.address,
    "addressError",
    "billingAddressError"
  );
  validateNestedString(
    orderDetails.billingAddress?.country,
    "countryError",
    "billingAddressError"
  );
  validateNestedStringNumber(
    orderDetails.billingAddress?.phoneNumber,
    "billingAddressError"
  );
  if (!hideDeliveryDate) {
    validateNestedString(
      orderDetails.deliveryAddress?.address || "",
      "addressError",
      "deliveryAddressError"
    );
    validateNestedString(
      orderDetails.deliveryAddress?.country || "",
      "countryError",
      "deliveryAddressError"
    );
    validateNestedStringNumber(
      orderDetails.deliveryAddress?.phoneNumber || "",
      "deliveryAddressError"
    );
  }
  return isValid;
};
