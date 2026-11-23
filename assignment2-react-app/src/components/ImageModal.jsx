// Import Tools
import { useEffect, useRef } from 'react';


// Returns Modal Dialog Box
const ImageModal = (props) => {
    const dialogRef = useRef(null);

    useEffect(() => {
        if (props.open) {
            dialogRef.current.showModal();
        } else {
            dialogRef.current.close();
        }
    }, [props.open]);

    return (
        <dialog ref={dialogRef} onClose={props.onClose}>
            <button onClick={props.onClose} aria-label="Close">&times;</button>
            <img src={props.image} />
        </dialog>
    );
};

export default ImageModal;