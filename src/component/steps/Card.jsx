import Card1 from "./Card1"
import Card2 from "./Card2"
import Card3 from "./Card3"

const Card = () => {
  return (
    <div className="w-full">
      
      <div className=" w-11/12 xl:w-8/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-10">
        <Card1 />
        <Card2 />
        <Card3 />
      </div>

    </div>
  )
}

export default Card