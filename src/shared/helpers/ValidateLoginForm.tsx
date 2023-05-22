import { Dispatch, SetStateAction } from "react";
import { Login, LoginError } from "../../models/LoginModel";

export const validateLoginForm = (
  userLogin: Login,
  setUserLoginError: Dispatch<SetStateAction<LoginError>>
) => {
  
  let isValid = true;
  const validateLogin = (value: string, name: string) => {
    if (!value || value === "") {
      setUserLoginError((prevState) => ({
        ...prevState,
        [name]: true,
      }));
      isValid = false;
    }
    return !value || value === "";
  };

  validateLogin(userLogin.email, "emailError");
  validateLogin(userLogin.password, "passwordError");
  return isValid;
};
