import styles from "./Footer.module.scss";

const Footer = () => {
  const scrollToTop = () => {
    document.getElementById("main-wrapper")?.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.copyright}>
          <p>
            &copy;Copyright{" "}
            <b>
              <u>IT Perspectives</u>
            </b>
          </p>
        </div>
        <button onClick={scrollToTop}>
            <div className={styles.arrow}></div>
        </button>
      </div>
    </div>
  );
};

export default Footer;
