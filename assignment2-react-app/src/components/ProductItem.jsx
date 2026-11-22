// Import Tools
import { useContext } from 'react';
import { Link } from 'react-router-dom';

// Import Context
import { CartContext } from '../context/CartContext';

// Item Component links to SingleProduct andincludes an AddToCArt Button
const ProductItem = ({ product }) => {
    const { addToCart } = useContext(CartContext);

    return (
        <article className="product-card">
            <Link to={`/product/${product.id}`}>
                <img src={product.thumbnail} alt={product.title} />
                <h3>{product.title}</h3>
            </Link>
            <p>${product.price.toFixed(2)}</p>
            <button onClick={() => addToCart(product)} aria-label={`Add ${product.title} to cart`}>Add To Cart</button>
        </article>
    );
};

export default ProductItem;