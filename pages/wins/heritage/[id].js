import { useRouter } from 'next/router'
import { heritage as heritageResources } from '../../../Wins-separate.js';

const Heritage = () => {
  const router = useRouter()
  const { id } = router.query
let foundHeritage = heritageResources.find(resource => {

    return resource.id===parseInt(id)})
// console.log(representationResources)

  return (
      <div>
          <p>Heritage: {id}</p>
          <p>Name: {foundHeritage.title}</p>
          <p>Name: <img src={foundHeritage.image}></img></p>
          </div>
    ) 
  
}

export default Heritage