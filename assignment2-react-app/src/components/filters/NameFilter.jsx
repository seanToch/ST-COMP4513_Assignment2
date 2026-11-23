
// Input Field For Name Filter
const NameFilter = (props) => {

    return (
        <details open>
            <input
                type="text"
                value={props.name}
                placeholder="Search by name"
                onChange={e => props.updateFilter('name', e.target.value)}
            />
        </details>
    );
};

export default NameFilter;