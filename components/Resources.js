import styles from '../styles/Resources.module.css';

export const Resources = (props) => {
    const {resourcesList} = props

    return (
        <div className={styles.main}>
            <p>I am the Resources Component.</p>

            {
                resourcesList.length > 0
                ?
                resourcesList.map((resource) =>{
                    return <div className="resource-container" key={resource.id}>
                        <div className={styles["resource-container"]}>
                            <img className={styles.image} src={resource.image} alt="resource title"/>
                            <h2>{resource.title}</h2>
                            <p>{resource.content}</p>
                            <p>{resource.category[0]}</p>
                            <p>{resource.category[1]}</p>
                        </div>
                    </div>
                })
                :
                <p>Sorry! No resources yet!</p>
            }
        </div>
    )
}