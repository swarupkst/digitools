import React from 'react'
import { MdDelete } from "react-icons/md";
import { BsCart2 } from "react-icons/bs";
import { toast } from 'react-toastify';


const Cart = ({ carts, setCarts }) => {
  const handleRemove = (id) => {
  const updatedCart = carts.filter(item => item.id !== id);
  toast.warn ("Cart Removed")
  setCarts(updatedCart);
};
const totalPrice = carts.reduce((acc, item) => acc + item.price, 0);
  return (
    <div className="w-full max-w-5xl mx-auto px-4 mt-10 border border-gray-300 p-6 sm:p-8 rounded-2xl min-w-[42vh] xl:min-w-[70vh] sm:min-w-[60vh]">
      <h1 className='text-4xl font-bold mb-8'>Your Cart</h1>

      {carts.length === 0 ? (
  <div className="w-full max-w-5xl flex flex-col items-center justify-center h-[30vh] text-center text-gray-500 px-4">
  
  <BsCart2 className="text-6xl sm:text-7xl md:text-8xl mb-6" />

  <p className="text-xl sm:text-2xl md:text-3xl font-semibold">
    Cart is Empty
  </p>

  <p className="text-sm sm:text-base md:text-lg mt-3 text-gray-400 max-w-md">
    Add some products to your cart and they will appear here.
  </p>

</div>
      ) : (
        <>
          {carts.map(items => (
            <div
              key={items.id}
              className="bg-[#F9FAFC] rounded-2xl p-4 mb-4 border border-gray-200 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-8 sm:gap-10">

                {/* LEFT: Image */}
                <img
                  src={items.image}
                  alt={items.title}
                  className="w-8 h-auto object-cover rounded-xl"
                />

                {/* MIDDLE */}
                <div className="flex-1">
                  <p className="text-sm ms:text-2xl font-semibold text-gray-800">
                    {items.title}
                  </p>

                  <p className="text-xl text-gray-500 mt-3">
                    ${items.price}
                  </p>
                </div>

                {/* RIGHT: Buttons */}
                <button onClick={() => handleRemove(items.id)} className="hidden sm:block text-red-500 border border-red-300 px-6 py-3 rounded-xl hover:bg-red-500 hover:text-white transition">
                  Remove
                </button>

                <button
                  onClick={() => handleRemove(items.id)} className="block sm:hidden text-red-500 text-2xl"
                >
                  <MdDelete />
                </button>

              </div>
            </div>
          ))}

          <div className='flex justify-between'>
            <p>Total:</p> <p className='text-xl font-bold px-2 py-2'>${totalPrice}</p>
          </div>

          <button
          
            onClick={() => {
    toast.error("All Cart Removed");
    setCarts([]);
  }}
            
            className='w-full px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-500 text-white text-sm sm:text-base font-semibold cursor-pointer'
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart