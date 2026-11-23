// Import Tools
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

// Import Components
import CartItemRow from '../components/CartItemRow.jsx';
import ShippingOptions from '../components/ShippingOptions.jsx';
import CartSummary from '../components/CartSummary.jsx';
import ConfirmDialog from '../components/ConfirmDialog.jsx';

// Shipping Cost By Method, Then By Destination
const shippingRates = {
    Standard: { 'Canada': 10, 'United States': 15, 'International': 20 },
    Express:  { 'Canada': 25, 'United States': 25, 'International': 30 },
    Priority: { 'Canada': 35, 'United States': 50, 'International': 50 }
};


const ShoppingCart = () => {
    // Cart Context
    const { cart, removeFromCart, clearCart } = useContext(CartContext);

    // Navigation For Returning Home
    const navigate = useNavigate();

    // Shipping Choice States
    const [method, setMethod] = useState('Standard');
    const [destination, setDestination] = useState('Canada');

    // Item To Be Deleted State
    const [itemToDelete, setItemToDelete] = useState(null);


    // Check If Cart Is Empty
    const isEmpty = cart.length === 0;


    // Count Out Total Cost
    let merchandise = 0;
    cart.forEach(item => {
        merchandise = merchandise + item.price * item.quantity;
    });


    // If Cart Is Empty OR Over 500, Shipping Is Free
    let shipping = shippingRates[method][destination];
    if (isEmpty || merchandise > 500) {
        shipping = 0;
    }


    // Tax If Shipping To Canada
    let tax = 0;
    if (destination === 'Canada') {
        tax = merchandise * 0.05;
    }


    // Final Total
    const total = merchandise + shipping + tax;


    // Remove Item From Cart
    const handleConfirmDelete = () => {
        removeFromCart(itemToDelete.id);
        setItemToDelete(null);
    };


    // Checkout: Alert, Empty The Cart, Go To Home
    const handleCheckout = () => {
        alert('Order placed. Thank you!');
        clearCart();
        navigate('/');
    };


    // Confirm Delete MEssage
    let dialogMessage = '';
    if (itemToDelete !== null) {
        dialogMessage = `Remove ${itemToDelete.title} from your cart?`;
    }


    // Cart Markup Contents
    let itemsContent;

    if (isEmpty) {
        itemsContent = <p>Your cart is empty.</p>;
    } else {
        itemsContent = (
            <table className="cart-table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Items</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map(item => (
                        <CartItemRow
                            key={item.id}
                            item={item}
                            handleDeleteClick={setItemToDelete}
                        />
                    ))}
                </tbody>
            </table>
        );
    }


    return (
        <div className="shopping-cart">
            <h1>Shopping Cart</h1>

            {itemsContent}

            <div className="cart-bottom">
                <ShippingOptions
                    method={method}
                    destination={destination}
                    methods={Object.keys(shippingRates)}
                    destinations={Object.keys(shippingRates.Standard)}
                    handleMethodChange={setMethod}
                    handleDestinationChange={setDestination}
                    disabled={isEmpty}
                />

                <CartSummary
                    merchandise={merchandise}
                    shipping={shipping}
                    tax={tax}
                    total={total}
                    handleCheckout={handleCheckout}
                    disabled={isEmpty}
                />
            </div>

            <ConfirmDialog
                open={itemToDelete !== null}
                message={dialogMessage}
                onConfirm={handleConfirmDelete}
                onCancel={() => setItemToDelete(null)}
            />
        </div>
    );
};

export default ShoppingCart;