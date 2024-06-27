import { useState } from "react";
import useCart from "../store/cart";

const Product = ({ value }) => {
  const [btn, setbtn] = useState(false);
  const product = useCart((state) => ({
    cart: state.cart,
    addFunction: state.addFn,
    removeFn: state.rmFn,
  }));

  function Add(val) {
    product.addFunction(val);
    setbtn((perv) => !perv);
  }
  function Remove(val) {
    product.removeFn(val.id);
    setbtn((perv) => !perv);
  }

  return (
    <>
      <div
        className="flex justify-center items-center gap-4 p-4 w-[20%] h-[250px] m-8 flex-col border-black border rounded-md"
        key={value.id}
      >
        <div className="w-[80%] h-[60%] object-contain flex justify-center items-center">
          <img src={value.images[0]} alt="" className=" w-[50%]" />
        </div>
        <div>{value.title}</div>
        <div>${value.price}</div>
        {btn ? (
          <button
            onClick={() => {
              Remove(value);
            }}
          >
            Remove Item
          </button>
        ) : (
          <button
            onClick={() => {
              Add(value);
            }}
          >
            Add Item
          </button>
        )}
      </div>
    </>
  );
};

export default Product;
