import Buybutton from './Buybutton';

const Card = ({ Costlist }) => {

  return (
    <>
      {Costlist.map((item, index) => {

        

        return (
          <Buybutton item={item}/>
        )
      })}
    </>
  )
}

export default Card