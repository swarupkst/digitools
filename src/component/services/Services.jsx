import Card from "./Card"
import Servicetop from "./Servicetop"

const Services = () => {
  return (
    <div className="w-10/12 mx-auto">
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
