import React, { useContext } from "react";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";
import { ShoppingCartContext } from "../../Context";

function Home() {
  const context = useContext(ShoppingCartContext);

  // const renderView = () => {
  //   if (context.searchByTitle?.length > 0) {
  //     if (context.filteredItems?.length > 0) {
  //       return context.filteredItems?.map((item) => (
  //         <Card key={item.id} data={item} />
  //       ));
  //     }
  //   }
  //      else {
  //       return (  <div> dont find any products...</div>)
  //      }
  // else {
  //     return context.items?.map((item) => <Card key={item.id} data={item} />);
  //   }
  // };

  const renderView = () => {
    const itemsToRender = context.searchByTitle?.length > 0
      ? context.filteredItems
      : context.items;

    if (itemsToRender?.length > 0) {
      return itemsToRender.map(item => (
        <Card key={item.id} data={item} />
      ));
    } else {
      return <p>No Results Found</p>;
    }
  };

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-4">
        <h1 className="font-medium text-2xl">Exclusive Products</h1>
      </div>
      <div className="flex items-center justify-center relative mb-4 w-160">
        <svg
          className="size-6 m-1"
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

        <input
          type="text"
          placeholder="Search a product.."
          id="search bar"
          className="rounded-lg border border-black w-80 p-4 mb-4"
          onChange={(event) => context.setSearchByTitle(event.target.value)}
        />
      </div>

      <section className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {renderView()}
      </section>
      <ProductDetail />
    </Layout>
  );
}

export default Home;
