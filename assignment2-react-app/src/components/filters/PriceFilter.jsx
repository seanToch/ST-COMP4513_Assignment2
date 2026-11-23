
//
const PriceFilter = (props) => {

    return (
        <details>
            <label>
                Under $
                <input
                    type="number"
                    min="0"
                    value={props.priceUnder}
                    onChange={e => props.updateFilter('priceUnder', e.target.value)}
                />
            </label>
            <label>
                Over $
                <input
                    type="number"
                    min="0"
                    value={props.priceOver}
                    onChange={e => props.updateFilter('priceOver', e.target.value)}
                />
            </label>
        </details>
    );
};

export default PriceFilter;