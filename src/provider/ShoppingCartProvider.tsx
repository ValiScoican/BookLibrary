import { ReactNode, useState } from "react";
import { shoppingCartContext } from "../context/ShoppingCartContext";
import { BookListModel } from "../models/BookListModel";
import bookData, { storeItems } from "../shared/constants/BookCover";

export type ShoppingCartProviderProps = {
  children: ReactNode;
};

export const ShoppingCartProvider = ({
  children,
}: ShoppingCartProviderProps) => {
  const [cartItems, setCartItems] = useState(storeItems);

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const getBookQuantity = (id: string) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };

  const addToCart = (id: string) => {
    const currBook = bookData.find((book) => book.id === id) as BookListModel;
    setCartItems((cartItems) => {
      if (cartItems.find((item) => item.id === id) == null) {
        return [
          ...cartItems,
          {
            id,
            quantity: 1,
            title: currBook.title,
            author: currBook.author,
            price: currBook.price,
          },
        ];
      } else {
        return cartItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeFromCart = (id: string) => {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  };

  return (
    <shoppingCartContext.Provider
      value={{
        cartItems,
        setCartItems,
        getBookQuantity,
        addToCart,
        removeFromCart,
        cartQuantity,
      }}
    >
      {children}
    </shoppingCartContext.Provider>
  );
};
