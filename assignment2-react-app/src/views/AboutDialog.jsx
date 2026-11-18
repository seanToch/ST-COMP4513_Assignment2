import { useEffect, useRef } from 'react';

// Dialog Box Function
const AboutDialog = (props) => {
  const dialogRef = useRef(null);

  // If Open state is true, show modal else hide the box
  useEffect(() => {
    if (props.open) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [props.open]);

  // Return Dialog Markup 
  return (
    <dialog ref={dialogRef} onClose={props.onClose}>
      <button onClick={props.onClose} aria-label="Close">&times;</button>

      <h1>About</h1>
     
      <p>ABOUT INFO</p>

      <button onClick={props.onClose}>Close</button>
    </dialog>
  );
};

export default AboutDialog;