import { useState } from 'react';
import { Header } from '../components/header'
// import { Footer } from '../components/Footer'
import { Allyship } from '../components/AllyshipList'
import  CategoryList  from '../components/CategoryList'
import { Resources } from '../components/Resources'
import styles from '../styles/Support.module.css';
import resourcesData from '../SupportResources.js';

export default function Support() {
  const [resourcesList, setResourcesList] = useState(resourcesData);
  const [allyship, setAllyship] = useState("anyone")
  const [category, setCategory] = useState("All")

  const changeAllyship = (chosenAllyship) => {
    // console.log("chosenAllyship: ", chosenAllyship)
    setAllyship(chosenAllyship)
  }

  const changeCategory = (chosenCategory) => {
    // console.log("chosenCategory: ", chosenCategory)
    setCategory(chosenCategory)
  }

  const filterResources = () =>{
    if (allyship === "anyone" && category === "All") {
      return resourcesData
    } else if (allyship === "anyone" && category !== "All") {
      let filteredResourcesByCategory = resourcesData.filter(resource => {
        return resource.category[0] === category || resource.category[1] === category
      })

      return filteredResourcesByCategory
    } else if (allyship === "asian" && category === "All") {
      let filteredResourcesByAllyship = resourcesData.filter(resource => {
        return resource.allyship[0] === "asian" || resource.allyship[1] === "asian"
      });

      return filteredResourcesByAllyship
    } else if (allyship === "asian" && category !== "All") {
      let filteredResourcesByAllyship = resourcesData.filter(resource => {
        return resource.allyship[0] === "asian" || resource.allyship[1] === "asian"
      });

      let filteredResourcesByCategory = filteredResourcesByAllyship.filter(resource => {
        return resource.category[0] === category || resource.category[1] === category
      })

      return filteredResourcesByCategory
    } else if (allyship === "bipoc" && category === "All") {
      let filteredResourcesByAllyship = resourcesData.filter(resource => {
        return resource.allyship[0] === "bipoc" || resource.allyship[1] === "bipoc"
      });

      return filteredResourcesByAllyship
    } else if (allyship === "bipoc" && category !== "All") {
      let filteredResourcesByAllyship = resourcesData.filter(resource => {
        return resource.allyship[0] === "bipoc" || resource.allyship[1] === "bipoc"
      });

      let filteredResourcesByCategory = filteredResourcesByAllyship.filter(resource => {
        return resource.category[0] === category || resource.category[1] === category
      })
      return filteredResourcesByCategory
    }
    
    // setResourcesList(filteredResources)
  }

  return (
    <div className={styles.container}>
    <Header/>

      <div className={styles.main}>
        <h2>I am the Support Page</h2>
      </div>
      <div className={styles.content}>
        <Allyship currentAllyship={allyship} changeAllyship={changeAllyship}/>
        <CategoryList currentCategory={category} changeCategory={changeCategory}/>

        {/* Created the following div element to consolidate current filtered resources */}

        <div className={styles.viewing}>
          <p>Viewing</p>&nbsp;
          <p className={styles.category}>{category}</p>&nbsp;
          <p>resources for</p>&nbsp;
          <p className={styles.allyship}>{allyship}</p>&nbsp;
          <p>folx.</p>
        </div>

        <Resources resourcesList={filterResources()}/>
      </div>
    
      {/* Commenting out footer due to overlapping issue
      <Footer/> */}
      
    </div>

  );
}