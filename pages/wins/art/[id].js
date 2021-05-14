import Link from 'next/link'
import styles from '../../../styles/Wins/WinsID.module.css';
import { Header } from '../../../components/Layout/Header'
import { Footer } from '../../../components/Layout/Footer'
import { art as artResources } from '../../../database/Wins-separate.js';

const Artist = (props) => {
  const {title, image, content, url} = props.foundArtist

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

Artist.getInitialProps = ({query}) => {

  let foundArtist = artResources.find(resource => {
      return resource.id === parseInt(query.id)
  })

  return {
    foundArtist
  }
}

export default Artist