import React, { useState } from "react";
import { addFn, rmFn } from "../redux/slices/product";
import { useDispatch } from "react-redux";

const Item = ({ value, index }) => {
  const [Add, setAdd] = useState(false);
  const dispatch = useDispatch();
  const AddCart = (value) => {
    if (Add == false) {
      dispatch(addFn(value));
    } else {
      dispatch(rmFn(value.id));
    }
    setAdd((perv) => !perv);
  };
  return (
    <>
      <div
        className="flex flex-col justify-center items-center gap-[10px] border border-black p-4"
        key={index}
      >
        <h4>{value.title}</h4>
        <span>Price : $ {value.price}</span>
        {Add ? (
          <button
            className="bg-red-700 w-[100px] h-[30px] font-bold text-white"
            onClick={() => {
              AddCart(value);
            }}
          >
            Remove Item
          </button>
        ) : (
          <button
            className="bg-green-700 w-[70px] h-[30px] font-bold text-white"
            onClick={() => {
              AddCart(value);
            }}
          >
            Add Item
          </button>
        )}
      </div>
    </>
  );
};

export default Item;
