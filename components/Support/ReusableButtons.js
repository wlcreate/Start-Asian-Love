import styles from '../../styles/Support/ReusableButtons.module.css';

export const ReusableButtons = ({buttonData, group, changeSelection}) => {

    const getButtonTexts = (information) => {
        let buttonTexts = new Set()

        if (group === "categories") buttonTexts.add("All")

        for (let i = 0; i < information.length; i++ ){
            let informationObj = information[i]

            if (group === "allyships") {
                buttonTexts.add(informationObj.allyship[0])
            } else if (group === "categories") {
                buttonTexts.add(informationObj.category[0])
            }
        }

        return buttonTexts
    }

    const allButtonTexts = [...getButtonTexts(buttonData)];
    
    return (
        <div>
            {
                allButtonTexts.map((text, i)=>{
                    return <button className={styles.button} type="button" onClick={()=> changeSelection(text)} key={i}>{text}</button>
                })
            }
        </div>
    )
}