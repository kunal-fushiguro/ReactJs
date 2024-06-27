import React, { useEffect, useState } from "react";
import Product from "../Components/Product";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function productApiCall() {
      const url = "https://api.escuelajs.co/api/v1/products";
      const response = await fetch(url);
      const fetehedData = await response.json();
      setData(fetehedData);
    }
    productApiCall();
  }, []);
  console.log(data);
  return (
    <>
      <div className="w-screen h-auto overflow-hidden flex justify-center items-start p-5 flex-wrap gap-4">
        {data?.map((item) => {
          return <Product value={item} />;
        })}
      </div>
    </>
  );
};

export default Home;
