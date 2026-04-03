import Buybutton from './Buybutton';

const Card = ({ Costlist, carts, setCarts }) => {
     console.log (carts)

  return (
    
    <>
      {Costlist.map((item, index) => {



        return (
          <Buybutton key={item.id} item={item} cart={carts} setCart={setCarts}/>

          
        )
      })}
    </>
  )
}

export default Card