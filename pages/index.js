import { client } from '../sanity/sanity';

export async function getServerSideProps() {
  const products = await client.fetch('*[_type == "product"]');
  return {
    props: {
      products,
    },
  };
}

export default function Home({ products }) {
  return (
    <div>
      <h1>Be‑U Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product._id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
}