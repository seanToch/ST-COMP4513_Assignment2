// Import Tools
import { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductsContext } from '../context/ProductsContext';
import { CartContext } from '../context/CartContext';

// Import Components
import Breadcrumb from '../components/Breadcrumb.jsx';
import ProductImage from '../components/ProductImage.jsx';
import ProductInfo from '../components/ProductInfo.jsx';
import AddToCart from '../components/AddToCart.jsx';
import ProductTabs from '../components/ProductTabs.jsx';


const SingleProduct = () => {
    // Contexts
    const { products } = useContext(ProductsContext);
    const { addToCart } = useContext(CartContext);

    // Pulling ID from the URL and Finding Product
    const { id } = useParams();
    const product = products.find(item => item.id === Number(id));

    // Incorrect ID Error
    if (product === undefined) {
        return <p>Product not found.</p>;
    }

    // Calls addTOCart With This ProDuct And Chosen Quantity
    const handleAddToCart = (quantity) => {
        addToCart(product, quantity);
    };

    return (
        <div className="single-product">
            <Breadcrumb title={product.title} />

            <div className="product-top">
                <ProductImage image={product.images[0]} title={product.title} />

                <div className="product-details">
                    <ProductInfo product={product} />
                    <AddToCart inStock={product.stock > 0} handleAddToCart={handleAddToCart} />
                </div>
            </div>

            <ProductTabs product={product} />
        </div>
    );
};

export default SingleProduct;