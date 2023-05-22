export type AddressDetails = {
  country: string;
  address: string;
  phoneNumber: string;
};

export type AddressDetailsError = {
  countryError: boolean;
  addressError: boolean;
  phoneNumberError: boolean;
};

export type OrderDetails = {
  firstName: string;
  lastName: string;
  billingAddress: AddressDetails;
  deliveryAddress?: AddressDetails;
  deliveryDate: string;
  paymentType: string;
  observations: string;
  willRecommend?: boolean;
};

export type OrderDetailsError = {
  firstNameError: boolean;
  lastNameError: boolean;
  billingAddressError: AddressDetailsError;
  deliveryAddressError: AddressDetailsError;
  deliveryDateError: boolean;
};
