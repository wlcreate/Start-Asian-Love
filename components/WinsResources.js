import styles from '../styles/WinsResources.module.css';
import Link from 'next/link';

export const WinsResources = (props) => {

let {resources, category} = props
console.log(category)
    return (
        <div className='page-container'>
            {/* <p>I am the Resources Component.</p> */}
            <div className={styles.main}>
            {resources.map((resource) =>{
                    return <div className={styles.card} key={resource.id}>
                        {/* <div onClick={() => window.open(resource.url,'_blank')}> */}
                            <Link href={`/wins/${category}/${resource.id}`}><div>
                                {/* <Link href={`/blog/${encodeURIComponent(post.slug)}`}></Link> */}
                                {/* href='/coin/[id]' as={`/coin/${id}`} */}
                            <img className={styles.portrait} src={resource.portrait} alt="resource title"/>
                            <div className={styles.titlebox}><h2>{resource.title}</h2></div>
                            <p className={styles.cardtext}>
                                {resource.location
                                ?
                                <p>{resource.location}</p>
                                :
                                <></>}
                            <p className={styles.content}>{resource.content}</p>
                            <div className={styles.cardbottom}>
                                {resource.field
                                ?
                                <div><p>{resource.field}</p></div>
                                // &nbsp;&nbsp;&nbsp;&nbsp;
                                // <div><p>{resource.category[1]}</p></div>
                                :
                                <></>
                                }
                            </div>
                            </p>
                        </div></Link>
                    </div>
                })}
            </div>
            <br/>
        </div>
    )
}