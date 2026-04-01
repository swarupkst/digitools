import React from 'react'
import Img from '../../assets/products/operation.png'

const Card = () => {
  return (
    <div className="flex justify-center">
      
      <div className="w-full p-4 sm:p-5 border border-gray-300 rounded-2xl shadow-md relative bg-white">
        
        {/* Badge */}
        <p className="absolute top-3 right-3 bg-purple-500 text-white text-[10px] sm:text-xs px-2 sm:px-3 py-1 rounded-full">
          Best Seller
        </p>

        {/* Image */}
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-gray-300 p-2 flex items-center justify-center mb-3">
          <img 
            src={Img} 
            alt="product" 
            className="w-full h-full object-contain"
          />
        </div>

        {/* Title */}
        <h4 className="text-base sm:text-lg font-bold mb-2">
          AI Writing Pro
        </h4>

        {/* Description */}
        <p className="text-xs sm:text-sm text-gray-600 mb-3">
          Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.
        </p>

        {/* Price */}
        <p className="text-lg sm:text-xl font-semibold mb-3">
          $29/mo
        </p>

        {/* Features */}
        <p className="text-xs sm:text-sm mb-4">
          # feature <br/> two <br/> asdf
        </p>

        {/* Button */}
        <div className="flex justify-center">
          <button className="w-full px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-500 text-white text-sm sm:text-base font-semibold cursor-pointer">
            Buy Now
          </button>
        </div>

      </div>

    </div>
  )
}

export default Card