import React, { useState } from 'react'

import Buybutton from './Buybutton';

const Card = ({ Costlist, carts, setCarts }) => {
  const [selectedId, setSelectedId] = useState(null);
     console.log (carts)

  return (
    
    <>
      {Costlist.map((item) => {
        return (
          <Buybutton key={item.id} item={item} cart={carts} setCart={setCarts} item={item} 
 
  selectedId={selectedId}
  setSelectedId={setSelectedId}/>

          
        )
      })}
    </>
  )
}

export default Card