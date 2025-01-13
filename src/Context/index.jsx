import { createContext, useState, useEffect } from "react";

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

   // Get Products
   const [items, setItems] = useState(null);
   const [filteredItems, setFilteredItems] = useState(null);
   // Get Products by Title
   const [searchByTitle, setSearchByTitle] = useState(null);
   //Get Products by Category
   const [searchByCategory, setSearchByCategory] = useState(null);
   

   const apiUrl = "https://api.escuelajs.co/api/v1/products"
   useEffect(() => {
    fetch(apiUrl)
      .then((responde) => responde.json())
      .then((data) => setItems(data))
      .catch((error) =>
        console.error(`Ups! Ocurrio el siguiente error: ${error}`)
      );
  }, []);

  const filteredItemsByTitle = (items, searchByTitle) =>{
    return items?.filter( item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
  }
  const filteredItemsByCategory = (items, searchByCategory) =>{
    return items?.filter( item => item.category.toLowerCase().includes(searchByCategory.toLowerCase()))
  }

  useEffect (() =>  {
    if(searchByTitle) setFilteredItems(filteredItemsByTitle(items, searchByTitle))
  }, [items, searchByTitle])


  return (
    <ShoppingCartContext.Provider  
      value={{
        count, setCount, openProductDetail, closeProductDetail, isProductDetailOpen, productToShow, setProductToShow,
        cartProducts, setCartProducts,isCheckoutSideMenuOpen, openCheckoutSideMenu, closeCheckoutSideMenu,
        order, setOrder, items, setItems , searchByTitle ,setSearchByTitle, filteredItems, setFilteredItems,
        searchByCategory, setSearchByCategory
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
