import { useSelector } from "react-redux";
import { rmFn } from "../redux/slices/product";
import { useDispatch } from "react-redux";

const Cart = () => {
  const data = useSelector((state) => state.product.value);
  const dispatch = useDispatch();
  const Removecart = (value) => {
    dispatch(rmFn(value.id));
  };
  return (
    <>
      <div className="flex w-screen h-auto gap-[20px] m-4 p-2 flex-wrap ">
        {data?.map((item, index) => {
          return (
            <div
              className="flex flex-col justify-center items-center gap-[10px] border border-black p-4"
              key={index}
            >
              <h4>{item.title}</h4>
              <h4>{item.price}</h4>

              <button
                className="bg-red-700 w-[100px] h-[30px] font-bold text-white"
                onClick={() => {
                  Removecart(item);
                }}
              >
                Remove Item
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cart;
