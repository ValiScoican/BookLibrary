import { SetStateAction, Dispatch } from "react";
import {
  AddressDetails,
  AddressDetailsError,
  OrderDetails,
  OrderDetailsError,
} from "./OrderModel";

export type ContactDetailsProps = {
  firstName: string;
  lastName: string;
  setOrderDetails: Dispatch<SetStateAction<OrderDetails>>;
  firstNameError: boolean;
  lastNameError: boolean;
  setOrderDetailsError: Dispatch<SetStateAction<OrderDetailsError>>;
  formWasSubbmitted: boolean;
};

export type AdressInputsProps = {
  addressDetails?: AddressDetails;
  isBillingAddress?: boolean;
  setOrderDetails: Dispatch<SetStateAction<OrderDetails>>;
  addressDetailsError: AddressDetailsError;
  setOrderDetailsError: Dispatch<SetStateAction<OrderDetailsError>>;
  formWasSubbmitted: boolean;
};

export type DeliveryDateProps = {
  deliveryDate: string;
  setOrderDetails: Dispatch<SetStateAction<OrderDetails>>;
};

export type PaymentTypeProps = {
  paymentType: string;
  setOrderDetails: Dispatch<SetStateAction<OrderDetails>>;
};

export type willRecommendProps ={
  willRecommend: string;
  setOrderDetails: Dispatch<SetStateAction<OrderDetails>>;
}
export type ObservationProps = {
  observations: string;
  setOrderDetails: Dispatch<SetStateAction<OrderDetails>>;
};
