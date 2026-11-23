// Import Tools
import { useState, useContext } from 'react';
import { ProductsContext } from '../context/ProductsContext';

// Import Components
import ProductGrid from '../components/ProductGrid.jsx';
import BrowsePages from '../components/BrowsePages.jsx';
import SortSelector from '../components/SortSelector.jsx';
import FilterPanel from '../components/FilterPanel.jsx';

// Number Of Products Shown Per Page
const ProductsPerPage = 25;


// Cleared Filters Object
const emptyFilters = {
    name: '',
    categories: [],
    ratings: [],
    priceUnder: '',
    priceOver: ''
};


const Browse = () => {
    //Product Context
    const { products } = useContext(ProductsContext);

    // Page State
    const [currentPage, setCurrentPage] = useState(1);

    // Sort Option State
    const [sortBy, setSortBy] = useState('name');

    // Filter State Holding An Object With All Filters
    const [filters, setFilters] = useState(emptyFilters);


    // Filter Products
    const filteredProducts = products.filter(product => {
        if (filters.priceUnder !== '' && product.price >= Number(filters.priceUnder)) {
            return false;
        }
        if (filters.priceOver !== '' && product.price <= Number(filters.priceOver)) {
            return false;
        }
        return true;
    });



    // Copy The Filtered Array So Sorting Never Impacts it
    const sortedProducts = [...filteredProducts];


    // Sort The List By The Chosen Option
    if (sortBy === 'name') {
        sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === 'price') {
        sortedProducts.sort((a, b) => a.price - b.price);
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

    // Set One Filter To A New Value (Name, Price Under, Price Over) And Go Back To Page 1
    const updateFilters = (filterName, newValue) => {
        setFilters({ ...filters, [filterName]: newValue });
        setCurrentPage(1);
    };


    // Reset Every Filter. The Sort Order Is Left Alone
    const handleClearAll = () => {
        setFilters(emptyFilters);
        setCurrentPage(1);
    };



        // Returns Filters, Sort Dropdown, Results Count And Product Grid
    return (
        <div className="browse">
            <h1>Browse</h1>

            <div className="browse-layout">
                <FilterPanel
                    currentFilters={filters}
                    updateFilters={updateFilters}
                />

                <div className="browse-results">
                    <SortSelector sortBy={sortBy} handleSortChange={handleSortChange} />

                    <div className="results-bar">
                        <span>Results: {sortedProducts.length}</span>
                        <button onClick={handleClearAll}>Clear All</button>
                    </div>

                    <ProductGrid products={displayedProducts} />
                    <BrowsePages
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage}
                    />
                </div>
            </div>
        </div>
    );
};

export default Browse;