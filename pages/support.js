import { useState } from 'react';
import { Header } from '../components/header'
import { Footer } from '../components/Footer'
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
    console.log("chosenAllyship: ", chosenAllyship)
    setAllyship(chosenAllyship)
  }

  const changeCategory = (chosenCategory) => {
    console.log("chosenCategory: ", chosenCategory)
    setCategory(chosenCategory)
  }

  return (
    <div className={styles.container}>
    <Header/>

      <div className={styles.main}>
        <h2>I am the Support Page</h2>
      </div>
      <div className={styles.content}>
        <Allyship changeAllyship={changeAllyship}/>
        <CategoryList changeCategory={changeCategory}/>
        <Resources resourcesList={resourcesList}/>
      </div>
      
    <Footer/>
    </div>

  );
}