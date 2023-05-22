import styles from "./Login.module.scss";
import img from "../../shared/utils/graphics/images/LogReg.jpg";
import { Link } from "react-router-dom";
import LoginBtn from "../../shared/components/Buttons/LoginBtn";
import { useState } from "react";
import { Login, LoginError } from "../../models/LoginModel";
import { validateLoginForm } from "../../shared/helpers/ValidateLoginForm";
import { useUserAuth } from "../../context/LoginContext";

const LoginForm = () => {
  const { handleLogin } = useUserAuth();
  const [loginFormSubbmitted, setLoginFormSubbmitted] = useState(false);

  const [userLogin, setUserLogin] = useState<Login>({} as Login);
  const [userLoginError, setUserLoginError] = useState<LoginError>(
    {} as LoginError
  );

  const loginSubmissionHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!validateLoginForm(userLogin, setUserLoginError)) {
      setLoginFormSubbmitted(true);
    } else {
      handleLogin(userLogin);
    }
  };

  const onChangeHandler = (
    e: any,
    name: string,
    nameError: string,
    hasError: boolean
  ) => {
    setUserLogin((prevState) => ({
      ...prevState,
      [name]: e.target.value,
    }));
    setUserLoginError((prevState) => ({
      ...prevState,
      [nameError]: hasError,
    }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <img src={img} alt="LogRegJPG"></img>
      </div>

      <form className={styles.loginForm} onSubmit={loginSubmissionHandler}>
        <h1>Log in</h1>
        <h3>Use a local account to login</h3>
        <div className={styles.inputs}>
          <section className={styles.email}>
            <label>Email</label>
            <input
              className={
                !userLoginError.emailError
                  ? `${styles.input} `
                  : `${styles.input} ${styles.invalid}`
              }
              type="email"
              placeholder="Email"
              value={userLogin.email}
              onChange={(e) => {
                onChangeHandler(
                  e,
                  "email",
                  "emailError",
                  e.target.value === ""
                );
              }}
            />
            {loginFormSubbmitted && userLoginError.emailError && (
              <span className={styles.invalidLabel}>
                Write your email first
              </span>
            )}
          </section>

          <section className={styles.password}>
            <label>Password</label>
            <input
              className={
                !userLoginError.emailError
                  ? `${styles.input} `
                  : `${styles.input} ${styles.invalid}`
              }
              type="password"
              placeholder="Password"
              value={userLogin.password}
              onChange={(e) => {
                onChangeHandler(
                  e,
                  "password",
                  "passwordError",
                  e.target.value === ""
                );
              }}
            />
            {loginFormSubbmitted && userLoginError.passwordError && (
              <span className={styles.invalidLabel}>
                Don't forget to type your password
              </span>
            )}
          </section>
          <section className={styles.rememberMe}>
            <input
              type="checkbox"
              value="yes"
              checked={userLogin.rememberMe}
              onChange={(e) =>
                setUserLogin((prevState) => ({
                  ...prevState,
                  rememberMe: e.target.checked,
                }))
              }
            />
            <label>Remember me?</label>
          </section>
        </div>
        <LoginBtn />
        <div className={styles.links}>
          <Link to="">Forgot your password?</Link>
          <Link to="/register">Register as a new user</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
