import React, { useEffect, useState } from "react";
import Card from "./Card";
import Cart from "./Cart";

const ProductCartToggle = ({carts, setCarts}) => {
  const [Costlist, setCostlist] = useState([]);
  const [active, setActive] = useState("products");
  //const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCostlist(data));
  }, []);

  return (
    <div>

    <div className="flex justify-center items-center">
      <div className="inline-flex border-2 border-gray-300 rounded-full p-1 items-center">
        

        <button
          onClick={() => setActive("products")}
          className={`px-5 py-2 rounded-full font-semibold cursor-pointer ${
            active === "products"
              ? "bg-gradient-to-r from-indigo-600 to-purple-500 text-white "
              : "text-indigo-600"
          }`}
        >
          Products
        </button>

        <button
          onClick={() => setActive("cart")}
          className={`px-5 py-2 rounded-full font-semibold cursor-pointer ${
            active === "cart"
              ? "bg-gradient-to-r from-indigo-600 to-purple-500 text-white"
              : "text-indigo-600"
          }`}
        >
          Cart ({carts.length})
        </button>
        </div>
      </div>
          {active === "products" ? <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-10 gap-6 sm:gap-8">
        <Card Costlist={Costlist} carts={carts} setCarts={setCarts} />
      </div> : <div className="grid grid-cols-1 w-full"> <Cart carts={carts} setCarts={setCarts} /> </div>}
      
    
    </div>
  );
};

export default ProductCartToggle;