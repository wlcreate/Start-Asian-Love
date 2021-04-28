import { heritage as heritageResources } from '../../../Wins-separate.js';

const Heritage = (props) => {
  const { id, title, image } = props.foundHeritage

  return (
    <div>
        <p>Heritage: {id}</p>
        <p>Name: {title}</p>
        <img src={image}></img>
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