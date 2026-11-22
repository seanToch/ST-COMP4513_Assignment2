import ProductItem from './ProductItem';

//Creates a Grid of Product Item Results Based On the Filters. Msg If No Results
const ProductGrid = ({ products }) => {
    let content;

    if (products.length === 0) {
        content = <p>No products match your filters.</p>;
    } else {
        content = products.map(product => (
            <ProductItem key={product.id} product={product} />
        ));
    }

    return <div className="product-grid">{content}</div>;
};

export default ProductGrid;