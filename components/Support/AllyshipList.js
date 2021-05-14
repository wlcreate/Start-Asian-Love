import styles from '../../styles/AllyshipList.module.css';
import resourcesData from '../../database/SupportResources';

export const Allyship = ({changeAllyship}) => {

    const getAllyships = (information) => {
        let allyships = new Set()

        for (let i=0; i < information.length; i++ ){
            allyships.add(information[i].allyship[0])
        }

        return allyships
    }

    const allAllyships = [...getAllyships(resourcesData)];
    
    return (
        <div className={styles.main}>
            <h2>Who are these resources for?</h2>
            {
                allAllyships.map((allyship, i)=>{
                    return <button className={styles.button} type="button" onClick={()=> changeAllyship(allyship)} key={i}>{allyship}</button>

                })
            }
        </div>
    )
}