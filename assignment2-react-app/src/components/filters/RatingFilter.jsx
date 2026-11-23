// Options For Ratings
const starOptions = [1, 2, 3, 4, 5];

// Input Fields For Ratings Filter
const RatingFilter = (props) => {

    return (
        <details>
            {starOptions.map(stars => (
                <label key={stars} className={props.selected.includes(stars) ? 'filter-active' : ''}>
                    <input
                        type="checkbox"
                        checked={props.selected.includes(stars)}
                        onChange={() => props.toggleFilterItem('ratings', stars)}
                    />
                    {'★'.repeat(stars)}
                </label>
            ))}
        </details>
    );
};

export default RatingFilter;