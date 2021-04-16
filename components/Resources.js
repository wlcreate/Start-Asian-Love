import styles from '../styles/AllyshipList.module.css';

export const Resources = (props) => {
    const {resourcesList} = props
    return (
        <div className={styles.main}>
            <p>I am the Resources Component.</p>

            {
                resourcesList.map((resource) =>{
                    return <div className="resource-container" key={resource.id}>
                        <div className="resource-card">
                            <img src={resource.image} alt="resource title"/>
                            <h2>{resource.title}</h2>
                            <p>{resource.content}</p>
                        </div>
                    </div>
                })
            }
        </div>
    )
}