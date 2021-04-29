import { art as artResources } from '../../../Wins-separate.js';
import { Header } from '../../../components/Header'
import { Footer } from '../../../components/Footer'

const Artist = (props) => {
  const {id, title, image} = props.foundArtist

  return (
    <div>
      <Header />
      <p>Artist: {id}</p>
      <p>Name: {title}</p>
      <img src={image}></img>
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