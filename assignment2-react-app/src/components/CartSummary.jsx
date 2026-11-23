
// Displays Cart Total, Tax, Shipping and Checkout Button
const CartSummary = (props) => {
    return (
        <section className="cart-summary">
            <h2>Summary</h2>
            <p>Merchandise: ${props.merchandise.toFixed(2)}</p>
            <p>Shipping: ${props.shipping.toFixed(2)}</p>
            <p>Tax: ${props.tax.toFixed(2)}</p>
            <p><strong>Total: ${props.total.toFixed(2)}</strong></p>
            <button onClick={props.handleCheckout} disabled={props.disabled}>
                Checkout
            </button>
        </section>
    );
};

export default CartSummary;