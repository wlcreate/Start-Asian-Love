import { representation as representationResources } from '../../../Wins-separate.js';
import { Header } from '../../../components/Header'
import { Footer } from '../../../components/Footer'

const Representative = (props) => {
  const { id, title, image } = props.foundRepresentative

  return (
    <div>
      <Header />
      <p>Representive: {id}</p>
      <p>Name: {title}</p>
      <img src={image}></img>
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