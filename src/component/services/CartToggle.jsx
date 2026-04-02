import React, { useEffect, useState } from "react";
import Card from "./Card";

const ProductCartToggle = () => {
  const [Costlist, setCostlist] = useState([]);
  const [active, setActive] = useState("products");

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
          Cart (0)
        </button>
        </div>
      </div>
          {active === "products" ? <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-10 gap-6 sm:gap-8">
        <Card Costlist={Costlist} />
      </div> : <h2>Not</h2>}
      
    
    </div>
  );
};

export default ProductCartToggle;