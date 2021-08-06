import Head from "next/head";
import Image from "next/image";
import styles from "../styles/About/About.module.scss";
import { Header } from "../components/Layout/Header";
import { Footer } from "../components/Layout/Footer";
import { ProfileContainer } from "../components/About/ProfileContainer";

import waverleyPhoto from "../public/Profile/Waverley-Leung-Profile.jpg";
import emmanuelPhoto from "../public/Profile/Emmanuel-Jose-Profile.jpg";
import sandyPhoto from "../public/Profile/Sandy-Dai-Profile.jpg";
import danielPhoto from "../public/Profile/Daniel-Kwon-Profile.jpg";

import LinkedInIcon from "../public/Profile/LinkedIn.svg";
import TwitterIcon from "../public/Profile/Twitter.svg";
import GitHubIcon from "../public/Profile/GitHub.svg";
import PortfolioIcon from "../public/Profile/Portfolio.svg";

export default function About() {
  return (
    <div>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Learn more about Start Asian Love and the team." />
        <title>Start Asian Love | About</title>

        {/* Favicon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png" />
        <link rel="manifest" href="/favicon_io/site.webmanifest" />

        {/* Open Graph/Facebook */}
        <meta property="og:type" content="website" key="ogtype" />
        <meta property="og:url" content="https://www.startalove.com/" key="ogurl" />
        <meta
          property="og:title"
          content="Start Asian Love— Combat Hate. Choose Love."
          key="ogtitle"
        />
        <meta
          property="og:description"
          content="Learn more about Start Asian Love and the team."
          key="ogdesc"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dpqssv1uu/image/upload/v1621022082/StartAsianLove-og.jpg"
          key="ogimage"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" key="twcard" />
        <meta property="twitter:url" content="https://www.startalove.com/" key="twurl" />
        <meta
          property="twitter:title"
          content="Start Asian Love— Combat Hate. Choose Love."
          key="twtitle"
        />
        <meta
          property="twitter:description"
          content="Learn more about Start Asian Love and the team."
          key="twdesc"
        />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/dpqssv1uu/image/upload/v1621022082/StartAsianLove-og.jpg"
          key="twimage"
        />
      </Head>
      <Header />
      <h1 className="page-heading">Who We Are</h1>
      <div className={styles.description}>
        <p>
          After the increase of attacks on Asian Americans since COVID-19, the Atlanta Spa Shootings
          that occurred on March 16, 2021 and rise of the Stop Asian Hate movement, Waverley Leung
          and Emmanuel Jose came together to work on Start Asian Love as their own way to take
          action. Since the first version of the website, the team has grown to include Sandy Dai
          and Daniel Kwon who bring their own voices and experiences. We hope to continue growing
          Start Asian Love to fight against injustice and for equality.
        </p>
        <p>
          Since the rise of hate crimes and violence during the COVID-19 pandemic, the AAPI
          community has been left grappling with feelings of fear, helplessness, anger, and
          alienation. It's in this climate where we've started to unpack our identity and
          perspectives as Asian Americans while asking hard questions about our place in this
          country: Where are the Asian American figures and stories in American history and culture?
          Are we an invisible race?
        </p>
        <p>
          Start Asian Love was created to be a space where the community can celebrate their
          heritage by learning about prominent AAPI figures and stories. It's a space to connect
          over our shared experiences and make a positive impact by transforming our feelings of
          helplessness and rage into civic engagement and action. Start Asian Love is our platform
          to say we belong here, we're not invisible and to embrace being unapologetically Asian.
        </p>
        <p>
          Icons made by{" "}
          <a
            href="https://www.flaticon.com/authors/dmitri13"
            title="dmitri13"
            target="_blank"
            rel="noopener noreferrer">
            dmitri13
          </a>
          ,{" "}
          <a
            href="https://www.iconfinder.com/zlaten/icon-sets"
            title="Pixel Bazaar"
            target="_blank"
            rel="noopener noreferrer">
            Pixel Bazaar
          </a>
          , and{" "}
          <a
            href="https://www.iconfinder.com/Kalashnyk"
            title="Kalash"
            target="_blank"
            rel="noopener noreferrer">
            Kalash
          </a>{" "}
        </p>
      </div>
      <h3 className={styles.team}>Meet Squad SAL</h3>
      <ProfileContainer profiles={profiles} />
      <div className={styles["profile-container"]}>
        <div className={styles.profile}>
          <h3>Waverley Leung</h3>
          <div className={styles["profile-pic"]}>
            <Image src={waverleyPhoto} alt="Picture of Waverley" />
          </div>
          <p className={styles["profile-quote"]}>
            "Start Asian Love has allowed me to use my new knowledge and skills from transitioning
            into tech to make a meaningful positive impact in the world."
          </p>
          <p>
            Born and raised in NYC, Waverley Leung is a proud "ABC" (American Born Chinese). She has
            a creative background as a dancer and arts administrator, and found a new way to express
            herself through coding. As someone with many interests, she embraces being a beginner
            and is passionate about learning, growth, and collaboration. Through Start Asian Love,
            Waverley hopes to inspire others to unite under a common goal and find ways they can use
            their skills to stand up for their values. In her free time, you can often find Waverley
            exploring culture through food.
          </p>
          <TwitterIcon
            onClick={() => window.open("https://twitter.com/waverley_place", "_blank")}
            className={styles.icon}
          />
          <LinkedInIcon
            onClick={() => window.open("https://www.linkedin.com/in/waverley-leung/", "_blank")}
            className={styles.icon}
          />
          <GitHubIcon
            onClick={() => window.open("https://github.com/wlcreate", "_blank")}
            className={styles.icon}
          />
          <PortfolioIcon
            onClick={() => window.open("https://waverley-leung.com", "_blank")}
            className={styles.icon}
          />
        </div>
        <div className={styles.profile}>
          <h3>Emmanuel Jose</h3>
          <div className={styles["profile-pic"]}>
            <Image
              src={emmanuelPhoto}
              alt="Picture of Emmanuel"
              className={styles["profile-pic"]}
            />
          </div>
          <p className={styles["profile-quote"]}>
            "What does it mean to be unapologetically Asian? Start Asian Love is helping me to
            answer that question as I discover my voice and power as an Asian American."
          </p>
          <p>
            Born in Quezon City in the Philippines, Emmanuel Jose immigrated to the United States at
            the age of 6. Emmanuel is a proud gay Filipino American and artist-turned-coder, with a
            penchant for turning paper into art. He views tech as an exciting, evolving medium full
            of possibility, believes that inaction is not an option, and hopes that Start Asian Love
            becomes a platform for education, expression, and empowerment for all. In his free time,
            Emmanuel can be found with his partner wheeling their two spoiled rescue pups in a
            stroller on the streets of Washington Heights in NYC.
          </p>
          <TwitterIcon
            onClick={() => window.open("https://twitter.com/Emmanuel_Labor", "_blank")}
            className={styles.icon}
          />
          <LinkedInIcon
            onClick={() => window.open("https://www.linkedin.com/in/emmanuelpjose/", "_blank")}
            className={styles.icon}
          />
          <GitHubIcon
            onClick={() => window.open("https://github.com/emjose", "_blank")}
            className={styles.icon}
          />
          <PortfolioIcon
            onClick={() => window.open("https://www.emmanuel-jose.com/", "_blank")}
            className={styles.icon}
          />
        </div>
        <div className={styles.profile}>
          <h3>Sandy Dai</h3>
          <div className={styles["profile-pic"]}>
            <Image src={sandyPhoto} alt="Picture of Sandy" />
          </div>
          <p className={styles["profile-quote"]}>
            "In contributing to Start Asian Love, I, too, can remain in touch with my heritage while
            doing my part as a fellow Asian American to support the community."
          </p>
          <p>
            Sandy Dai is a Chinese-American software developer from NYC. Growing up with immigrant
            parents and spending a majority of her adolescent school years in Manhattan Chinatown
            gave her a personal attachment to her heritage and the lively neighborhood. Amidst the
            rising number of anti-Asian hate crimes reported all over social media, she was
            immediately drawn to Start Asian Love’s initiative and knew she wanted to be a part of
            it. In her free time, you can find Sandy at the latest food spots or exploring the
            coolest attractions NYC always has to offer.
          </p>
          <TwitterIcon
            onClick={() => window.open("https://twitter.com/sandaiiyahh", "_blank")}
            className={styles.icon}
          />
          <LinkedInIcon
            onClick={() => window.open("https://www.linkedin.com/in/sandydaii/", "_blank")}
            className={styles.icon}
          />
          <GitHubIcon
            onClick={() => window.open("https://github.com/sandaiiyahh", "_blank")}
            className={styles.icon}
          />
          <PortfolioIcon
            onClick={() => window.open("https://sandydai.com/", "_blank")}
            className={styles.icon}
          />
        </div>
        <div className={styles.profile}>
          <h3>Daniel Kwon</h3>
          <div className={styles["profile-pic"]}>
            <Image src={danielPhoto} alt="Picture of Daniel" className={styles["profile-pic"]} />
          </div>
          <p className={styles["profile-quote"]}>
            "I joined Start Asian Love to share AAPI stories that engender feelings of positivity
            and belonging in our community—a community that has been made to feel like outsiders in
            our own country for generations."
          </p>
          <p>
            Born in South Korea, Daniel immigrated to the United States at the age of two to Queens,
            New York. Shaped by his upbringing and healthcare background, Daniel views coding as a
            powerful engine for social good and collaboration. Through SAL, Daniel hopes to combat
            AAPI hate through empowerment, education and by reclaiming the narrative around the AAPI
            experience in America. During his free time, you can find Daniel and his fiancée
            strolling through Riverside Park and rock climbing at Steep Rock West.
          </p>
          <TwitterIcon
            onClick={() => window.open("https://twitter.com/dwonkaniel", "_blank")}
            className={styles.icon}
          />
          <LinkedInIcon
            onClick={() => window.open("https://www.linkedin.com/in/danielkwon89/", "_blank")}
            className={styles.icon}
          />
          <GitHubIcon
            onClick={() => window.open("https://github.com/danielkwon89", "_blank")}
            className={styles.icon}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
