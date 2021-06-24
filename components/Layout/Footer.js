import styles from "../../styles/Layout/Footer.module.scss";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>
        Made with 💛 by{" "}
        <a href="https://github.com/wlcreate" target="_blank" rel="noopener noreferrer">
          Waverley
        </a>
        ,{" "}
        <a href="https://github.com/emjose" target="_blank" rel="noopener noreferrer">
          Emmanuel
        </a>
        , and{" "}
        <a href="https://github.com/sandaiiyahh" target="_blank" rel="noopener noreferrer">
          Sandy
        </a>
        . All Rights Reserved.{" "}
        <a
          href="https://github.com/wlcreate/Start-Asian-Love"
          target="_blank"
          rel="noopener noreferrer">
          💛 Github
        </a>
      </p>
      <p>
        Icons made by{" "}
        <a href="https://www.flaticon.com/authors/dmitri13" title="dmitri13">
          dmitri13
        </a>{" "}
      </p>
    </div>
  );
};
