// Import Tools
import { useState, useContext } from 'react';
import { ProductsContext } from '../context/ProductsContext';

// Import Components
import ProductGrid from '../components/ProductGrid';
import BrowsePages from '../components/BrowsePages';

// Number Of Products Shown Per Page
const ProductsPerPage = 25;


const Browse = () => {
    const { products } = useContext(ProductsContext);
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate Number Of Pages Using product Total and Per Page Numbers
    const totalPages = products.length / ProductsPerPage;


    // Uses Page Num and Per Page Numbers To Calculate First Item Index For The Page
    const firstIndex = (currentPage - 1) * ProductsPerPage;


    // Copies a Chunk Of The Array Out Using The Index and Index + Per Page Numbers
    const displayedProducts = products.slice(firstIndex, firstIndex + ProductsPerPage);


    //Returns Product Grid With The Chunk Of Array Passed Into It
    return (
        <div>
            <h1>Browse</h1>
            <ProductGrid products={displayedProducts} />
            <BrowsePages
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />
        </div>
    );
};

export default Browse;