import React from 'react'
import Layout from '../../Components/Layout'
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import OrderCard from '../../Components/OrderCard';

function MyOrder() {

  const context = useContext(ShoppingCartContext);

  return (
    
    <Layout>MyOrder

   <div className="flex flex-col">
        {context.order?.slice(-1)[0].s.map((product) => (
          <OrderCard
            id={product.id}
            key={product.id} // use como 'key' el titulo ya que en la api se repiten los ID,
            // cosa que da un error en consola al mapear los productos y repetirse la key
            title={product.title}
            imageUrl={product.images}
            price={product.price}
            quantity={product.quantity}
           
          />
        ))}
      </div>

    </Layout>
  )
}

export default MyOrder