import { useState } from 'react';
import SpecsTab from './SpecsTab.jsx';
import ReviewsTab from './ReviewsTab.jsx';

// Displays the Two Swapable Tabs Under The Product
const ProductTabs = (props) => {
    const [activeTab, setActiveTab] = useState('specs');

    let tabContent;

    if (activeTab === 'specs') {
        tabContent = <SpecsTab product={props.product} />;
    } else {
        tabContent = <ReviewsTab reviews={props.product.reviews} />;
    }

    // Number Of Reviews Shown On The Reviews Button
    const reviewCount = props.product.reviews.length;

    // Toggles Between The Two Tabs
    return (
        <section className="product-tabs">
            <div className="tab-buttons">
                <button className="tab-btn" onClick={() => setActiveTab('specs')}>
                    Specifications
                </button>
                <button className="tab-btn" onClick={() => setActiveTab('reviews')}>
                    Reviews ({reviewCount})
                </button>
            </div>

            <div className="tab-content">{tabContent}</div>
        </section>
    );
};

export default ProductTabs;