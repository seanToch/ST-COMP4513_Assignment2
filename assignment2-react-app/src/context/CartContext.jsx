import {useState, useEffect, createContext} from 'react'

export const CartContext = createContext(null);

// Local Storage Key
const STORAGE_KEY = 'cart';

// Provider Function
export const CartProvider = (props) => {

    // Create State with value in Local Storage
    const [cart, setCart] = useState(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        return saved ? JSON.parse(saved) : [];
    });

    // Save Cart To LOcal Storage On Change
    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    }, [cart]);

    // Add Product, If It's Already There Increase Quantity
    const addToCart = (product, quantity = 1) => {
        const existing = cart.find(item => item.id === product.id);

        if (existing) {
            existing.quantity += quantity;
            setCart([...cart]);
            return;
        }

        const newItem = {
            id: product.id,
            title: product.title,
            price: product.price,
            thumbnail: product.thumbnail,
            quantity: quantity
        };
        setCart([...cart, newItem]);
    };

    // Remove Item
    const removeFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    // Set Cart To Empty
    const clearCart = () => {
        setCart([]);
    };

    // Total number of units in the cart, for the header badge
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <CartContext.Provider value={{ cart, cartCount, addToCart, removeFromCart, clearCart }}>
            {props.children}
        </CartContext.Provider>
    );
}