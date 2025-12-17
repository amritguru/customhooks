import useFetch from "../hooks/useFetch";
import "./Product.css";

const Products = () => {
  const { data, loading, error } = useFetch("https://api.escuelajs.co/api/v1/products");

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="products">
      <h2>Products</h2>
      <div className="product-list">
        {data.slice(0, 10).map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.images[0]} alt={product.title} />
            <h4>{product.title}</h4>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
