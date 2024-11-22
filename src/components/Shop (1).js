import { useEffect, useState } from "react";
import Product from "./Product";
import { CircularProgress } from "@mui/material";
import { Link } from "react-router-dom"; 

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      const response = await fetch(
        "https://dummyjson.com/products/category/womens-bags?limit=12&select=id,thumbnail,title,price,description"
      );
      if (response.ok) {
        const result = await response.json();
        setProducts(result.products);
      } else {
        setError("Fetch FAILED!");
      }
      setLoading(false);
    }

    fetchProducts();
  }, []);

  const addToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart)); 
  };

  return (
    <section id="shop">
      <h2>Elegant Products for Everyone</h2>

      <ul id="products">
        {error && <p>{error}</p>}
        {!loading && products ? (
          products.map((product) => (
            <li key={product.id}>
              <Product {...product} addToCart={addToCart} />
            </li>
          ))
        ) : (
          <div id="loading">
            <CircularProgress size="10rem" color="inherit" />
            <p>Loading products...</p>
          </div>
        )}
      </ul>

      {}
      <Link to="/cart">
        <button id="go-to-cart">Go to Cart ({cart.length} items)</button>
      </Link>
    </section>
  );
}
