// Import Tools
import { useState, useContext } from 'react';
import { ProductsContext } from '../context/ProductsContext';

// Import Components
import ProductGrid from '../components/ProductGrid.jsx';
import BrowsePages from '../components/BrowsePages.jsx';
import SortSelector from '../components/SortSelector.jsx';

// Number Of Products Shown Per Page
const ProductsPerPage = 25;


const Browse = () => {
    //Product Context
    const { products } = useContext(ProductsContext);

    // Page State
    const [currentPage, setCurrentPage] = useState(1);

    // Sort Option State
    const [sortBy, setSortBy] = useState('name');


    // Copy The Array So Sorting Never Changes The Shared Products
    const sortedProducts = [...products];


    // Sort The Whole List (Before Slicing) By The Chosen Option
    if (sortBy === 'name') {
        sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === 'price') {
        sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'category') {
        sortedProducts.sort((a, b) => a.category.localeCompare(b.category));
    }


    // Calculate Number Of Pages Using Product Total And Per Page Numbers (Rounded Up)
    const totalPages = Math.ceil(sortedProducts.length / ProductsPerPage);


    // Uses Page Num And Per Page Numbers To Calculate First Item Index For The Page
    const firstIndex = (currentPage - 1) * ProductsPerPage;


    // Copies A Chunk Of The Sorted Array Out Using The Index And Index + Per Page Numbers
    const displayedProducts = sortedProducts.slice(firstIndex, firstIndex + ProductsPerPage);


    // Changing The Sort Order Sends The User Back To Page 1
    const handleSortChange = (newSort) => {
        setSortBy(newSort);
        setCurrentPage(1);
    };


    // Returns Sort Dropdown And Product Grid With The Chunk Of Array Passed Into It
    return (
        <div>
            <h1>Browse</h1>
            <SortSelector sortBy={sortBy} handleSortChange={handleSortChange} />
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