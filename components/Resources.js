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
                        <div onClick={() => window.open(resource.url,'_blank')}>
                            <img className={styles.image} src={resource.image} alt="resource title"/>
                            <div className={styles.titlebox}><h2>{resource.title}</h2></div>
                            <p className={styles.cardtext}>
                            <p className={styles.content}>{resource.content}</p>
                            <div className={styles.cardbottom}>
                                {/* Should categories at bottom of cards be clickable? */}
                                <div><p>{resource.category[0]}</p></div>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <div><p>{resource.category[1]}</p></div>
                            </div>
                            </p>
                        </div>
                    </div>
                })
                :
                <div className={styles.sorry}>Sorry! No resources yet!</div>
            }
            </div>
            <br/>
        </div>
    )
}