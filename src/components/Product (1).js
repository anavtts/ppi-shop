export default function Product({ id, title, price, thumbnail, addToCart }) {
    return (
        <div className="product">
            <img src={thumbnail} alt={title} />
            <h3>{title}</h3>
            <p>{`$${price.toFixed(2)}`}</p> {}
            
            {}
            <button onClick={() => addToCart({ id, title, price, thumbnail })}>
                Add to Cart
            </button>
        </div>
    );
}
