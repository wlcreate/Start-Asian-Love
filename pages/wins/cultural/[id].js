import { cultural as culturalResources } from '../../../Wins-separate.js';
import { Header } from '../../../components/Header'
import { Footer } from '../../../components/Footer'

const Cultural = (props) => {
  const {id, title, image} = props.foundCultural

  return (
    <div>
      <Header />
      <p>Cultural: {id}</p>
      <p>Name: {title}</p>
      <img src={image}></img>
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