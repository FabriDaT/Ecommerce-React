import React from "react";
import "./styles.css";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import  OrderCard  from "../OrderCard";
import { totalPrice } from "../../utils";

const CheckoutSideMenu = () => {

  const context = useContext(ShoppingCartContext)

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(product => product.id != id)
    context.setCartProducts(filteredProducts)
  }



  return (
    <aside
      className={`${
        context.isCheckoutSideMenuOpen ? "flex" : "hidden"
      } checkout-side-menu flex flex-col fixed right-0 border border-black rounded-lg bg-white overflow-auto `}
    >
      <div className="flex items-center justify-between p-6">
        <h2 className="font-medium text-xl"> My Order </h2>
        <button
          className=" rounded-full hover:bg-red-400"
          onClick={context.closeCheckoutSideMenu}
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
              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>
      </div>

      <div className="px-6 overflow-auto">
           {
           context.cartProducts.map(product => (
        <OrderCard
            id={product.id}
            key={product.title} // use como 'key' el titulo ya que en la api se repiten los ID, 
            // cosa que da un error en consola al mapear los productos y repetirse la key
            title={product.title}
            imageUrl={product.images}
            price={product.price}
            handleDelete={handleDelete}
           

        />
      ))
      }
      </div>

      <div className="px-6">
        <p>
          <span>Total: </span>
          <span>${
            
            

            }</span> {/* Usar la función totalPrice */}
        </p>
      </div>
   
    </aside>
  );
};

export default CheckoutSideMenu;
