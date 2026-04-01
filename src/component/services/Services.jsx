import Card from "./Card"
import Servicetop from "./Servicetop"

const Services = () => {
  return (
    <div className="w-11/12 xl:w-8/12 mx-auto py-10 sm:py-16 lg:py-20">
      
      <Servicetop />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-10 gap-6 sm:gap-8">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

    </div>
  )
}

export default Services