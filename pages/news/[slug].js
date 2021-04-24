import styles from '../../styles/News.module.css';
import { useRouter } from 'next/router';
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'


// • News code was adapted from the Next.js news site tutorial: https://youtu.be/xtItzwYG6oQ

// • "Slug" is the unique identifying part of a web address, usually the endpoint: https://developer.mozilla.org/en-US/docs/Glossary/Slug

// • The YouTube instructor for the news tutorial uses "window.open" (Line 34) for the onClick action, and the target "blank" has to be used as one of two arguments when a window location is used: https://stackoverflow.com/questions/18476373/how-to-add-target-blank-to-javascript-window-location

// • I temporarily commented out the article description since it looks a little cluttered under the headline title.

// • For now, I repeated "{styles.container}" for lines 25 and 28 in so that the dashed outline page title is consistent with other page titles.

// • Since the news grid is not a component like the grids in the support and wins pages, the div hierarchy is slightly different to render consistent styling.


export const News = ({ pageNumber, articles }) => {

    const router = useRouter();

    return (
        <div className={styles.container}>
        <Header/>

            <div className={styles.container}>
                <h2>The Latest News</h2>
            </div>
            <div className='page-container'>
                <div className={styles.main}>
                    {articles.map((article, index) => (
                        <div onClick={() => window.open(article.url,'_blank')} key={index} className={styles.post}>
                            {!!article.urlToImage && <img src={article.urlToImage} alt='news article image' />}
                            <h1>{article.title}</h1>
                            {/* <p>{article.description}</p> */}
                        </div>
                    ))}
                </div>

                {/* Paginator currently loads 10 pages, can be modified. */}

                <div className={styles.paginator}>
                    <div 
                        onClick={() => {
                            if (pageNumber > 1) {
                                router.push(`/news/${pageNumber - 1}`).then(() => window.scrollTo(0, 0));
                            };
                        }}
                        className={pageNumber === 1 ? styles.disabled : styles.active}>Previous
                    </div>

                    <div>Page {pageNumber}</div>

                    <div 
                        onClick={() => {
                            if (pageNumber < 10) {
                                router.push(`/news/${pageNumber + 1}`).then(() => window.scrollTo(0, 0));
                            };
                        }}
                        className={pageNumber === 10 ? styles.disabled : styles.active}>Next
                    </div>

                </div>
            </div>

            <Footer/>
        </div>
    );
};

// • Currently trying to figure out how to use getServerSideProps as a news "pseudo-component" that can go below the video player in the home page.

// • From Next.js documentation: Data fetching / getServerSideProps can only be exported from a page, not a component: https://nextjs.org/docs/basic-features/data-fetching#only-allowed-in-a-page-2


export const getServerSideProps = async pageContext => {
    const pageNumber = pageContext.query.slug;

    if (!pageNumber || pageNumber < 1 || pageNumber > 10) {
        return {
            props: {
                articles: [],
                pageNumber: 1,
            }
        }
    }

// • The fetch request is using the phrase query of "stop asian hate," which brought back more relevant articles than the query keywords of 'asian,' 'race,' and 'racism' used together. Initially, there were some non-English articles, and then I set language to "en."

// • https://newsapi.org/docs/endpoints/everything

// • For the current 3x3 grid display, pageSize is set to 9.

// • When I first created the .env file and added it to the gitignore file in this sub-branch, it appeared in the commit for some reason:

    // Solution to hide the .env file: https://stackoverflow.com/questions/38983153/git-ignore-env-files-not-working
        // git rm .env --cached
        // git commit -m "Stopped tracking .env File"

    const apiResponse = await fetch(
        `https://newsapi.org/v2/everything?q="stopasianhate"&language=en&pageSize=9&page=${pageNumber}`,
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

}

export default News;