import styles from '../../styles/News.module.css';
import { useRouter } from 'next/router';
import { Header } from '../../components/Header'

export const News = ({ pageNumber, articles }) => {

    const router = useRouter();

    return (
        <div className='page-container'>
            <Header />
            <div className={styles.main}>
                {articles.map((article, index) => (
                    <div onClick={() => window.open(article.url,'_blank')} key={index} className={styles.post}>
                        {!!article.urlToImage && <img src={article.urlToImage} alt='news article image' />}
                        <h1>{article.title}</h1>
                        <p>{article.description}</p>
                    </div>
                ))}
            </div>

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
    );
};

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

    const apiResponse = await fetch(
        `https://newsapi.org/v2/everything?q="stopasianhate"&pageSize=9&page=${pageNumber}`,
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