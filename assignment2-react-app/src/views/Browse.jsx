// Import Tools
import { useContext } from 'react';
import { ProductsContext } from '../context/ProductsContext';

// Import Components
import ProductGrid from '../components/ProductGrid';

//PLACEHOLDER
const Browse = () => {
    const { products } = useContext(ProductsContext);

    return (
        <div>
            <h1>Browse</h1>
            <ProductGrid products={products} />
        </div>
    );
};

export default Browse;