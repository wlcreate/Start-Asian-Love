import { contributions as contributionResources } from '../../../Wins-separate.js';
import { Header } from '../../../components/Header'
import { Footer } from '../../../components/Footer'

const Contributor = (props) => {
  const {id, title, image} = props.foundContributor

  return (
    <div>
      <Header />
      <p>Contributor: {id}</p>
      <p>Name: {title}</p>
      <img src={image}></img>
      <Footer />
    </div>
  ) 
  
}

Contributor.getInitialProps = ({query}) => {

  let foundContributor = contributionResources.find(resource => {
    return resource.id === parseInt(query.id)
  })

  return {
    foundContributor
  }
}

export default Contributor