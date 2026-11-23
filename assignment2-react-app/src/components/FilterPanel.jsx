// Import Filter Functions
// import NameFilter from './filters/NameFilter.jsx';
// import CategoryFilter from './filters/CategoryFilter.jsx';
// import RatingFilter from './filters/RatingFilter.jsx';
import PriceFilter from './filters/PriceFilter.jsx';


// Side Filter That Holds All Filter Controls
const FilterPanel = (props) => {
    return (
        <aside className="filter-panel">
            <h2>Filter</h2>
            <PriceFilter
                priceUnder={props.currentFilters.priceUnder}
                priceOver={props.currentFilters.priceOver}
                updateFilter={props.updateFilters}
            />
        </aside>
    );
};

export default FilterPanel;