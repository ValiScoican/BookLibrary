import { Dispatch, SetStateAction } from "react";
import { Login, LoginError } from "./LoginModel";

export type LoginProps = {
  email: string;
  password: string;
  setUserLogin: Dispatch<SetStateAction<Login>>;
  emailError: boolean;
  passwordError: boolean;
  setUserLoginError: Dispatch<SetStateAction<LoginError>>;
  loginFormSubbmitted: boolean;
};
