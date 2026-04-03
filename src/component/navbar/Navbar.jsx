import React from 'react'
import { LuShoppingCart } from "react-icons/lu";

const Navbar = ({ carts = [] }) => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-base-100">
      {carts.map(items => (
        <div key={items.id}> </div>))}

      <div className=" navbar bg-base-100 max-w-7xl  mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li><a>Products</a></li>
              <li><a>Features</a></li>
              <li><a>Pricing</a></li>
              <li><a>Testimonials</a></li>
              <li><a>FAQ</a></li>
            </ul>
          </div>
          <a className="text-xl md:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent cursor-pointer">DigiTools</a>
        </div>
        <div className="navbar-center hidden lg:flex lg:gap-8">
          <ul className="menu menu-horizontal px-1 font-semibold text-xl">
            <li><a>Products</a></li>
            <li><a>Features</a></li>
            <li><a>Pricing</a></li>
            <li><a>Testimonials</a></li>
            <li><a>FAQ</a></li>
          </ul>
        </div>
        <div className="navbar-end flex gap-4 font-bold">

          <div className="relative">
            <LuShoppingCart className="text-2xl cursor-pointer" />

            {carts.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {carts.length}
              </span>
            )}
          </div>

          <p className='cursor-pointer'>Login</p>

          <a className="btn rounded-2xl text-white bg-gradient-to-r from-indigo-600 to-purple-500">
            Get Started
          </a>

        </div>


        {/* <div className="navbar-end flex gap-4 font-bold">
  
  <div className="relative">
    <LuShoppingCart className="text-2xl" />

    {cartCount > 0 && (
      <span className="badge badge-sm absolute -top-2 -right-2">
        {cartCount}
      </span>
    )}
  </div>

  <p>Login</p>

  <a className="btn rounded-2xl text-white bg-gradient-to-r from-indigo-600 to-purple-500">
    Get Started
  </a>

</div> */}
      </div>
      <hr className='border border-gray-200' />
    </div>

  )
}

export default Navbar
