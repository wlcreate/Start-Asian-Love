import { useRouter } from 'next/router'
import { cultural as culturalResources } from '../../../Wins-separate.js';

const Cultural = () => {
  const router = useRouter()
  const { id } = router.query
let foundCultural = culturalResources.find(resource => {

    return resource.id===parseInt(id)})
// console.log(representationResources)

  return (
      <div>
          <p>Cultural: {id}</p>
          <p>Name: {foundCultural.title}</p>
          <p>Name: <img src={foundCultural.image}></img></p>
          </div>
    ) 
  
}

export default Cultural