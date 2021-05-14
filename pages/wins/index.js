import Head from 'next/head'
import styles from '../../styles/Wins/Wins.module.css';
import { Header } from '../../components/Layout/Header'
import { Footer } from '../../components/Layout/Footer'
import { art as artResources } from '../../database/Wins-separate';
import { heritage as heritageResources } from '../../database/Wins-separate';
import { contributions as contributionsResources } from '../../database/Wins-separate';
import { representation as representationResources } from '../../database/Wins-separate';
import { cultural as culturalResources } from '../../database/Wins-separate';
import { WinsResources } from '../../components/Wins/WinsResources'

import { Link, Element, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export default function Wins() {
  return (
    <div className={styles.container}>
    <Head><title>Start Asian Love</title></Head>
    <Header/>

      {/* divs are outlined for reference in module.css file */}
    
      <div className={styles.main}>
        <h2>Wins</h2>
        <p className={styles.intro}>In light of the anti-Asian hate across America, here are some moments, places, and people in American history to serve as reminders of our resilience and strength, that we belong here, and this is our home. What we have listed is a small piece of the pie, and this is only the beginning.</p> 
      </div>
       <Element name="top"><div className={styles.scrollToSection}>Scroll to Section</div></Element>
        <Link className={styles.scroll} activeClass="active" to="heritage" smooth={true} duration={250} style={{ display: 'inline-block', margin: '10px' }}>
            Heritage
        </Link>
        <Link className={styles.scroll} activeClass="active" to="contributions" smooth={true} duration={250} style={{ display: 'inline-block', margin: '10px' }}>
            Contributions
        </Link>
        <Link className={styles.scroll} activeClass="active" to="representation" smooth={true} duration={250} style={{ display: 'inline-block', margin: '10px' }}>
            Representation
        </Link>
        <Link className={styles.scroll} activeClass="active" to="art" smooth={true} duration={250} style={{ display: 'inline-block', margin: '10px' }}>
            Art
        </Link>
        <Link className={styles.scroll} activeClass="active" to="cultural" smooth={true} duration={250} style={{ display: 'inline-block', margin: '10px' }}>
            Cultural
        </Link>
        
      {/* The margins for the first four 'scroll to top' links have been reduced to 10px, except for the fifth one that is above the footer. */}
      <div className={styles.content}>
        
        <div className={styles["wins-section"]}>
         <Element name="heritage"><h3>AAPI Heritage Month</h3></Element>
         <p className={styles.description}>The history of Asian Americans is largely undertaught and unknown in the United States, and Asian immigrants even predate the country itself. Unfortunately, the deadly March 16th Atlanta spa shootings is only the latest mark of a long, untold history of anti-Asian hate and violence.</p> 
         <p className={styles.description}>We can begin to advance towards a better future for all by educating ourselves about the Asian American experience and history, which are marked by pain, resilience, and hope.</p>
          <WinsResources resources={heritageResources} category="heritage"/>
          <Link className={styles.scrollToTop} activeClass="active" to="top" smooth={true} duration={250} style={{ display: 'inline-block', margin: '10px' }}>
            Scroll to Top
        </Link>
        </div>

         <div className={styles["wins-section"]}>
         <Element name="contributions"><h3>Contributions</h3></Element>
         <p className={styles.description}>While immigrants and Americans with ancestral ties to Asia have made profound contributions to the United States and the World across all fields, there are many who have received little to no recognition.</p>
         <p className={styles.description}>We have begun featuring AAPI individuals who have shaped our world in a myriad of ways, and we aim to highlight many more individuals whose stories should be told.</p>
          <WinsResources resources={contributionsResources} category="contributions"/>
          <Link className={styles.scrollToTop} activeClass="active" to="top" smooth={true} duration={250} style={{ display: 'inline-block', margin: '10px' }}>
            Scroll to Top
        </Link>
        </div>

         <div className={styles["wins-section"]}>
           <Element name="representation"><h3>Representation</h3></Element>
           <p className={styles.description}>Representation Matters. With identity, it's hard to be what you can't see. It's hard to be what you don't know about.</p>
           <p className={styles.description}> Asians have long been marginalized, stereotyped, and made into caricatures in American media. Here, we will celebrate Asians who are pioneers, who show what is possible, and who show what it means to be Asian.</p>
          <WinsResources resources={representationResources} category="representation"/>
          <Link className={styles.scrollToTop} activeClass="active" to="top" smooth={true} duration={250} style={{ display: 'inline-block', margin: '10px' }}>
            Scroll to Top
        </Link>
        </div>

        <div className={styles["wins-section"]}>
          <Element name="art"><h3>Art</h3></Element>
          <p className={styles.description}>Art history has long been too white, too male, and too Western-centric. As more artists of color and artists from underrepresented backgrounds gain recognition, we are eager to feature innovative, groundbreaking Asian artists, and spotlight platforms that amplify the expression and voices of all Asian artists.</p>
          <WinsResources resources={artResources} category="art"/>
          <Link className={styles.scrollToTop} activeClass="active" to="top" smooth={true} duration={250} style={{ display: 'inline-block', margin: '10px' }}>
            Scroll to Top
        </Link>
        </div>

        <div className={styles["wins-section"]}>
          <Element name="cultural"><h3>Cultural Centers</h3></Element>
          <p className={styles.description}>With a growing global interest on Eastern art and culture, here are American institutions that preserve and celebrate Asian art, cultures, and perspectives.</p>
          <p className={styles.description}>In the wake of the COVID-19 pandemic, many of these institutions are reopening and offer immersive virtual and onsite experiences for guests.</p>
          <WinsResources resources={culturalResources} category="cultural"/>
          <Link className={styles.scrollToTop} activeClass="active" to="top" smooth={true} duration={250} style={{ display: 'inline-block', margin: '30px' }}>
            Scroll to Top
        </Link>
        </div>

      </div>
    <Footer/>
    </div>

  );
}