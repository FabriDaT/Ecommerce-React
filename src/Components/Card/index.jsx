import React from "react";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

const Card = (data) => {
  const context =  useContext(ShoppingCartContext)
  //const { count, setCount, openProductDetail, setProductToShow, cartProducts,setCartProducts} = useContext(ShoppingCartContext);

  const showProduct = (productDetail) => {
    context.openProductDetail()
    context.setProductToShow(productDetail)
    context.closeCheckoutSideMenu()
  }

  const addProductToCart =  (event, productData) => { 
    event.stopPropagation() // evita que el evento se propague hacia los elementos padres
    context.setCount(context.count + 1);
    context.setCartProducts([...context.cartProducts, productData])
    context.closeProductDetail()
    context.openCheckoutSideMenu()
    
    
  }

  return (
    <div
      className="bg-white cursor-pointer w-56 h-60 rounded-lg"
      onClick={() => showProduct(data.data)}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {data.data?.category?.name}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={data.data?.images[0]}
          alt={data.data?.title}
        />
        <button
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 m-2 p-1 hover:bg-green-500 rounded-full font-bold"
       
          onClick={(event) => 
            addProductToCart(event,data.data)
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{data.data?.title}</span>
        <span className="text-lg font-medium">${data.data?.price}</span>
      </p>
    </div>
  );
};

export default Card;
