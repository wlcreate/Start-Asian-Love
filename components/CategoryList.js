import styles from '../styles/CategoryList.module.css';
import resourcesData from '../database/SupportResources.js';

const CategoryList = ({changeCategory}) => {
    const getCategories = (information) => {
        
        let categories = new Set()

        for (let i=0; i < information.length; i++ ){
            categories.add(information[i].category[0])
        }

        return categories
    }

    const allCategories = ['All', ...getCategories(resourcesData)];

    return (
        <div className={styles.main}>
            <h2>Filter by Category</h2>
            {
                allCategories.map((category, i)=>{
                    return <button className={styles.button} type="button" onClick={()=> changeCategory(category)} key={i}>{category.charAt(0).toUpperCase() + category.slice(1)}</button>
                })
            }
        </div>
    )
}

export default CategoryList;