import React from "react";

export const Card = ({ item }) => {
  return (
    <>
      <div className="w-[300px] border p-2 shadow-lg rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <img
          src={item.image}
          alt={item.title}
          className="h-[200px] w-full rounded-md object-cover"
        />
        <div className="p-4">
          <h1 className="text-lg font-semibold">{item.title}</h1>
          <p className="mt-3 text-sm text-gray-600">{item.category}</p>
          <button
            type="button"
            className="mt-4 rounded-md bg-black px-3 py-3 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </>
  );
};
