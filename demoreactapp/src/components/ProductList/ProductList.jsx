import React, { useEffect, useState } from "react";
import { Card } from "../Card/Card";

export const ProductList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div className="w-fit mt-24 mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mb-5 ">
      {data ? (
        data.map((item) => {
          return <Card item={item} />;
        })
      ) : (
        <div>by</div>
      )}
    </div>
  );
};
