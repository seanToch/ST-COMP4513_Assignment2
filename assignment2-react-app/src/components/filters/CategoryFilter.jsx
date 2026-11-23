
// Input Field For Category Filter
const CategoryFilter = (props) => {

    return (
        <details>
            {props.categories.map(category => (
                <label key={category} className={props.selected.includes(category) ? 'filter-active' : ''}>
                    <input
                        type="checkbox"
                        checked={props.selected.includes(category)}
                        onChange={() => props.toggleFilterItem('categories', category)}
                    />
                    {category}
                </label>
            ))}
        </details>
    );
};

export default CategoryFilter;