import { cultural as culturalResources } from '../../../Wins-separate.js';

const Cultural = (props) => {
  const {id, title, image} = props.foundCultural

  return (
    <div>
        <p>Cultural: {id}</p>
        <p>Name: {title}</p>
        <img src={image}></img>
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