import { useState } from "react";
import { UserContext, userProviderProps } from "../context/LoginContext";
import { useLocalStorage } from "../hooks/useLocalStorageHook";
import { Login } from "../models/LoginModel";
import ToastD from "../shared/components/Toast/ToastD";

export const UserProvider = ({ children }: userProviderProps) => {
  const [userLogin, setUserLogin] = useLocalStorage<Login>(
    "loggedUser",
    {} as Login
  );
  const [toast, setToast] = useState(false);

  const timeOut = () => {
    setTimeout(() => setToast(false), 3000);
  };

  const handleLogout = () => {
    setUserLogin({} as Login);
  };

  const handleLogin = (user: Login) => {
    checkIfExists(user) ? setUserLogin(user) : setToast(true);
  };

  const checkIfExists = (user: Login) => {
    const users = localStorage.getItem("users");
    const parseUsers = users ? (JSON.parse(users) as Login[]) : undefined;
    return parseUsers?.find(
      (u) => u.email === user.email && u.password === user.password
    );
  };

  const getUserName = (email: string) => {
    const em = email.split("@")[0];
    return em;
  };

  return (
    <UserContext.Provider
      value={{
        getUserName,
        handleLogout,
        handleLogin,
        userLogin,
      }}
    >
      {toast && (
        <>
          <ToastD
            toastType="danger"
            visable={toast}
            title={"Error"}
            description={"User doesn't exist"}
          />
          {timeOut()}
        </>
      )}
      {children}
    </UserContext.Provider>
  );
};
