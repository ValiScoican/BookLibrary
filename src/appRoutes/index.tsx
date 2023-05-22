import { Navigate, Route, Routes } from "react-router-dom";
import { useUserAuth } from "../context/LoginContext";
import BookDetail from "../pages/BookDetail";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import OrderDetail from "../pages/OrderDetail";
import Orders from "../pages/Orders";
import PageNotFound from "../pages/PageNotFound";
import Register from "../pages/Register";
import ShoppingCart from "../pages/ShoppingCart";
import Footer from "../shared/components/Footer";
import MainNavigation from "../shared/components/MainNavigation";
import styles from "./appRoutes.module.scss";

const AppRoutes = () => {
  const { userLogin } = useUserAuth();

  const RstrictLogReg = ({ children }: { children: JSX.Element }) => {
    if (userLogin.email === undefined) {
      return children;
    } else {
      return <Navigate replace to="/home" />;
    }
  };

  const PrivateRoute = ({ children }: { children: JSX.Element }) => {
    if (userLogin.email !== undefined) {
      return children;
    } else {
      return <Navigate replace to="/home" />;
    }
  };
  return (
    <main className={styles.container}>
      <section className={styles.header}>
        <MainNavigation />
      </section>
      <section className={styles.content} id="main-wrapper">
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/book-detail/:bookId" element={<BookDetail />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
          <Route
            path="/login"
            element={
              <RstrictLogReg>
                <Login />
              </RstrictLogReg>
            }
          />
          <Route
            path="/register"
            element={
              <RstrictLogReg>
                <Register />
              </RstrictLogReg>
            }
          />
          <Route path="/order-details" element={<OrderDetail />} />
          <Route
            path="/orders"
            element={
              <PrivateRoute>
                <Orders />
              </PrivateRoute>
            }
          />
          <Route
            path="/orders-edit/:orderIdUrl"
            element={
              <PrivateRoute>
                <OrderDetail />
              </PrivateRoute>
            }
          />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <div className={styles.footer}>
          <Footer />
        </div>
      </section>
    </main>
  );
};

export default AppRoutes;
