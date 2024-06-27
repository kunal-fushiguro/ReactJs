import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {} from "../redux/slices/product";
import { Link } from "react-router-dom";

const Navbar = () => {
  const item = useSelector((state) => state.product.value);
  const [price, setPrice] = useState(0);
  useEffect(() => {
    setPrice(item.reduce((total, product) => total + product.price, 0));
  }, [item]);
  return (
    <>
      <nav className="flex flex-row justify-around items-center w-screen h-[40px] text-[20px] font-bold bg-green-500">
        <div>
          <Link to={"/"}>
            <h1>Redux Toolkit Cart</h1>
          </Link>
        </div>
        <Link to={"/cart"}>
          <div>
            Total Item {item.length} Total Price ${price}
          </div>
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
