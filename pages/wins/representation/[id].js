import { representation as representationResources } from '../../../database/Wins-separate.js';
import { Header } from '../../../components/Layout/Header'
import { Footer } from '../../../components/Layout/Footer'
import styles from '../../../styles/WinsID.module.css';
import Link from 'next/link'

const Representative = (props) => {
  const {title, image, content, url} = props.foundRepresentative

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.main}>
        <p className={styles.title}>{title}</p>

        <div className={styles.whiteBox}>
          <img src={image}></img>
          <p className={styles.text}>{content}</p>
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

Representative.getInitialProps = ({query}) => {

  let foundRepresentative = representationResources.find(resource => {
    return resource.id === parseInt(query.id)
  })

  return {
    foundRepresentative
  }
}

export default Representative