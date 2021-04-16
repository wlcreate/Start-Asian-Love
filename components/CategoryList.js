import styles from '../styles/AllyshipList.module.css';
import resourcesData from '../SupportResources.js';

const CategoryList = ({filter}) => {
    
    const allCategories = ['All', ...new Set(resourcesData.map(resource => resource.category))];

    return (
        <div className={styles.main}>
            <p>I am the Category Component.</p>
            <h1>Filter by Category</h1>
             {
                allCategories.map((category, i)=>{
                    return <button type="button" onClick={()=> filter(category)} key={i}>{category}</button>
                })
            }
        </div>
    )
}

export default CategoryList;