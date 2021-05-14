import Head from 'next/head'
// import Link from 'next/link';
import styles from '../styles/Home/Home.module.css'
import { Header } from '../components/Layout/Header'
import { Footer } from '../components/Layout/Footer'
import Carousel from '../components/Carousel.js'
import VideoPlayer from '../components/Home/VideoPlayer.js'

export default function Home() {
  return (
    <div>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="We are a safe space that educates and consolidates resources related to Asian racism, Asian American history, and the Stop Asian Hate movement." />
        <title>Start Asian Love— Combat Hate. Choose Love.</title>

        {/* Favicon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png" />
        <link rel="manifest" href="/favicon_io/site.webmanifest" />

        {/* Open Graph/Facebook */}
        <meta property="og:type" content="website" key="ogtype" />
        <meta property="og:url" content="https://start-asian-love.vercel.app/" key="ogurl" />
        <meta property="og:title" content="Start Asian Love— Combat Hate. Choose Love." key="ogtitle" />
        <meta property="og:description" content="We are a safe space that educates and consolidates resources related to Asian racism, Asian American history, and the Stop Asian Hate movement." key="ogdesc" />
        <meta property="og:image" content="https://res.cloudinary.com/dpqssv1uu/image/upload/v1621022082/StartAsianLove-og.jpg" key="ogimage" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" key="twcard" />
        <meta property="twitter:url" content="https://metatags.io/" key="twurl" />
        <meta property="twitter:title" content="Start Asian Love— Combat Hate. Choose Love." key="twtitle" />
        <meta property="twitter:description" content="We are a safe space that educates and consolidates resources related to Asian racism, Asian American history, and the Stop Asian Hate movement." key="twdesc" />
        <meta property="twitter:image" content="https://res.cloudinary.com/dpqssv1uu/image/upload/v1621022082/StartAsianLove-og.jpg" key="twimage" />
      </Head>

        <Header/>
        {/* <Carousel/> */}
        <img className={styles.hero} src="SAL Updated Hero.jpg" alt="Start Asian Love"></img>

        <div className={styles.content}>

          <div className={styles.text}>
            <p>
              <span>Start Asian Love</span> is a safe space that educates and consolidates resources related to Asian racism, Asian American history, and the Stop Asian Hate movement. Through these resources we hope to raise awareness and encourage you to join the fight and support Asian Americans.
            </p>
          </div>
            
            <VideoPlayer />

            {/* <Link href='/news/1' passHref>
              <div className={styles.checkout}>Check out the latest news</div>
            </Link> */}

          <div className={styles.text}>
            Since the beginning of the pandemic there has been an increase in the number of hate incidents and crimes against Asian Americans. While some have been prosecuted as hate crimes, others have not because it’s hard to prove racist intent. Then there are incidents that have not resulted in official charges at all, such as verbal harassment or coughing/spitting.
          </div>

          {/* The factcontainer div wraps around the two fact divs and are side by side: https://smolcss.dev/ */}

          <div className={styles.factcontainer}>
            <div className={styles.facts}>
              <h2>
                3,795
              </h2>
              <p>
                That’s the number of incidents received by the Stop AAPI Hate reporting center from March 19, 2020 to February 28, 2021.
                </p>
                <p> Unfortunately, it’s not all. The group notes in their report that this number represents “only a fraction of the number of hate incidents that actually occur”, with the <b><span><a href="https://stopaapihate.org/2020-2021-national-report/" target="_blank" rel="noopener noreferrer">
                  full report
                </a></span></b> showing “how vulnerable Asian Americans are to discrimination, and the types of discrimination they face”.
              </p>
            </div>

            <div className={styles.facts}>
              <h2>
                149%
              </h2>
              <p>
                That’s the surge of anti-Asian hate crimes from 2019 compared to 2020 as reported by The Center for the Study of Hate and Extremism at California State University.
                </p> 
                <p>The <b><span><a href="https://www.csusb.edu/sites/default/files/FACT%20SHEET-%20Anti-Asian%20Hate%202020%203.2.21.pdf" target="_blank" rel="noopener noreferrer">
                  report
                </a></span></b> also pinpoints the first spike “occurring in March and April amidst a rise in COVID cases and negative stereotyping of Asians relating to the pandemic”. This increase happened while overall hate crimes dropped by 7%.
              </p>
            </div>
          </div>

          {/* First row of graphics */}
          <div className={styles.graphicContainer}>
            <div className={styles.graphic}><img src="/Graphics/graphic07.jpg" alt=""></img></div>
            <div className={styles.graphic}><img src="/Graphics/graphic01.jpg" alt=""></img></div>
            <div className={styles.graphic}><img src="/Graphics/graphic03.jpg" alt=""></img></div>
            <div className={styles.graphic}><img src="/Graphics/graphic08.jpg" alt=""></img></div>
          </div>
          
          {/* <div className={styles.container}><Carousel/></div> */}

          <div className={styles.text}>
            <p>
              So what can we do? Anti-Asian hate won't disappear overnight, and neither will racism as a whole. But what we can do is support, learn, and celebrate each other for our differences and similarities. Know that you are not alone and that by consciously making the choice to choose love instead of hate you are helping combat hate.
            </p>
            
          </div>

          {/* Second row of graphics */}
          <div className={styles.graphicContainerTwo}>
            <div className={styles.graphic}><img src="/Graphics/graphic04.jpg" alt=""></img></div>
            <div className={styles.graphic}><img src="/Graphics/graphic05.jpg" alt=""></img></div>
            <div className={styles.graphic}><img src="/Graphics/graphic09.jpg" alt=""></img></div>
            <div className={styles.graphic}><img src="/Graphics/graphic11.jpg" alt=""></img></div>
          </div>

          {/* <div className={styles.text}>
            {/* <p>
              Asian racism and hate is nothing new. It can be traced back to the <span><a href="https://www.history.com/topics/immigration/chinese-exclusion-act-1882" target="-blank" rel="noopener noreferrer">Chinese Exclusion Act of 1882</a></span>, which was the first law that restricted immigrants of a specific ethnic group, and seen throughout history all the way to the Atlanta spa shootings that occurred March 16, 2021. Everyday we can expect to wake up to a new report about another incident, and they aren’t stopping.
            </p>
          </div> */}

        </div>

        <Footer/>
    </div>
    
  )
}

// • Each paragraph is for now wrapped in their own divs to experiment with arrangement and display of text.