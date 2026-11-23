//Import Components
import ProductRating from './ProductRating.jsx';


const ProductInfo = (props) => {
    let stockMessage;

    // If In-Stock Display That Amount Otherwise Out Of Stock
    if (props.product.stock > 0) {
        stockMessage = `In stock (${props.product.stock} available)`;
    } else {
        stockMessage = 'Out of stock';
    }

    // ReturnsInfo With The Rating
    return (
        <div className="product-info">
            <h1>{props.product.title}</h1>
            <p className="price">${props.product.price.toFixed(2)}</p>
            <p>SKU: {props.product.sku} </p>
            <p><ProductRating rating={props.product.rating} /> ({props.product.rating})</p>

            <ul className="tags">
                {props.product.tags.map(tag => (
                    <li key={tag} className="tag">{tag}</li>
                ))}
            </ul>

            <p><strong>{stockMessage}</strong></p>
            <p>{props.product.description}</p>
        </div>
    );
};

export default ProductInfo;