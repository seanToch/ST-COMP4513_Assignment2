// Import Tools
import { useState } from 'react';


const AddToCart = (props) => {
    const [quantity, setQuantity] = useState(1);

    // Check If Its An Integer Above 1 Then Call AddToCArt Handler
    const onAddClick = () => {
        const amount = Math.floor(Number(quantity));

        if (amount >= 1) {
            props.handleAddToCart(amount);
        }
    };

    // Returns Add To Cart Input and Button
    return (
        <div className="add-to-cart">
            <label>
                Quantity
                <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={e => setQuantity(e.target.value)}
                />
            </label>
            <button onClick={onAddClick} disabled={!props.inStock}>+ Add to Cart</button>
        </div>
    );
};

export default AddToCart;