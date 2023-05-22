import RegisterBtn from "../../shared/components/Buttons/RegisterBtn";
import styles from "./Register.module.scss";
import img from "../../shared/utils/graphics/images/LogReg.jpg";
import { Login, LoginError } from "../../models/LoginModel";
import { useState } from "react";
import { validateRegForm } from "../../shared/helpers/ValidateRegForm";
import { useNavigate } from "react-router-dom";
import ToastD from "../../shared/components/Toast/ToastD";

export interface Register extends Login {
  confirmPass: string;
}

export interface RegisterError extends LoginError {
  confirmPassError: boolean;
  samePassError: string;
}

const RegisterForm = () => {
  const navigate = useNavigate();

  const [userReg, setUserReg] = useState<Register>({} as Register);
  const [userRegError, setUserRegError] = useState<RegisterError>(
    {} as RegisterError
  );
  const [regFormSubbmitted, setRegFormSubbmitted] = useState(false);

  const [toast, setToast] = useState(false);
  const [success, setSuccess] = useState(false);

  const timeOut = () => {
    setTimeout(() => setToast(false), 3000);
  };
  const letUserSeeToastSuccess = () => {
    setTimeout(() => navigate("/login"), 1800);
  };

  const regSubmissionHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!validateRegForm(userReg, setUserRegError)) {
      setRegFormSubbmitted(true);
      if (checkForExistingUserAtReg(userReg.email)) {
        setToast(true);
      }
    } else {
      setUserInLocalStorage(userReg.email, userReg.password);
      setSuccess(true);
      setToast(true);
      letUserSeeToastSuccess();
      console.log(success);
    }
  };

  const setUserInLocalStorage = (email: string, password: string) => {
    let existingUsers = JSON.parse(localStorage.getItem("users") || "[]");
    if (existingUsers == null) existingUsers = [];
    existingUsers.push({ email, password });
    localStorage.setItem("users", JSON.stringify(existingUsers));
  };

  const checkSamePass = () => {
    if (userReg.password !== userReg.confirmPass)
      return (
        <span className={styles.invalidLabel}>
          Your password is not the same
        </span>
      );
  };

  const checkForExistingUserAtReg = (email: string) => {
    const getExistedUser = localStorage.getItem("users");
    if (getExistedUser) {
      const foundUser = JSON.parse(getExistedUser);
      return foundUser?.find((u: any) => u.email === email);
    }
  };

  const onChangeHandler = (
    e: any,
    name: string,
    nameError: string,
    hasError: boolean
  ) => {
    setUserReg((prevState) => ({
      ...prevState,
      [name]: e.target.value,
    }));
    setUserRegError((prevState) => ({
      ...prevState,
      [nameError]: hasError,
    }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <img src={img} alt="LogRegJPG"></img>
      </div>
      <form className={styles.registerForm} onSubmit={regSubmissionHandler}>
        <h1>Register</h1>
        <h3>Create new account</h3>
        <div className={styles.inputs}>
          <div className={styles.email}>
            <label>Email</label>
            <input
              className={
                !userRegError.emailError
                  ? `${styles.input} `
                  : `${styles.input} ${styles.invalid}`
              }
              type="email"
              placeholder="Email"
              onChange={(e) => {
                onChangeHandler(
                  e,
                  "email",
                  "emailError",
                  e.target.value === ""
                );
              }}
            />
            {regFormSubbmitted && userRegError.emailError && (
              <span className={styles.invalidLabel}>
                Don't forget your email
              </span>
            )}
          </div>

          <div className={styles.password}>
            <label>Password</label>
            <input
              className={
                !userRegError.passwordError
                  ? `${styles.input} `
                  : `${styles.input} ${styles.invalid}`
              }
              type="password"
              placeholder="Password"
              onChange={(e) => {
                onChangeHandler(
                  e,
                  "password",
                  "passwordError",
                  e.target.value === ""
                );
              }}
            />
            {regFormSubbmitted && userRegError.passwordError && (
              <span className={styles.invalidLabel}>
                Type your password first.
              </span>
            )}
          </div>

          <div className={styles.password}>
            <label>Confirm Password</label>
            <input
              className={
                !userRegError.confirmPassError
                  ? `${styles.input} `
                  : `${styles.input} ${styles.invalid}`
              }
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => {
                onChangeHandler(
                  e,
                  "confirmPass",
                  "confirmPassError",
                  e.target.value === ""
                );
              }}
            />
            {regFormSubbmitted && userRegError.confirmPassError && (
              <span className={styles.invalidLabel}>
                We need to confirm your password
              </span>
            )}

            {regFormSubbmitted && checkSamePass()}
          </div>
        </div>
        <RegisterBtn />
        {success ? (
          <>
            <ToastD
              toastType="success"
              visable={toast}
              title={"Success!"}
              description={"Account successfully created"}
            />
            {timeOut()}
          </>
        ) : (
          <>
            <ToastD
              toastType="danger"
              visable={toast}
              title={"Error"}
              description={"User already exist"}
            />
            {timeOut()}
          </>
        )}
      </form>
    </div>
  );
};

export default RegisterForm;
