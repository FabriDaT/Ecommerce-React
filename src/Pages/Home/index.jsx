import React, { useContext } from "react";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";
import { ShoppingCartContext } from "../../Context";
import { useParams } from "react-router-dom";

function Home() {
  const context = useContext(ShoppingCartContext);
  const {category} = useParams()

  const renderView = () => {
    // Primero filtramos por categoría
    let filteredItems = category && category !== 'all'
      ? context.items.filter(item => 
          item.category?.toLowerCase() === category.toLowerCase()
        )
      : context.items;

    // Luego aplicamos el filtro de búsqueda
    if (context.searchByTitle?.length > 0) {
      filteredItems = filteredItems.filter(item => 
        item.title.toLowerCase().includes(context.searchByTitle.toLowerCase())
      );
    }

    if (!filteredItems?.length) {
      return <p className="text-gray-500">No results found.</p>;
    }

    return filteredItems.map((item) => <Card key={item.id} data={item} />);
  };

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-4">
        <h1 className="font-medium text-2xl">Exclusive Products</h1>
      </div>
      <div className="relative w-full max-w-md mb-8">
        <input
          type="text"
          placeholder="Search a product.."
          className="w-full p-2 pl-4 pr-10 border border-gray-300 rounded-lg outline-none"
          onChange={(event) => context.setSearchByTitle(event.target.value)}
        />
        <svg
          className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </div>

      <div className="flex items-center justify-center">
         <section className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-screen-lg mx-auto">
        {renderView()}
      </section>
      </div>
     
      <ProductDetail />

    </Layout>
  );
}

export default Home;
