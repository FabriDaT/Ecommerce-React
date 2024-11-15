import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {

  // Shopping cart Increment Quantity
  const [count, setCount] = useState(0)

  // Open-close Product Detail
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false) 
  const openProductDetail = () => setIsProductDetailOpen(true)
  const closeProductDetail = () => setIsProductDetailOpen(false)
  
  // Open close Checkout Side Menu
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false) 
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)


  // Product Detail - Show Product
  const [productToShow, setProductToShow] = useState({}) 

  // Shooping cart - Add products to cart
  const [cartProducts, setCartProducts] = useState([]) 

  // Shooping cart - Order
  const [order, setOrder] = useState([]) 

   

  return (
    <ShoppingCartContext.Provider  
      value={{
        count, setCount, openProductDetail, closeProductDetail, isProductDetailOpen, productToShow, setProductToShow,
        cartProducts, setCartProducts,isCheckoutSideMenuOpen, openCheckoutSideMenu, closeCheckoutSideMenu,
        order, setOrder
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
