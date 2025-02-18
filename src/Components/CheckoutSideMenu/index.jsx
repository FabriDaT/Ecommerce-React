import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../OrderCard";
import { totalPrice, dateTime } from "../../utils";


const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(
      (product) => product.id != id
    );
    context.setCartProducts(filteredProducts);
    context.setCount(context.count - 1);
  };

  const increaseQuantity = (id) => {
    const productCart = context.cartProducts.find(
      (cartItem) => cartItem.id === id
    );
    productCart.quantity += 1;
    context.setCartProducts([...context.cartProducts]); // Causar un renderizado actualizando el estado
  };

  const decreaseQuantity = (id) => {
    // Encontramos el producto en el carrito
    const updatedProducts = context.cartProducts.map((product) => {
      if (product.id === id && product.quantity > 1) {
        // Si la cantidad es mayor a 1, disminuimos la cantidad
        return { ...product, quantity: product.quantity - 1 };
      }
      // Si la cantidad ya es 1 o menos, no hacemos nada
      return product;
    });
    // Actualizamos el estado del carrito
    context.setCartProducts(updatedProducts);
  };

  const handleCheckout = () => {

    const orderToAdd = {
      date: dateTime(),
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts),
    };
    context.setOrder([...context.order, orderToAdd]);
    context.setCartProducts([]);
    context.closeCheckoutSideMenu()
  };

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

      <div className="px-6 overflow-auto flex-1">
        {context.cartProducts.map((product) => (
          <OrderCard
            id={product.id}
            key={product.id} 
            title={product.title}
            imageUrl={product.image}
            price={product.price}
            handleDelete={handleDelete}
            quantity={product.quantity}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
          />
        ))}
      </div>

      <div className="px-6 mb-6">
        <p className="flex justify-between items-center mb-2">
          <span className="font-light">Total: </span>
          <span className="font-medium text-xl">
            ${totalPrice(context.cartProducts)}
          </span>
        </p>
        <Link to="/my-orders/last">
          <button
            className="w-full bg-black py-3 text-white rounded-lg"
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
