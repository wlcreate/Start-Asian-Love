import { representation as representationResources } from '../../../Wins-separate.js';

const Representative = (props) => {
  const { id, title, image } = props.foundRepresentative

  return (
    <div>
        <p>Representive: {id}</p>
        <p>Name: {title}</p> 
        <img src={image}></img>
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