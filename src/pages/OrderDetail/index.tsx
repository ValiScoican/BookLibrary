import CancelOrderBtn from "../../shared/components/Buttons/CancelOrderBtn/CancelOrderBtn";
import PlaceOrderBtn from "../../shared/components/Buttons/PlaceOrder/PlaceOrderBtn";
import styles from "./OrderDetail.module.scss";
import img from "../../shared/utils/graphics/images/OrderPage.png";
import ContactDetails from "./ContactDetails";
import AddressInputs from "./Address";
import PaymentType from "./PaymentType";
import DeliveryDate from "./DeliveryDate";
import Observations from "./Observations";

import { OrderDetails, OrderDetailsError } from "../../models/OrderModel";
import { useState } from "react";
import { dateFormatOptions } from "../../shared/helpers/dateFormatOption";
import { validateForm } from "../../shared/helpers/ValidateForm";
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { orders } from "../../shared/constants/ordersData";
import Modal from "../../shared/components/Modal/Modal";
import { useUserAuth } from "../../context/LoginContext";
import { useShoppingCart } from "../../context/ShoppingCartContext";

const OrderDetail = () => {
  const { userLogin } = useUserAuth();
  const { setCartItems } = useShoppingCart();
  const navigate = useNavigate();
  const { orderIdUrl } = useParams();
  const location = useLocation();

  const orderId = orderIdUrl ? +orderIdUrl : 0;
  const orderToEdit = orders.find((order) => order.orderId === orderId);

  const date = new Date();
  date.setDate(date.getDate() + 2);

  const [isModalOpen, setModalState] = useState(false);
  const toggleModal = () => setModalState(!isModalOpen);

  const [orderDetails, setOrderDetails] = useState<OrderDetails>(() => {
    if (orderToEdit) return orderToEdit as unknown as OrderDetails;
    return {
      willRecommend: false,
      paymentType: "online",
      deliveryDate: date.toLocaleDateString("fr-CA", dateFormatOptions),
    } as unknown as OrderDetails;
  });

  const [orderDetailsError, setOrderDetailsError] = useState<OrderDetailsError>(
    {} as OrderDetailsError
  );

  const hideDeliveryDateInitaialState =
    !!orderToEdit &&
    !!orderToEdit.deliveryAddress &&
    orderToEdit.deliveryAddress.address !== "";

  const [formWasSubbmitted, setFormWasSubbmitted] = useState(false);
  const [hideDeliveryDate, setHideDeliveryDate] = useState(
    !hideDeliveryDateInitaialState
  );

  const formSubmissionHandler = () => {
    if (!validateForm(hideDeliveryDate, orderDetails, setOrderDetailsError)) {
      setFormWasSubbmitted(true);
    } else if (orderToEdit) {
      toggleModal();
    } else {
      setCartItems([]);
      navigate("/home");
    }
  };

  if (orderToEdit || location.pathname === "/order-details") {
    return (
      <section className={styles.orderPage}>
        <section className={styles.leftContainer}>
          <img src={img} alt="book" />
        </section>

        <section className={styles.borderBox}>
          <form className={styles.orderContainer}>
            <h1> Order Details</h1>
            {userLogin.email === undefined && (
              <span className={styles.userNotLogged}>
                You must be logged in to place an order.
              </span>
            )}
            <ContactDetails
              setOrderDetails={setOrderDetails}
              firstName={orderDetails.firstName}
              lastName={orderDetails.lastName}
              setOrderDetailsError={setOrderDetailsError}
              firstNameError={orderDetailsError?.firstNameError}
              lastNameError={orderDetailsError?.lastNameError}
              formWasSubbmitted={formWasSubbmitted}
            />

            <h3>Billing Address</h3>
            <AddressInputs
              isBillingAddress
              setOrderDetails={setOrderDetails}
              addressDetails={orderDetails.billingAddress}
              setOrderDetailsError={setOrderDetailsError}
              addressDetailsError={orderDetailsError?.billingAddressError}
              formWasSubbmitted={formWasSubbmitted}
            />

            <div className={styles.sameAddress}>
              <input
                type="checkbox"
                checked={hideDeliveryDate}
                onChange={(e) => setHideDeliveryDate(e.target.checked)}
              />
              <label>Use address for delivery</label>
            </div>
            {!hideDeliveryDate && (
              <>
                <h3>Delivery Address</h3>
                <AddressInputs
                  setOrderDetails={setOrderDetails}
                  addressDetails={orderDetails.deliveryAddress}
                  setOrderDetailsError={setOrderDetailsError}
                  addressDetailsError={orderDetailsError?.deliveryAddressError}
                  formWasSubbmitted={formWasSubbmitted}
                />
              </>
            )}

            <PaymentType
              paymentType={orderDetails.paymentType}
              setOrderDetails={setOrderDetails}
            />
            <DeliveryDate
              deliveryDate={orderDetails.deliveryDate}
              setOrderDetails={setOrderDetails}
            />
            <Observations
              observations={orderDetails.observations}
              setOrderDetails={setOrderDetails}
            />

            <h3>Would you recommend us?</h3>
            <div className={styles.recommendCheck}>
              <input
                type="checkbox"
                value="yes"
                checked={orderDetails.willRecommend}
                onChange={(e) =>
                  setOrderDetails((prevState) => ({
                    ...prevState,
                    willRecommend: e.target.checked,
                  }))
                }
              />
              <label>For sure</label>
            </div>
            <div className={styles.buttons}>
              <CancelOrderBtn />
              <PlaceOrderBtn
                onConfirmed={() => {
                  userLogin.email === undefined
                    ? navigate("/login")
                    : formSubmissionHandler();
                }}
              />
            </div>
          </form>

          <Modal
            title={"Confirmation"}
            isOpen={isModalOpen}
            onClose={toggleModal}
            onConfirmed={() => navigate("/home")}
          >
            Confirm order details changes?
          </Modal>
        </section>
      </section>
    );
  }
  return <Navigate replace to={"/404"} />;
};

export default OrderDetail;
