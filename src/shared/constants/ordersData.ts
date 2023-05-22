import { OrderDetails } from "./../../models/OrderModel";

export interface OrdersModel extends OrderDetails {
  orderId: number;
  totalQuantity: number;
  status: string;
  price: number;
}

export const orders: OrdersModel[] = [
  {
    orderId: 1,
    totalQuantity: 2,
    price: 40,
    status: "In Progress",
    firstName: "Vali",
    lastName: "Scoican",
    billingAddress: {
      address: "oltului 57",
      country: "Belize",
      phoneNumber: "+4075903895",
    },
    deliveryAddress: undefined,
    deliveryDate: "2023-02-23",
    observations: "none",
    paymentType: "online",
    willRecommend: false,
  },
  {
    orderId: 3,
    totalQuantity: 13,
    price: 120,
    status: "Completed",
    firstName: "Vali",
    lastName: "Scoican",
    billingAddress: {
      address: "oltului 57",
      country: "Belize",
      phoneNumber: "+4075903895",
    },
    deliveryAddress: {
      address: "berzelor 13",
      country: "Afganistan",
      phoneNumber: "+40752903895",
    },
    deliveryDate: "2023-02-23",
    observations: "none",
    paymentType: "online",
    willRecommend: true,
  },
  {
    orderId: 4,
    totalQuantity: 11,
    price: 98,
    status: "In Progress",
    firstName: "Vali",
    lastName: "Scoican",
    billingAddress: {
      address: "oltului 57",
      country: "Belize",
      phoneNumber: "+4075903895",
    },
    deliveryAddress: undefined,
    deliveryDate: "2023-02-23",
    observations: "none",
    paymentType: "cash",
    willRecommend: false,
  },
];
