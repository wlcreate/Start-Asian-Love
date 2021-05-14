import Head from 'next/head'
import { useState } from 'react';
import styles from '../styles/Support/Support.module.css';
import { Header } from '../components/Layout/Header'
import { Footer } from '../components/Layout/Footer'
import { Allyship } from '../components/Support/AllyshipList'
import  CategoryList  from '../components/Support/CategoryList'
import { Resources } from '../components/Support/Resources'
import resourcesData from '../database/SupportResources';

export default function Support() {
  const [allyship, setAllyship] = useState("all")
  const [category, setCategory] = useState("All")

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
    if (allyship === "all" && category === "All") {
      return resourcesData
    } else if (allyship === "all" && category !== "All") {
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
  }

  return (
    
    <div className={styles.container}>
    <Head><title>Start Asian Love</title></Head>
    <Header/>

    <div className={styles.supportTitle}>
      <h2>Support</h2>
    </div>

      <div className={styles.description}>
        <p>Below you will find a growing list of resources we have put together.</p>
        <p>Check back for updates and/or reach out if you would like to contribute!</p>
      </div>

      <div className={styles.content}>
        <Allyship changeAllyship={changeAllyship}/>
        <CategoryList changeCategory={changeCategory}/>

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