import { useEffect, useRef } from 'react';

//Content and control of the ABOUT dialog box
const AboutDialog = ({ open, onClose }) => {
  const dialogRef = useRef(null);

  // Sync the open prop with the native <dialog> element
  useEffect(() => {
  if (open) {
    dialogRef.current.showModal();
  } else {
    dialogRef.current.close();
  }
}, [open]);

  //Return Content and Close button
  return (
    <dialog ref={dialogRef} onClose={onClose} onClick={(e) => { if (e.target === dialogRef.current) onClose(); }}>
      <h1>About</h1>
      <button onClick={onClose}>Close</button>
    </dialog>
  );
};

export default AboutDialog;