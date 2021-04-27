import { useRouter } from 'next/router'
import { art as artResources } from '../../../Wins-separate.js';


const Artist = () => {
  const router = useRouter()
  const { id } = router.query

let foundArtist = artResources.find(resource => {

    return resource.id===parseInt(id)})

  return (
      <div>
          <p>Artist: {id}</p>
          <p>Name: {foundArtist.title}</p>
          <p>Name: <img src={foundArtist.image}></img></p>
          </div>
    ) 
  
}

export default Artist