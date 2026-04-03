import React, { useState } from 'react'
const Buybutton = ({ item, cart, setCart, selectedId, setSelectedId }) => {

  const handleBuybutton = () => {
    setSelectedId(item.id);   // 🔥 ekta select korle baki gula auto unselect
    setCart([...cart, item]);
  };


      const isSelect = selectedId === item.id;
      let tagColor = "";

        if (item.tag === "Best Seller") {
          tagColor = "bg-yellow-400 text-black";
        } else if (item.tag === "Popular") {
          tagColor = "bg-sky-400 text-white";
        } else if (item.tag === "New") {
          tagColor = "bg-green-500 text-white";
        } else {
          tagColor = "bg-purple-500 text-white";
        }

        
  return (
    <div>
                <div 
           
            className="w-full p-4 sm:p-5 border border-gray-300 rounded-2xl shadow-md relative bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

            <p className={`absolute top-3 right-3 text-[10px] sm:text-xs px-2 sm:px-3 py-1 rounded-full ${tagColor}`}>
              {item.tag}
            </p>

            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-gray-300 p-2 flex items-center justify-center mb-3">
              <img 
                src={item.image} 
                alt="product" 
                className="w-full h-full object-contain"
              />
            </div>

            <h4 className="text-base sm:text-lg font-bold mb-2">
              {item.title}
            </h4>

            <p className="text-xs sm:text-sm text-gray-600 mb-3">
              {item.description}
            </p>

            <p className="text-lg sm:text-xl font-semibold mb-3">
              {item.price}/
              <span className='text-sm font-normal'>
                {item.pricing_type}
              </span>
            </p>

            <ul className="text-xs sm:text-sm mb-4 list-disc ml-4 space-y-1">
              {item.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>

            <button className="w-full px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-500 text-white text-sm sm:text-base font-semibold cursor-pointer" onClick={handleBuybutton}>
              {isSelect === true ? "Added to Cart" : "Buy Now"}
              
            </button>

          </div>
    </div>
  )
}

export default Buybutton
