import React, { ReactNode, useRef } from "react";
import InfoIcon from "../../utils/graphics/icons/InfoIcon";
import styles from "./Modal.module.scss";

interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  onConfirmed: () => void;
  children: ReactNode;
}

const Modal = ({
  title,
  isOpen,
  onClose,
  onConfirmed,
  children,
}: ModalProps) => {
  const outsideRef = useRef(null);
  const handleCloseOnOverlay = (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    if (e.target === outsideRef.current) {
      onClose();
    }
  };

  return isOpen ? (
    <section className={styles.modal}>
      <div
        className={styles.overlay}
        ref={outsideRef}
        onClick={handleCloseOnOverlay}
      />
      <div className={styles.box}>
        <InfoIcon className={styles.icon} />
        <div className={styles.title}>{title}</div>
        <div className={styles.content}>{children}</div>
        <div className={styles.buttons}>
          <button className={styles.confirm} onClick={() => onConfirmed()}>
            Confirm
          </button>
          <button className={styles.cancel} onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </section>
  ) : null;
};

export default Modal;
