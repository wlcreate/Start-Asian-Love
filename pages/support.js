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

  const filter = (buttonCategory) =>{

    if(buttonCategory === 'All'){
      setResourcesList(resourcesData);
      return;
    }

    const filteredResources = resourcesData.filter(resource => resource.category === buttonCategory);
    setResourcesList(filteredResources)
  }

console.log(resourcesList)
  return (
    <div className={styles.container}>

    <Header/>

    {/* divs are outlined for reference in module.css file */}

      <div className={styles.main}>
        <h2>I am the Support Page</h2>
      </div>
      <Allyship/>
      <CategoryList filter={filter}/>
      <Resources resourcesList={resourcesList}/>
      <div className={styles.content}>
          
      </div>
      

    <Footer/>
    </div>

  );
}