import React from 'react'
import ProductCartToggle from './CartToggle'

const Servicetop = () => {
  return (
    <div>
      <div className='flex flex-col items-center justify-center '>
        <h2 className='font-extrabold text-5xl pt-4'>Premium Digital Tools</h2>
        <p className='text-xl text-[#627382] pt-4 text-center'>Choose from our curated collection of premium digital products designed <br/> to boost your productivity and creativity.</p>
        <div className='pt-4'>
            <ProductCartToggle />
        </div>
      </div>
    </div>
  )
}

export default Servicetop
