import React from "react";
import Data from "../products.json";
import Item from "./Item";

const Home = () => {
  return (
    <>
      <div className="flex w-screen h-auto gap-[20px] m-4 p-2 flex-wrap ">
        {Data.map((item, index) => {
          return <Item value={item} index={index} key={item.id} />;
        })}
      </div>
    </>
  );
};

export default Home;
