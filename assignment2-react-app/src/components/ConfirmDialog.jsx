import { useEffect, useRef } from 'react';

// Confirms Removal Of an Items From The Cart
const ConfirmDialog = (props) => {
    const dialogRef = useRef(null);

    useEffect(() => {
        if (props.open) {
            dialogRef.current.showModal();
        } else {
            dialogRef.current.close();
        }
    }, [props.open]);

    return (
        <dialog ref={dialogRef} onClose={props.onCancel}>
            <p>{props.message}</p>
            <button onClick={props.onConfirm}>Yes, remove</button>
            <button onClick={props.onCancel}>Cancel</button>
        </dialog>
    );
};

export default ConfirmDialog;