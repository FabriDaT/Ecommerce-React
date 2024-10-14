import React, { useState, useEffect } from "react";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";

function Home() {

  const apiUrl = "https://api.escuelajs.co/api/v1/products";
  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch(apiUrl)
      .then((responde) => responde.json())
      .then((data) => setItems(data))
      .catch((error) =>
        console.error(`Ups! Ocurrio el siguiente error: ${error}`)
      );
  }, []);

  return (
    <Layout>
      HOME HOME HOME HOME HOME HOME
      <section className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {items?.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </section>
      <ProductDetail />
    </Layout>
  );
}

export default Home;
