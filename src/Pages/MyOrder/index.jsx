import React from "react";
import Layout from "../../Components/Layout";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../../Components/OrderCard";
import { Link } from "react-router-dom";

function MyOrder() {
  const context = useContext(ShoppingCartContext);
  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
  if (index === 'last') { index = context.order?.length-1}
  console.log(index)

  const totalPrice = (cartProducts) => {
    return cartProducts.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
  };

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-6">
        <Link to="/my-orders" className="absolute left-0">
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
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </Link>

        <h1>My Order</h1>
      </div>

      {context.order && context.order.length > 0 ? (
        <div>
          <div className="flex flex-col w-[80%]">
            {context.order?.[index]?.products.map((product) => (
              <OrderCard
                key={product.id}
                id={product.id}
                title={product.title}
                imageUrl={product.images}
                price={product.price}
                quantity={product.quantity}
              />
            ))}
          </div>
          <h4>
            Total a pagar: ${totalPrice(context.order.slice(-1)[0]?.products)}
          </h4>
        </div>
      ) : (
        <p>No hay productos en la orden aún.</p>
      )}
    </Layout>
  );
}

export default MyOrder;
