import React from 'react'

const Cart = ({ carts }) => {
  console.log(carts.length)

  return (
    <div>
      <h1 className='text-3xl font-bold text-left'>Your Cart</h1>

      {carts.map(items => (
        <div key={items.id} className="bg-[#F9FAFC] rounded-2xl p-6 mb-6 border border-gray-200">
  <div className="flex items-center gap-6">

    {/* LEFT: Image */}
    <img
      src={items.image}
      alt={items.title}
      className="w-28 h-28 object-cover rounded-xl"
    />

    {/* MIDDLE: Title + Price */}
    <div className="flex-1">
      <p className="text-2xl font-semibold text-gray-800">
        {items.title}
      </p>
      <p className="text-lg text-gray-500 mt-2">
        ${items.price}
      </p>
    </div>

    {/* RIGHT: Remove Button */}
    <button className="text-red-500 text-lg font-medium border border-red-300 px-4 py-2 rounded-lg hover:bg-red-500 hover:text-white transition">
      Remove
    </button>

  </div>
</div>
      ))}
      
    </div>
  )
}

export default Cart
