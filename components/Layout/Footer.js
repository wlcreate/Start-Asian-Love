import styles from "../../styles/Layout/Footer.module.scss";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>
        Made with 💛 All Rights Reserved © 2021{" "}
        <a
          href="https://github.com/wlcreate/Start-Asian-Love"
          target="_blank"
          rel="noopener noreferrer">
          💛 Github
        </a>
      </p>
    </div>
  );
};
