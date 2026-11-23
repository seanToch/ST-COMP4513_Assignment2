// Import Tools
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductsContext } from '../context/ProductsContext';

// Import Components
import ProductGrid from '../components/ProductGrid.jsx';

// Home View
const Home = () => {
    // Product Context
    const { products } = useContext(ProductsContext);

    // Copy The First Chunk OF Products 
    const featuredProducts = products.slice(0, 4);


    return (
        <div className="home">

            <section className="hero">
                <h1>Welcome to Summit Supply Company</h1>
                <p>Shop High Altitude Products At Low Altitude Prices</p>
                <Link to="/browse">
                    <button>Explore</button>
                </Link>
            </section>

            <section className="featured">
                <h2>Featured Products</h2>
                        <ProductGrid products={featuredProducts} />
            </section>

        </div>
    );
};

export default Home;