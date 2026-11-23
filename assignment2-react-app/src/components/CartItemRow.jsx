
// One Unique Item In The Cart
const CartItemRow = (props) => {
    const item = props.item;
    const subtotal = item.price * item.quantity;

    return (
        <tr>
            <td>
                <button
                    onClick={() => props.handleDeleteClick(item)}
                    aria-label={`Remove ${item.title}`}
                >
                    -
                </button>
            </td>
            <td>
                <img src={item.thumbnail} alt={item.title} width="60" />
                {item.title}
            </td>
            <td>${item.price.toFixed(2)}</td>
            <td>{item.quantity}</td>
            <td>${subtotal.toFixed(2)}</td>
        </tr>
    );
};

export default CartItemRow;