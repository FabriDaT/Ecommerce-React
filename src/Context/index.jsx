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
    // Get Products by Category
   const [category, setCategory] = useState(null);
   


   const apiUrl = "https://fakestoreapi.com/products"
  
  useEffect(() => {
    // Función para obtener productos por categoría
    const fetchProducts = async () => {
      try {
        const url = category 
          ? `${apiUrl}/category/${encodeURIComponent(category)}`
          : apiUrl;
        
        const response = await fetch(url);
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [category]); // Se ejecuta cuando cambia la categoría


  const filteredItemsByTitle = (items, searchText) => {
    return items?.filter(item => 
      item.title.toLowerCase().includes(searchText?.toLowerCase() || "") &&
      (!category || item.category === category) // Filtro combinado
    );
  };


console.log('filtered :' , filteredItems)

useEffect(() => {
  if (items) {
    const filtered = filteredItemsByTitle(items, searchByTitle);
    setFilteredItems(filtered);
  }
}, [searchByTitle, items, category]);

  return (
    <ShoppingCartContext.Provider  
      value={{
        count, setCount, openProductDetail, closeProductDetail, isProductDetailOpen, productToShow, setProductToShow,
        cartProducts, setCartProducts,isCheckoutSideMenuOpen, openCheckoutSideMenu, closeCheckoutSideMenu,
        order, setOrder, items, setItems , searchByTitle ,setSearchByTitle, filteredItems, setFilteredItems,
        category, setCategory,
        categories: ["electronics", "jewelery", "men's clothing", "women's clothing"]
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
