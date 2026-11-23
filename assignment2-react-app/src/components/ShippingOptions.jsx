
// Dropdowns to select Shipping Option and Destination
const ShippingOptions = (props) => {
    return (
        <section className="shipping-options">
            <h2>Shipping</h2>

            <label>
                Method
                <select
                    value={props.method}
                    onChange={e => props.handleMethodChange(e.target.value)}
                    disabled={props.disabled}
                >
                    {props.methods.map(name => (
                        <option key={name} value={name}>{name}</option>
                    ))}
                </select>
            </label>

            <label>
                Destination
                <select
                    value={props.destination}
                    onChange={e => props.handleDestinationChange(e.target.value)}
                    disabled={props.disabled}
                >
                    {props.destinations.map(name => (
                        <option key={name} value={name}>{name}</option>
                    ))}
                </select>
            </label>
        </section>
    );
};

export default ShippingOptions;