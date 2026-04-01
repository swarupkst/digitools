import Card1 from "./Card1"
import Card2 from "./Card2"
import Card3 from "./Card3"

const Card = () => {
  return (
    <div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 place-items-center">
  <Card1 />
  <Card2 />
  <Card3 />
</div>

    </div>
  )
}

export default Card