import React, { useState } from "react";

const OrderCard = (props) => {
  const {
    id,
    title,
    imageUrl,
    price,
    quantity,
    handleDelete,
    increaseQuantity,
    decreaseQuantity,
  } = props;

  return (
    <div className="flex items-center mb-3 border-b-2 border-b-[#e5d8ff] border-solid w-full">

      {/* Product image and Title */}
      <div className="flex items-center justify-start gap-2 w-[60%]">
        <figure className="w-10 h-10">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={imageUrl}
            alt={title}
          />
        </figure>
        <p className="text-xs w-[65%] font-light line-clamp-2">{title}</p>
      </div>

      {/* Quantity, price and delete */}
      <div className="flex items-center gap-2 justify-between w-[40%]">
       <div className="flex items-center border-gray-100">
          { decreaseQuantity && quantity && <span
             className={` rounded-l py-1 px-[3px] duration-100 ${
              quantity === 1
                ? "bg-red-200 text-white hover:bg-black cursor-not-allowed flex items-center justify-center" // Estilo para cuando la cantidad sea 1
                : "bg-gray-200 hover:bg-red-500 hover:text-blue-50 cursor-pointer" // Estilo normal para cuando la cantidad sea mayor a 1
            }`}
            onClick={() => decreaseQuantity(id)}
            disabled={quantity === 1}
          >
            -
          </span>}
          {quantity && <span className="h-8 w-4 border py-[10px] bg-white text-center text-xs outline-none">
            {quantity}
          </span>}
          { increaseQuantity && <span
            className="cursor-pointer rounded-r bg-gray-200 py-1 px-[1px] duration-100 hover:bg-blue-500 hover:text-blue-50"
            onClick={() => increaseQuantity(id)}
          >
            +
          </span>}
        </div>
        <p className="text-sm font-medium">${price}</p>
        
        {handleDelete &&  <button
          className="p-2 rounded-full bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300"
          onClick={() => handleDelete(id)} 
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </button>}
       
      </div>
    </div>
  );
};
export default OrderCard;
