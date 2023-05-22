import { StoreItemsModel } from "../models/StoreItemsModel";
import { useContext, Dispatch, SetStateAction, createContext } from "react";

export type ShoppingCartContextProps = {
  cartItems: StoreItemsModel[];
  setCartItems: Dispatch<SetStateAction<StoreItemsModel[]>>;
  getBookQuantity: (id: string) => number;
  addToCart: (id: string) => void;
  removeFromCart: (id: string) => void;
  cartQuantity: number;
};
export const shoppingCartContext = createContext(
  {} as ShoppingCartContextProps
);

export const useShoppingCart = () => {
  return useContext(shoppingCartContext);
};
