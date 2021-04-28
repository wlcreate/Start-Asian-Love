import { art as artResources } from '../../../Wins-separate.js';


const Artist = (props) => {
  return (
      <div>
          <p>Artist: {props.foundArtist.id}</p>
          <p>Name: {props.foundArtist.title}</p>
          <img src={props.foundArtist.image}></img>
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