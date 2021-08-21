import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../../styles/News/page/News.module.scss";

// • News code was adapted from the Next.js news site tutorial: https://youtu.be/xtItzwYG6oQ

// • "Slug" is the unique identifying part of a web address, usually the endpoint: https://developer.mozilla.org/en-US/docs/Glossary/Slug

// • The YouTube instructor for the news tutorial uses "window.open" (Line 34) for the onClick action, and the target "blank" has to be used as one of two arguments when a window location is used: https://stackoverflow.com/questions/18476373/how-to-add-target-blank-to-javascript-window-location

// • Testing to see if news images should/should not go to edges of cards. For now, I used object-fit css class for images, and line-clamping css properties to only show the first 3 lines of article content.

export const News = ({ pageNumber, articles }) => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="The latest news on Asian racism, Asian American history, and the Stop Asian Hate movement."
        />
        <title>Start Asian Love | News</title>

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
          content="The latest news on Asian racism, Asian American history, and the Stop Asian Hate movement."
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
          content="The latest news on Asian racism, Asian American history, and the Stop Asian Hate movement."
          key="twdesc"
        />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/dpqssv1uu/image/upload/v1621022082/StartAsianLove-og.jpg"
          key="twimage"
        />
      </Head>

      <h1 className={"page-heading"}>The Latest News</h1>

      <div className={styles["articles-container-wrapper"]}>
        <div className={styles["articles-container"]}>
          {articles.map((article, index) => (
            <div
              onClick={() => window.open(article.url, "_blank")}
              key={index}
              className={styles.article}>
              {!!article.urlToImage && (
                <img src={article.urlToImage} alt="news article image" loading="lazy" />
              )}
              <h3>{article.title}</h3>
              <p id={styles["article-description"]}>{article.description}</p>
              <p id={styles["article-cta"]}>Read more</p>
            </div>
          ))}
        </div>
      </div>

      {/* Paginator currently loads 10 pages, can be modified. */}

      <div className={styles.paginator}>
        <div
          onClick={() => {
            if (pageNumber > 1) {
              router.push(`/news/${pageNumber - 1}`).then(() => window.scrollTo(0, 0));
            }
          }}
          className={pageNumber === 1 ? styles.disabled : styles.active}>
          Previous
        </div>

        <div>Page {pageNumber}</div>

        <div
          onClick={() => {
            if (pageNumber < 10) {
              router.push(`/news/${pageNumber + 1}`).then(() => window.scrollTo(0, 0));
            }
          }}
          className={pageNumber === 10 ? styles.disabled : styles.active}>
          Next
        </div>
      </div>
    </div>
  );
};

// • Currently trying to figure out how to use getServerSideProps as a news "pseudo-component" that can go below the video player in the home page.

// • From Next.js documentation: Data fetching / getServerSideProps can only be exported from a page, not a component: https://nextjs.org/docs/basic-features/data-fetching#only-allowed-in-a-page-2

export const getServerSideProps = async (pageContext) => {
  const pageNumber = pageContext.query.slug;

  if (!pageNumber || pageNumber < 1 || pageNumber > 10) {
    return {
      props: {
        articles: [],
        pageNumber: 1,
      },
    };
  }

  // • The fetch request is using the phrase query of "stop asian hate," which brought back more relevant articles. Initially, there were some non-English articles, and then I set language to "en." UPDATE: added second query of "asians" and changed the sortBy attribute from "relevancy" to "publishedAt" for more current chronology. Some domains excluded for headline length, content, lack of images or lack of relevancy.

  // • https://newsapi.org/docs/endpoints/everything

  // • When I first created the .env file and added it to the gitignore file in this sub-branch, it appeared in the commit for some reason:

  // Solution to hide the .env file: https://stackoverflow.com/questions/38983153/git-ignore-env-files-not-working
  // git rm .env --cached
  // git commit -m "Stopped tracking .env File"

  const apiResponse = await fetch(
    `https://newsapi.org/v2/everything?&q=(asian AND asian racism)&language=en&excludeDomains=propublica.org,freerepublic.com,boyculture.com,thesocietypages.org,people.cn,pjmedia.com,greenspun.com&sortBy=publishedAt&pageSize=12&page=${pageNumber}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
      },
    },
  );

  const apiJson = await apiResponse.json();

  const { articles } = apiJson;

  return {
    props: {
      articles,
      pageNumber: Number.parseInt(pageNumber),
    },
  };
};

export default News;
