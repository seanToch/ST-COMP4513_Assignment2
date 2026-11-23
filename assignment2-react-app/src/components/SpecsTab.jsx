// Pull From The Data Fields To Display Specs
const SpecsTab = (props) => {

    return (
        <ul className="specs">
            <li><strong>Weight:</strong> {props.product.weight} kg</li>
            <li>
                <strong>Dimensions:</strong> {props.product.dimensions.width} x {props.product.dimensions.height} x {props.product.dimensions.depth} cm
            </li>
            <li><strong>Warranty:</strong> {props.product.warrantyInformation}</li>
            <li><strong>Shipping:</strong> {props.product.shippingInformation}</li>
            <li><strong>Return policy:</strong> {props.product.returnPolicy}</li>
        </ul>
    );
};

export default SpecsTab;