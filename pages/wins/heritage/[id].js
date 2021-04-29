import { heritage as heritageResources } from '../../../Wins-separate.js';
import { Header } from '../../../components/Header'
import { Footer } from '../../../components/Footer'

const Heritage = (props) => {
  const { id, title, image } = props.foundHeritage

  return (
    <div>
      <Header />
      <p>Heritage: {id}</p>
      <p>Name: {title}</p>
      <img src={image}></img>
      <Footer />
    </div>
  ) 
  
}

Heritage.getInitialProps = ({query}) => {

  let foundHeritage = heritageResources.find(resource => {
    return resource.id === parseInt(query.id)
  })

  return {
    foundHeritage
  }
}

export default Heritage