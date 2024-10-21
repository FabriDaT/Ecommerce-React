import React from "react";
import './styles.css'
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);
  return (
    <aside
      className={`${
        context.isCheckoutSideMenuOpen ? "flex" : "hidden"
      } checkout-side-menu flex flex-col fixed top-20 right-0 border border-black rounded-lg bg-white overflow-auto `}
    >
      <div className="flex items-center justify-between p-6">
        <h2 className="font-medium text-xl"> My Order </h2>
        <button
          className=" rounded-full hover:bg-red-400"
          onClick={context.closeCheckoutSideMenu()}
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
    </aside>
  );
};

export default CheckoutSideMenu;