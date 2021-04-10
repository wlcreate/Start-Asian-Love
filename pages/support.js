import { Header } from '../components/header'
import styles from '../styles/Support.module.css';

export default function Support() {
  return (
    <div className={styles.container}>

    <Header/>

      <div className={styles.main}>
        <h2>I am the Support Page</h2>
      </div>
      {/* div is outlined for reference in module.css file */}

    </div>

  );
}