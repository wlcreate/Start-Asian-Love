import { art as artResources } from '../../../Wins-separate.js';

const Artist = (props) => {
  const {id, title, image} = props.foundArtist

  return (
    <div>
        <p>Artist: {id}</p>
        <p>Name: {title}</p>
        <img src={image}></img>
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