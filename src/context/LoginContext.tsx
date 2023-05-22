import { createContext, ReactNode, useContext } from "react";
import { Login } from "../models/LoginModel";

export type UserContextModel = {
  email: string;
  password: string;
};

export type userProviderProps = {
  children: ReactNode;
};

export type userContextProps = {
  getUserName: (email: string) => string | null;
  handleLogout: () => void;
  handleLogin: (user: Login) => void;
  userLogin: Login;
};

export const UserContext = createContext({} as userContextProps);

export const useUserAuth = () => {
  return useContext(UserContext);
};
