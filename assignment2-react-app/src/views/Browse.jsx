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

// Browse Function
const Browse = () => {
    // Product Context
    const { products } = useContext(ProductsContext);

    // Page State
    const [currentPage, setCurrentPage] = useState(1);

    // Sort Option State
    const [sortBy, setSortBy] = useState('name');

    // Filter State Holding An Object With All Filters
    const [filters, setFilters] = useState(emptyFilters);


    // Set of Categories To Be Used For Filtering
    const categorySet = new Set();

    // Search Through Data And Add Categories
    products.forEach(product => categorySet.add(product.category));

    // Sort Category Set
    const categories = [...categorySet].sort();


    // Filter Product List
    const filteredProducts = products.filter(product => {

        // Check Which Filters Are Active
        const nameIsUsed = filters.name !== '';
        const categoryIsUsed = filters.categories.length > 0;
        const ratingIsUsed = filters.ratings.length > 0;
        const underIsUsed = filters.priceUnder !== '';
        const overIsUsed = filters.priceOver !== '';

        // Check If Product Matches Filters
        const nameMatches = product.title.toLowerCase().includes(filters.name.toLowerCase());
        const categoryMatches = filters.categories.includes(product.category);
        const ratingMatches = filters.ratings.includes(Math.floor(product.rating));
        const underMatches = product.price < Number(filters.priceUnder);
        const overMatches = product.price > Number(filters.priceOver);

        // Check If Both True
        if (nameIsUsed && !nameMatches) {
            return false;
        }
        if (categoryIsUsed && !categoryMatches) {
            return false;
        }
        if (ratingIsUsed && !ratingMatches) {
            return false;
        }
        if (underIsUsed && !underMatches) {
            return false;
        }
        if (overIsUsed && !overMatches) {
            return false;
        }

        // Passed every filter that is on
        return true;
    });



    // Copy The Filtered Array So Sorting Never Impacts it
    const sortedProducts = [...filteredProducts];


    // Sort The List By The Chosen Option
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

    // Set One Filter To A New Value (Name, Price Under, Price Over) And Go Back To Page 1
    const updateFilters = (filterName, newValue) => {
        setFilters({ ...filters, [filterName]: newValue });
        setCurrentPage(1);
    };


    // Add Or Remove One Filter And Returns To Page 1
    const toggleFilterItem = (filterName, item) => {
        const currentList = filters[filterName];
        let newList;

        if (currentList.includes(item)) {
            newList = currentList.filter(existing => existing !== item);
        } else {
            newList = [...currentList, item];
        }

        setFilters({ ...filters, [filterName]: newList });
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
                    categories={categories}
                    updateFilters={updateFilters}
                    toggleFilterItem={toggleFilterItem}
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