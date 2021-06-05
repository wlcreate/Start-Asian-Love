import Head from "next/head";
import { useRef } from "react";
import styles from "../../styles/Wins/Wins.module.css";

import { Header } from "../../components/Layout/Header";
import { Footer } from "../../components/Layout/Footer";
import { WinsResources } from "../../components/Wins/WinsResources";

import { art as artResources } from "../../database/Wins-separate";
import { heritage as heritageResources } from "../../database/Wins-separate";
import { contributions as contributionsResources } from "../../database/Wins-separate";
import { representation as representationResources } from "../../database/Wins-separate";
import { cultural as culturalResources } from "../../database/Wins-separate";

export default function Wins() {
  const HeritageRef = useRef(null);
  const ArtRef = useRef(null);
  const RepresentationRef = useRef(null);
  const ContributionsRef = useRef(null);
  const CulturalRef = useRef(null);

  const gotoHeritage = () => {
    window.scrollTo({
      top: HeritageRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  const gotoArt = () => {
    window.scrollTo({
      top: ArtRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  const gotoRepresentation = () => {
    window.scrollTo({
      top: RepresentationRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  const gotoContributions = () => {
    window.scrollTo({
      top: ContributionsRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  const gotoCultural = () => {
    window.scrollTo({
      top: CulturalRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="A reminder of Asian American moments, places, and people to honor and celebrate."
        />
        <title>Start Asian Love | Wins</title>

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
          content="A reminder of Asian American moments, places, and people to honor and celebrate."
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
          content="A reminder of Asian American moments, places, and people to honor and celebrate."
          key="twdesc"
        />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/dpqssv1uu/image/upload/v1621022082/StartAsianLove-og.jpg"
          key="twimage"
        />
      </Head>
      <Header />

      <h2 className={"page-heading"}>Wins</h2>

      <div className={styles.description}>
        <p>
          In light of the anti-Asian hate across America, here are some moments, places, and people
          in American history to serve as reminders of our resilience and strength, that we belong
          here, and this is our home. What we have listed is a small portion compared to the many,
          however this is only the beginning.
        </p>
      </div>

      <div className={styles["scroll-to-section"]}>
        <h3>Scroll to Section</h3>
        <button onClick={gotoHeritage}>Heritage</button>
        <button onClick={gotoContributions}>Contributions</button>
        <button onClick={gotoRepresentation}>Representation</button>
        <button onClick={gotoArt}>Art</button>
        <button onClick={gotoCultural}>Cultural</button>
      </div>

      {/* The margins for the first four 'scroll to top' links have been reduced to 10px, except for the fifth one that is above the footer. */}

      <div className={styles["wins-section"]} ref={HeritageRef}>
        <h3>AAPI Heritage Month</h3>
        <p>
          The history of Asian Americans is largely under taught and unknown in the United States,
          and Asian immigrants even predate the country itself. Unfortunately, the deadly March 16th
          Atlanta spa shootings is only the latest mark of a long, untold history of anti-Asian hate
          and violence.
        </p>
        <p>
          We can begin to advance towards a better future for all by educating ourselves about the
          Asian American experience and history, which are marked by pain, resilience, and hope.
        </p>
        <WinsResources resources={heritageResources} category="heritage" />
      </div>

      <div className={styles["wins-section"]} ref={ContributionsRef}>
        <h3>Contributions</h3>
        <p>
          While immigrants and Americans with ancestral ties to Asia have made profound
          contributions to the United States and the World across all fields, there are many who
          have received little to no recognition.
        </p>
        <p>
          We have begun featuring AAPI individuals who have shaped our world in a myriad of ways,
          and we aim to highlight many more individuals whose stories should be told.
        </p>
        <WinsResources resources={contributionsResources} category="contributions" />
      </div>

      <div className={styles["wins-section"]} ref={RepresentationRef}>
        <h3>Representation</h3>
        <p>
          Representation Matters. With identity, it's hard to be what you can't see. It's hard to be
          what you don't know about.
        </p>
        <p>
          Asians have long been marginalized, stereotyped, and made into caricatures in American
          media. Here, we will celebrate Asians who are pioneers, who show what is possible, and who
          show what it means to be Asian.
        </p>
        <WinsResources resources={representationResources} category="representation" />
      </div>

      <div className={styles["wins-section"]} ref={ArtRef}>
        <h3>Art</h3>
        <p>
          Art history has long been too white, too male, and too Western-centric. As more artists of
          color and artists from underrepresented backgrounds gain recognition, we are eager to
          feature innovative, groundbreaking Asian artists, and spotlight platforms that amplify the
          expression and voices of all Asian artists.
        </p>
        <WinsResources resources={artResources} category="art" />
      </div>

      <div className={styles["wins-section"]} ref={CulturalRef}>
        <h3>Cultural Centers</h3>
        <p>
          With a growing global interest on Eastern art and culture, here are American institutions
          that preserve and celebrate Asian art, cultures, and perspectives.
        </p>
        <p>
          In the wake of the COVID-19 pandemic, many of these institutions are reopening and offer
          immersive virtual and onsite experiences for guests.
        </p>
        <WinsResources resources={culturalResources} category="cultural" />
      </div>

      <Footer />
    </div>
  );
}
