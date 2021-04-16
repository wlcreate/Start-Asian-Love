import styles from '../styles/AllyshipList.module.css';
import resourcesData from '../SupportResources.js';

const CategoryList = ({filterResourcesByCategory}) => {
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
        // console.log(categories)
        return categories
    }
    const allCategories = ['All', ...getCategories(resourcesData)];

    return (
        <div className={styles.main}>
            <p>I am the Category Component.</p>
            <h1>Filter by Category</h1>
             {
                allCategories.map((category, i)=>{
                    return <button type="button" onClick={()=> filterResourcesByCategory(category)} key={i}>{category}</button>
                })
            }
        </div>
    )
}

export default CategoryList;