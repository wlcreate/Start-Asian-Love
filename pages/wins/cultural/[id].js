import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../../../styles/Wins/WinsID.module.css";
import { Header } from "../../../components/Layout/Header";
import { Footer } from "../../../components/Layout/Footer";
import { cultural as culturalResources } from "../../../database/Wins-separate.js";

const Cultural = (props) => {
  const { title, image, content, url, location } = props.foundCultural;

  return (
    <div>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={`Read for more information about ${title}`} />
        <title>Start Asian Love | {title}</title>

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
          content={`Read for more information about ${title}`}
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
          content={`Read for more information about ${title}`}
          key="twdesc"
        />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/dpqssv1uu/image/upload/v1621022082/StartAsianLove-og.jpg"
          key="twimage"
        />
      </Head>
      <Header />
      <div>
        <h1 className={"page-heading"}>{title}</h1>

        <div className={styles.container}>
          <Image
            src={image}
            alt={`Image of ${title}`}
            loading="lazy"
            width={616}
            height={462}
            layout="responsive"
          />
          <p>{content}</p>
          <a href={url} target="_blank" rel="noopener noreferrer">
            Discover more about {title}
          </a>
        </div>

        <Link href="/wins" scroll={false}>
          <a className={styles.backToWins}>Back To Wins</a>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

Cultural.getInitialProps = ({ query }) => {
  let foundCultural = culturalResources.find((resource) => {
    return resource.id === parseInt(query.id);
  });

  return {
    foundCultural,
  };
};

export default Cultural;
