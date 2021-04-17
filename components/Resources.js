import styles from '../styles/Resources.module.css';

export const Resources = ({resourcesList}) => {

    return (
        <div className='page-container'>
            {/* <p>I am the Resources Component.</p> */}
            <div className={styles.main}>
            {
                resourcesList.length > 0
                ?
                resourcesList.map((resource) =>{
                    return <div className={styles.card} key={resource.id}>
                        <div>
                            <img className={styles.image} src={resource.image} alt="resource title"/>
                            <h2>{resource.title}</h2>
                            <div className={styles.cardtext}>
                            <p className={styles.content}>{resource.content}</p>
                            <p className={styles.category}>{resource.category[0]}</p>
                            <p className={styles.category}>{resource.category[1]}</p>
                            </div>
                        </div>
                    </div>
                })
                :
                <p>Sorry! No resources yet!</p>

            }
            </div>
        </div>
    )
}