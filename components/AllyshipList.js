import styles from '../styles/AllyshipList.module.css';
import resourcesData from '../SupportResources.js';

export const Allyship = ({changeAllyship}) => {

    const getAllyships = (information) => {
        let allyships = new Set()

        for (let i=0; i < information.length; i++ ){
            allyships.add(information[i].allyship[0])
            
        }

        return allyships
    }

    const allAllyships = ['All', ...getAllyships(resourcesData)];
    
    return (
        <div className={styles.main}>
            <p>I am the Allyship Component.</p>
            <h2>Who are these resources for?</h2>
            {/* <button onClick={()=> changeAllyship("anyone")}>Everyone</button>
            <button onClick={()=> changeAllyship("asian")}>Asian/AAPI</button>
            <button onClick={()=> changeAllyship("bipoc")}>BIPOC</button> */}
            {
                allAllyships.map((allyship, i)=>{
                    return <button type="button" onClick={()=> changeAllyship(allyship)} key={i}>{allyship}</button>
                })
            }
        </div>
    )
}