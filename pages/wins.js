import { Header } from '../components/header'
import styles from '../styles/Wins.module.css';

export default function Wins() {
  return (
    <div className={styles.container}>

    <Header/>

      <div className={styles.main}>
        <h2>I am the Wins Page</h2>
      </div>
      {/* div is outlined for reference in module.css file */}

    </div>

  );
}