import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Header } from '../components/Header'
import Carousel from '../components/Carousel.js'
import VideoPlayer from '../components/VideoPlayer.js'
import { Footer } from '../components/Footer'
import Link from 'next/link';

export default function Home() {
  return (
    <div>

      {/* Adding title! https://nextjs.org/docs/api-reference/next/head */}
      <Head><title>Start Asian Love</title></Head>

        <Header/>
        <Carousel/>
        <div className={styles.content}>
          <p>
            Since the beginning of the pandemic there has been an increase in the number of hate incidents and crimes against Asian Americans. While some have been prosecuted as hate crimes, others have not because it’s hard to prove racist intent. Then there are incidents that have not resulted in official charges at all, such as verbal harassment or coughing/spitting.
          </p>
          <h2>
            3,795
          </h2>
          <p>
            That’s the number of incidents received by the Stop AAPI Hate reporting center from March 19, 2020 to February 28, 2021. Unfortunately, it’s not all. The group notes in their report that this number represents “only a fraction of the number of hate incidents that actually occur”, with the <b><a href="https://stopaapihate.org/2020-2021-national-report/" target="_blank" rel="noopener noreferrer">
               full report
            </a></b> showing “how vulnerable Asian Americans are to discrimination, and the types of discrimination they face”.
          </p>
        </div>

          {/* Testing to see if the video player and/or checkout text should be in the middle, beginning, or end of the content text */}
          <VideoPlayer />

          <Link href='/news/1' passHref>
            <div className={styles.checkout}>Check out the latest news</div>
          </Link>

        <div className={styles.content}>
          <h2>
            149%
          </h2>
          <p>
            That’s the surge of anti-Asian hate crimes from 2019 compared to 2020 as reported by The Center for the Study of Hate and Extremism at California State University. The <b><a href="https://www.csusb.edu/sites/default/files/FACT%20SHEET-%20Anti-Asian%20Hate%202020%203.2.21.pdf" target="_blank" rel="noopener noreferrer">
               report
            </a></b> also pinpoints the first spike “occurring in March and April amidst a rise in COVID cases and negative stereotyping of Asians relating to the pandemic”. This increase happened while overall hate crimes dropped by 7%.
          </p>
          <p>
            That said, Asian racism and hate is nothing new. It can be traced back to the <span>Chinese Exclusion Act of 1882</span>, which was the first law that restricted immigrants of a specific ethnic group, and seen throughout history all the way to the Atlanta spa shootings that occurred March 16, 2021. Everyday we can expect to wake up to a new report about another incident, and they aren’t stopping.
          </p>
          <p>
            <span>Start Asian Love</span> is a safe space that educates and consolidates resources related to Asian racism, Asian American history, and the Stop Asian Hate movement. Through these resources we hope to raise awareness and encourage you to join the fight and support Asian Americans.
          </p>
        </div>
        
        <Link href='/news/1' passHref>
          <div className={styles.checkout}>Check out the latest news</div>
        </Link>

        <Footer/>
    </div>
    
  )
}