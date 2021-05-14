import Link from 'next/link'
import styles from '../../../styles/Wins/WinsID.module.css';
import { Header } from '../../../components/Layout/Header'
import { Footer } from '../../../components/Layout/Footer'
import { cultural as culturalResources } from '../../../database/Wins-separate.js';

const Cultural = (props) => {
  const {title, image, content, url, location} = props.foundCultural

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.main}>
        <p className={styles.title}>{title}</p>

        <div className={styles.whiteBox}>
          <img src={image}></img>
          <p className={styles.text}>{content}</p>
          <p>Location: {location}</p>
          <p><span><a href={url} target="_blank" rel="noopener noreferrer">Discover more about {title}</a></span></p>
        </div>
        
        <Link href='/wins' passHref>
            <div className={styles.backToWins}>Back To Wins</div>
        </Link>
      </div>
      <Footer />
    </div>
  ) 
  
}

Cultural.getInitialProps = ({query}) => {

  let foundCultural = culturalResources.find(resource => {
    return resource.id === parseInt(query.id)
  })

  return {
    foundCultural
  }
}

export default Cultural