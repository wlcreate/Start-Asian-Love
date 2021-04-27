import { useRouter } from 'next/router'
import { contributions as contributionResources } from '../../../Wins-separate.js';

const Contributor = () => {
  const router = useRouter()
  const { id } = router.query
let foundContributor = contributionResources.find(resource => {

    return resource.id===parseInt(id)})
// console.log(representationResources)

  return (
      <div>
          <p>Contributor: {id}</p>
          <p>Name: {foundContributor.title}</p>
          <p>Name: <img src={foundContributor.image}></img></p>
          </div>
    ) 
  
}

export default Contributor