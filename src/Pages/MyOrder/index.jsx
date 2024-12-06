import React from 'react'
import Layout from '../../Components/Layout'
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import OrderCard from '../../Components/OrderCard';
import { totalPrice } from "../../utils";

function MyOrder() {

  const context = useContext(ShoppingCartContext);

  return (
    
    <Layout>   MyOrder
 
  {   context.order && context.order.length > 0 ? 
     <div className="flex flex-col w-[80%]">
        {context.order?.slice(-1)[0]?.products.map((product) => (
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
      : <p>No hay productos en la orden.</p>}
        <h4>${totalPrice(context.cartProducts)}</h4>
    </Layout>
  )
}

export default MyOrder