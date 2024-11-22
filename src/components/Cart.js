import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart)); 
    }
  }, []);

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); 
  };

  const total = cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  return (
    <section id="cart">
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <ul>
          {cartItems.map((product) => (
            <li key={product.id} className="cart-item">
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <h3>{product.title}</h3>
                <p>Price: ${product.price}</p>
                <button onClick={() => removeFromCart(product.id)}>
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <div id="cart-total">
        <h3>Total: ${total}</h3>
      </div>

      {}
      <Link to="/">
        <button>Continue Shopping</button>
      </Link>
    </section>
  );
}
