
// DropDown Selector To Change Sorting Option
const SortSelector = (props) => {
    return (
        <label>
            Sort:{' '}
            <select value={props.sortBy} onChange={e => props.handleSortChange(e.target.value)}>
                <option value="name">Product Name</option>
                <option value="price">Price</option>
                <option value="category">Category</option>
            </select>
        </label>
    );
};

export default SortSelector;