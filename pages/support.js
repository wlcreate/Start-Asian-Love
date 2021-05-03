import Head from 'next/head'
import { useState } from 'react';
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Allyship } from '../components/AllyshipList'
import  CategoryList  from '../components/CategoryList'
import { Resources } from '../components/Resources'
import styles from '../styles/Support.module.css';
import resourcesData from '../SupportResources.js';

export default function Support() {
  const [allyship, setAllyship] = useState("anyone")
  const [category, setCategory] = useState("All")
  
  // not using anymore because we are listening to the user filtering the data instead of displaying all of the resources 
  const [resourcesList, setResourcesList] = useState(resourcesData); 

  const changeAllyship = (chosenAllyship) => {
    setAllyship(chosenAllyship)
  }

  const changeCategory = (chosenCategory) => {
    setCategory(chosenCategory)
  }

  // filters the resources based on the allyship and category chosen by the user 
    // the default being anyone && all
    // otherwise, since the resources first depend on the allyship, filter the resources by allyship then by category (unless allyship is anyone)
  // future: if a resource has more than 2 categories?
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
    
    // setResourcesList(filteredResources) // if we weren't filtering for 2 things, potentially could have used setResourcesList to update/pass down the resources
  }

  return (
    
    <div className={styles.container}>
    <Head><title>Start Asian Love</title></Head>
    <Header/>

    <div className={styles.supportTitle}>
      <h2>Support</h2>
    </div>

      <div className={styles.description}>
        <h4>Below you will find a consolidated list of resources we have put together.</h4>
        <h4>You can filter the list by who the resource(s) are for as well as specifically what you are interested in.</h4>
      </div>

      <div className={styles.content}>
        <Allyship currentAllyship={allyship} changeAllyship={changeAllyship}/>
        <CategoryList currentCategory={category} changeCategory={changeCategory}/>

        {/* Created the following div element to consolidate current filtered resources */}

        {/* Consolidated the five <p> tags in lines 93-97 into one <p> tag, with two span elements for selected category and allyship. Updated the className from 'viewing' to main' for media queries */}

        <div className={styles.main}>
          <p>Viewing&nbsp;
          <span className={styles.category}>{category}&nbsp;</span>
          resources for&nbsp;
          <span className={styles.allyship}>{allyship}&nbsp;</span>
          folx.</p>
        </div>

        <Resources resourcesList={filterResources()}/>
      </div>
    

      <Footer/>
      
    </div>

  );
}