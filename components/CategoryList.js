import styles from '../styles/AllyshipList.module.css';
import resourcesData from '../SupportResources.js';

const CategoryList = ({currentCategory, changeCategory}) => {
    const getCategories = (information) => {
        // information.map(info => info.category)
        
        let categories = new Set()

        for (let i=0; i < information.length; i++ ){
            categories.add(information[i].category[0])
            // if (information[i].category > 1){
            //     categories.add(information[i].category[0])
            // }
            // else {categories.add(information[i].category)}
        }

        return categories
    }

    const allCategories = ['All', ...getCategories(resourcesData)];

    return (
        <div className={styles.main}>
            <p>I am the Category Component.</p>
            <p>Category selected: {currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1)}</p>
            <h2>Filter by Category</h2>
            {
                allCategories.map((category, i)=>{
                    return <button type="button" onClick={()=> changeCategory(category)} key={i}>{category.charAt(0).toUpperCase() + category.slice(1)}</button>
                })
            }
        </div>
    )
}

export default CategoryList;