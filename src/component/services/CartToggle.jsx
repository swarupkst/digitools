import { useState } from "react";

const ProductCartToggle = () => {
  const [active, setActive] = useState("products");

  return (
    <div className="inline-flex border-2 border-gray-300 rounded-full p-1">
      
      <button
        onClick={() => setActive("products")}
        className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 ${
          active === "products"
            ? "bg-gradient-to-r from-indigo-600 to-purple-500 text-white"
            : "text-indigo-600"
        }`}
      >
        Products
      </button>

      <button
        onClick={() => setActive("cart")}
        className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 ${
          active === "cart"
            ? "bg-gradient-to-r from-indigo-600 to-purple-500 text-white"
            : "text-indigo-600"
        }`}
      >
        Cart (0)
      </button>

    </div>
  );
};

export default ProductCartToggle;