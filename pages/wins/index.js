import Head from 'next/head'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import styles from '../styles/Wins.module.css';
import { art as artResources } from '../Wins-separate.js';
import { heritage as heritageResources } from '../Wins-separate.js';
import { contributions as contributionsResources } from '../Wins-separate.js';
import { representation as representationResources } from '../Wins-separate.js';
import { cultural as culturalResources } from '../Wins-separate.js';
import {WinsResources} from '../components/WinsResources'

import { Link, Element, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export default function Wins() {
  // console.log(artResources)
  return (
    <div className={styles.container}>
    <Head><title>Start Asian Love</title></Head>
    <Header/>

      {/* divs are outlined for reference in module.css file */}
    
      <div className={styles.main}>
        <h2>I am the Wins Page</h2>
      </div>
       <Element name="top"><div>Scroll to Section</div></Element>
        <Link className={styles.scroll} activeClass="active" to="heritage" smooth={true} duration={250} style={{ display: 'inline-block', margin: '40px' }}>
            Heritage
        </Link>
        <Link className={styles.scroll} activeClass="active" to="contributions" smooth={true} duration={250} style={{ display: 'inline-block', margin: '40px' }}>
            Contributions
        </Link>
        <Link className={styles.scroll} activeClass="active" to="representation" smooth={true} duration={250} style={{ display: 'inline-block', margin: '40px' }}>
            Representation
        </Link>
        <Link className={styles.scroll} activeClass="active" to="art" smooth={true} duration={250} style={{ display: 'inline-block', margin: '40px' }}>
            Art
        </Link>
        <Link className={styles.scroll} activeClass="active" to="cultural" smooth={true} duration={250} style={{ display: 'inline-block', margin: '40px' }}>
            Cultural
        </Link>
        
        
      <div className={styles.content}>
        
        <div className={styles["wins-section"]}>
         <Element name="heritage"><h3>AAPI Heritage Month</h3></Element>
          <WinsResources resources={heritageResources} category="heritage"/>
          <Link className={styles.scroll} activeClass="active" to="top" smooth={true} duration={250} style={{ display: 'inline-block', margin: '40px' }}>
            Scroll to Top
        </Link>
        </div>

         <div className={styles["wins-section"]}>
         <Element name="contributions"><h3>Contributions</h3></Element>
          <WinsResources resources={contributionsResources} category="contributions"/>
          <Link className={styles.scroll} activeClass="active" to="top" smooth={true} duration={250} style={{ display: 'inline-block', margin: '40px' }}>
            Scroll to Top
        </Link>
        </div>

         <div className={styles["wins-section"]}>
           <Element name="representation"><h3>Representation</h3></Element>
          <WinsResources resources={representationResources} category="representation"/>
          <Link className={styles.scroll} activeClass="active" to="top" smooth={true} duration={250} style={{ display: 'inline-block', margin: '40px' }}>
            Scroll to Top
        </Link>
        </div>

        <div className={styles["wins-section"]}>
          <Element name="art"><h3>Art</h3></Element>
          <WinsResources resources={artResources} category="art"/>
          <Link className={styles.scroll} activeClass="active" to="top" smooth={true} duration={250} style={{ display: 'inline-block', margin: '40px' }}>
            Scroll to Top
        </Link>
        </div>

        <div className={styles["wins-section"]}>
          <Element name="cultural"><h3>Cultural Centers</h3></Element>
          <WinsResources resources={culturalResources} category="cultural"/>
          <Link className={styles.scroll} activeClass="active" to="top" smooth={true} duration={250} style={{ display: 'inline-block', margin: '40px' }}>
            Scroll to Top
        </Link>
        </div>
         
      </div>
{/* Commenting out footer for now */}
    <Footer/>
    </div>

  );
}