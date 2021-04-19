import { Header } from '../components/header'
import { Footer } from '../components/Footer'
import styles from '../styles/Wins.module.css';

export default function Wins() {
  return (
    <div className={styles.container}>

    <Header/>

      {/* divs are outlined for reference in module.css file */}
    
      <div className={styles.main}>
        <h2>I am the Wins Page</h2>
      </div>
      
      <div className={styles.content}>
         <h3>AAPI Heritage Month</h3> 
         <h3>Contributions</h3>
         <h3>Representation</h3>
         <h3>Cultural Centers</h3>
         <h3>Art</h3>
          
      </div>

    <Footer/>
    </div>

  );
}