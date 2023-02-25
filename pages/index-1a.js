// option 1a: fetchproducts on the server side (in getStaticProps)

import Head from "next/head";
import Title from "../components/Title";
import { getProducts } from "../lib/products";

const products = [
  { id: 1, title: "first product" },
  { id: 2, title: "second product" },
];

export async function getStaticProps() {
  console.log("[Homepage] getStaticProps");
  const products = await getProducts();
  return { props: { products } };
}

export default function HomePage({ products }) {
  console.log("[Homepage] ", products);
  return (
    <>
      <Head>
        <title>Next Shop</title>
      </Head>
      <main className="px-6 py-4">
        <Title>Next Shop</Title>
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      </main>
    </>
  );
}
