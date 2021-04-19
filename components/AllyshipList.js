import styles from '../styles/AllyshipList.module.css';
import resourcesData from '../SupportResources.js';

export const Allyship = ({currentAllyship, changeAllyship}) => {

    const getAllyships = (information) => {
        let allyships = new Set()

        for (let i=0; i < information.length; i++ ){
            allyships.add(information[i].allyship[0])
            // console.log("information[i].allyship: ", information[i].allyship)
            // console.log("information[i].allyship[0]: ", information[i].allyship[0])
        }

        return allyships
    }

    const allAllyships = [...getAllyships(resourcesData)];
    
    return (
        <div className={styles.main}>

            {/* Commenting out lines 25-26 to consolidate current filter in Support.js page (line 83)*/}

            {/* <p>I am the Allyship Component.</p> */}
            {/* <p>Current Allyship: {currentAllyship}</p> */}
            <h2>Who are these resources for?</h2>
            {/* 
                Leaving the lines 30-32 in case we decide to hard-code the allyships:
                <button onClick={()=> changeAllyship("anyone")}>Everyone</button>
                <button onClick={()=> changeAllyship("asian")}>Asian/AAPI</button>
                <button onClick={()=> changeAllyship("bipoc")}>BIPOC</button> 
            */}
            {
                allAllyships.map((allyship, i)=>{
                    return <button className={styles.button} type="button" onClick={()=> changeAllyship(allyship)} key={i}>{allyship}</button>

                })
            }
        </div>
    )
}