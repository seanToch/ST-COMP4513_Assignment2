import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

// PLACEHOLDER
const ShoppingCart = () => {
    const { cart } = useContext(CartContext);

    console.log(cart);
    
    let content;

    if (cart.length === 0) {
        content = <p>Your cart is empty.</p>;
    } else {
        content = (
            <ul>
                {cart.map(item => (
                    <li key={item.id}>
                        <img src={item.thumbnail} alt={item.title} width="60" />
                        {item.title} - ${item.price.toFixed(2)} x {item.quantity}
                    </li>
                ))}
            </ul>
        );
    }

    return (
        <div>
            <h1>Shopping Cart</h1>
            {content}
        </div>
    );
};

export default ShoppingCart;