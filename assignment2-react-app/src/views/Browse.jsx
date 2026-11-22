import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';

import { ProductsContext } from '../context/ProductsContext';
import { CartContext } from '../context/CartContext.jsx';

const Browse = (props) => {

    //Get Products and Cart Contexts
    const { products } = useContext(ProductsContext);
    const { cart, addToCart } = useContext(CartContext);

    return(
        <div>
            <NavLink to="/product/1">BROWSING</NavLink>
            <button onClick={() => addToCart(products[0])}>Test add</button>
        </div>
)}

export default Browse;