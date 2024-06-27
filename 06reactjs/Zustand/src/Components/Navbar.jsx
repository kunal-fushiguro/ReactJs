import React from "react";
import useCart from "../store/cart";

const Navbar = () => {
  const product = useCart((state) => ({ cart: state.cart }));
  return (
    <>
      <nav className="sticky top-0">
        <div className="flex justify-around items-center flex-row bg-gray-600 w-screen h-[40px] text-white font-bold">
          <h2 className="text-2xl">Zustand</h2>
          <div className="flex w-[30%] justify-evenly text-xl">
            <span>Total Item's : {product.cart.length} </span>
            <span>
              Total Item's Price : $
              {product.cart.reduce((total, item) => total + item.price, 0)}{" "}
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
