import { Dispatch, SetStateAction } from "react";
import { Register, RegisterError } from "../../pages/Register";

export const validateRegForm = (
  userReg: Register,
  setUserRegError: Dispatch<SetStateAction<RegisterError>>
) => {
  let isValid = true;
  const validateReg = (value: string, name: string) => {
    if (!value || value === "") {
      setUserRegError((prevState) => ({
        ...prevState,
        [name]: true,
      }));
      isValid = false;
    }
    return !value || value === "";
  };

  const samePass = (pass: string, confPass: string, name: string) => {
    if (pass !== confPass) {
      setUserRegError((prevState) => ({
        ...prevState,
        [name]: true,
      }));
      isValid = false;
    }
    return pass !== confPass;
  };

  const checkForExistingUserAtReg = (email: string) => {
    const users = localStorage.getItem("users");
    const parseUsers = users ? (JSON.parse(users) as Register[]) : undefined;
    const x = parseUsers?.find((u) => u.email === email);
    if (x?.email) {
      isValid = false;
    }
  };

  validateReg(userReg.email, "emailError");
  validateReg(userReg.password, "passwordError");
  validateReg(userReg.confirmPass, "confirmPassError");
  samePass(userReg.password, userReg.confirmPass, "samePassError");
  checkForExistingUserAtReg(userReg.email);
  return isValid;
};
