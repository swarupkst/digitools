

import Servicetop from "./Servicetop"


const Services = ({CostPromise, carts, setCarts}) => {
 
  
  return (
    <div className="w-11/12 xl:w-8/12 mx-auto py-10 sm:py-16 lg:py-20">
      
      <Servicetop CostPromise={CostPromise} carts={carts} setCarts={setCarts}/>
      
      

    </div>
  )
}

export default Services