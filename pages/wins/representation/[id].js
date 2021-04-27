import { useRouter } from 'next/router'
import { representation as representationResources } from '../../../Wins-separate.js';

const Representive = () => {
  const router = useRouter()
  const { id } = router.query
let foundRepresentative = representationResources.find(resource => {

    return resource.id===parseInt(id)})
// console.log(representationResources)

  return (
      <div>
          <p>Representive: {id}</p>
          <p>Name: {foundRepresentative.title}</p>
          <p>Name: <img src={foundRepresentative.image}></img></p>
          </div>
    ) 
  
}

export default Representive