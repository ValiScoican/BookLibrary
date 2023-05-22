import styles from "./MainNavigation.module.scss";
import { NavLink, useNavigate } from "react-router-dom";
import CartIcon from "../../utils/graphics/icons/CartIcon";
import HomeIcon from "../../utils/graphics/icons/HomeIcon";
import InTransitIcon from "../../utils/graphics/icons/InTransitIcon";
import UserIcon from "../../utils/graphics/icons/UserIcon";
import logoITP from "../../utils/graphics/logo/LogoITP.svg";
import { useShoppingCart } from "../../../context/ShoppingCartContext";
import { useUserAuth } from "../../../context/LoginContext";

const MainNavigation = () => {
  const navigate = useNavigate();
  const { cartQuantity } = useShoppingCart();
  const { userLogin, handleLogout } = useUserAuth();
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img
          onClick={() => navigate(`/home`)}
          className={styles.logoITP}
          src={logoITP}
          alt="logoITP"
        />
        <NavLink to="/home">IT Perspectives</NavLink>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <HomeIcon className={styles.icon} />
            <NavLink
              className={(active) => (active.isActive ? styles.active : "")}
              to="/home"
            >
              HOME
            </NavLink>
          </li>
          <li>
            <CartIcon className={styles.icon} />
            <NavLink
              title={cartQuantity.toString()}
              className={(active) =>
                active.isActive
                  ? `${styles.active} ${styles.shoppingCart}`
                  : styles.shoppingCart
              }
              to="/shopping-cart"
            >
              SHOPPING CART{" "}
            </NavLink>
          </li>
          {userLogin.email === undefined ? (
            <li>
              <InTransitIcon className={styles.icon} />
              <NavLink
                style={{ pointerEvents: "none" }}
                className={(active) => (active.isActive ? styles.active : styles.noUserLogged)}
                to="/orders"
              >
                ORDERS
              </NavLink>
            </li>
          ) : (
            <li>
              <InTransitIcon className={styles.icon} />
              <NavLink
                className={(active) => (active.isActive ? styles.active : "")}
                to="/orders"
              >
                ORDERS
              </NavLink>
            </li>
          )}
          {userLogin.email !== undefined ? (
            <li>
              <span onClick={() => handleLogout()}>LOGOUT</span>
            </li>
          ) : (
            <li>
              <UserIcon className={styles.icon} />
              <NavLink
                className={(active) => (active.isActive ? styles.active : "")}
                to="/login"
              >
                LOGIN
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
