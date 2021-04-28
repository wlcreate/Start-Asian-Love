import { contributions as contributionResources } from '../../../Wins-separate.js';

const Contributor = (props) => {
  const {id, title, image} = props.foundContributor

  return (
    <div>
        <p>Contributor: {id}</p>
        <p>Name: {title}</p>
        <img src={image}></img>
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