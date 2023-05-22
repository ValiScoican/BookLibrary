import styles from "./Toast.module.scss";
import { useEffect, useState } from "react";
import Toast from "./index";

type ToastProps = {
  toastType: "success" | "danger" | "info" | "warning";
  visable: boolean;
  title: string;
  description: string;
};

const ToastD = ({ toastType, visable, title, description }: ToastProps) => {
  const [list, setList] = useState<any>([]);
  let toastProperties = null;

  const showToast = (type: string) => {
    switch (type) {
      case "success":
        toastProperties = {
          id: list.length + 1,
          backgroundColor: "var(--color-toast-200)",
        };
        break;
      case "danger":
        toastProperties = {
          id: list.length + 1,
          backgroundColor: "var(--color-toast-400)",
        };
        break;
      case "info":
        toastProperties = {
          id: list.length + 1,
          backgroundColor: "var(--color-toast-100)",
        };
        break;
      case "warning":
        toastProperties = {
          id: list.length + 1,
          backgroundColor: "var(--color-toast-300)",
        };
        break;
      default:
        toastProperties = {};
    }
    setList([...list, { ...toastProperties, title, description }]);
  };

  useEffect(() => {
    if (visable) {
      showToast(toastType);
    }
  }, [visable, toastType]);

  return (
    <div className={styles.root}>
      <Toast toastlist={list} position="bottom-right" setList={setList} />
    </div>
  );
};

export default ToastD;
