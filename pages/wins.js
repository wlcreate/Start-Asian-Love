import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import styles from '../styles/Wins.module.css';
import { art as artResources } from '../Wins-separate.js';
import { heritage as heritageResources } from '../Wins-separate.js';
import { contributions as contributionsResources } from '../Wins-separate.js';
import { representation as representationResources } from '../Wins-separate.js';
import { cultural as culturalResources } from '../Wins-separate.js';
import {WinsResources} from '../components/WinsResources'

export default function Wins() {
  console.log(artResources)
  return (
    <div className={styles.container}>

    <Header/>

      {/* divs are outlined for reference in module.css file */}
    
      <div className={styles.main}>
        <h2>I am the Wins Page</h2>
      </div>
      <div>Scroll to Section</div>
        <button onClick={()=> ("heritage")}>Heritage</button>
        <button onClick={()=> ("contributions")}>Contributions</button>
        <button onClick={()=> ("representation")}>Representation</button> 
        <button onClick={()=> ("cultural")}>Cultural</button> 
        <button onClick={()=> ("art")}>Art</button> 
      <div className={styles.content}>
         <h3>AAPI Heritage Month</h3> 
         
          <WinsResources resources={heritageResources}/>
         <h3>Contributions</h3>
          <WinsResources resources={contributionsResources}/>
         <h3>Representation</h3>
          <WinsResources resources={representationResources}/>
         <h3>Cultural Centers</h3>
          <WinsResources resources={culturalResources}/>
          <p id="art"></p>
         <h3>Art</h3>
          <WinsResources resources={artResources}/>
      </div>

    <Footer/>
    </div>

  );
}