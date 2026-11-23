// Import Tools
import { useState } from 'react';

// Import Components
import ImageModal from './ImageModal.jsx';

// Opens a Modal When Clicked
const ProductImage = (props) => {

    // Image Open/Closed State
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div className="product-image">
            <img
                src={props.image}
                onClick={() => setModalOpen(true)}
            />
            <ImageModal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                image={props.image}
                title={props.title}
            />
        </div>
    );
};

export default ProductImage;