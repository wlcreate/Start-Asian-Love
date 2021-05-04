import styles from '../styles/WinsResources.module.css';
import Link from 'next/link';

export const WinsResources = (props) => {

let {resources, category} = props

    return (
        <div className='page-container'>
            <div className={styles.main}>
            {resources.map((resource) =>{
                    return <div className={styles.card} key={resource.id}>
                            <Link href={`/wins/${category}/${resource.id}`}>
                                <div>
                                    <img className={styles.portrait} src={resource.portrait} alt="resource title"/>
                                    <div className={styles.titlebox}><h2>{resource.title}</h2></div>
                                    <p className={styles.cardtext}>
                                        <p className={styles.content}>{resource.content}</p>
                                        <span>Learn more</span>
                                    </p>
                                </div>
                            </Link>
                    </div>
                })}
            </div>
            <br/>
        </div>
    )
}

// • Similar to the news page, the hover action triggers the card to expand, with a call to action (Learn more in Line 27) to prompt the user to read/visit the ID page.

// • Ternaries for location and field attributes are commented out for consistent card display in Wins page.