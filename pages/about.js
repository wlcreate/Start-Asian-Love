import Head from "next/head";
import styles from "../styles/About/About.module.scss";
import { Header } from "../components/Layout/Header";
import { Footer } from "../components/Layout/Footer";
import { ProfileContainer } from "../components/About/ProfileContainer";
import { sanityClient } from "../lib/sanity";

const profilesQuery = `*[_type == "teamMember"]{
  _id,
  name,
  quote,
  social,
  image,
  bio
}`;

export default function About({ profiles }) {
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
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const profiles = await sanityClient.fetch(profilesQuery);
  return {
    props: { profiles },
  };
}
