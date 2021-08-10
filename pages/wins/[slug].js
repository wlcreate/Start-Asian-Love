import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Wins/WinsID.module.scss";
import { Header } from "../../components/Layout/Header";
import { Footer } from "../../components/Layout/Footer";
import { urlFor, sanityClient, usePreviewSubscription, PortableText } from "../../lib/sanity";

const winQuery = `*[_type == "wins" && $slug == _id][0] {
  _id,
  category,
  content,
  field,
  image,
  title,
  url,
  location
}`;

export default function Win({ data, preview }) {
  const { data: win } = usePreviewSubscription(winQuery, {
    params: { slug: data?.win._id },
    initialData: data,
    enabled: preview,
  });

  return (
    <div>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={`Read for more information about ${win.title}`} />
        <title>Start Asian Love | {win.title}</title>

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
          content={`Read for more information about ${win.title}`}
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
          content={`Read for more information about ${win.title}`}
          key="twdesc"
        />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/dpqssv1uu/image/upload/v1621022082/StartAsianLove-og.jpg"
          key="twimage"
        />
      </Head>
      <Header />
      <h2 className={"page-heading"}>{win.title}</h2>

      <div className={styles.container}>
        {!urlFor(win.image).url() ? (
          <></>
        ) : (
          <Image
            src={urlFor(win.image).url()}
            alt={`Image of ${win.title}`}
            loading="lazy"
            width={616}
            height={462}
            layout="responsive"
          />
        )}
        <PortableText blocks={win.content} />
        <a href={win.url} target="_blank" rel="noopener noreferrer">
          Discover more about {win.title}
        </a>
      </div>

      <Link href="/wins" scroll={false}>
        <a className={styles.backToWins}>Back To Wins</a>
      </Link>
      <Footer />
    </div>
  );
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(
    `*[_type == "wins" && defined(_id)]{
      "params": {
        "slug": _id
      }
    }`,
  );
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const win = await sanityClient.fetch(winQuery, { slug });
  return { props: { data: { win }, preview: true } };
}
