import Card from "./Card"
import Servicetop from "./Servicetop"

const Services = () => {
  return (
    <div className="2xl:w-8/12 mx-auto py-20">
      <Servicetop />
      
      <div className="grid grid-cols-3 pt-10 gap-8">
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
