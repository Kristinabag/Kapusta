import ReactDom from 'react-dom';

function ModalContacts({ children }) {
  return ReactDom.createPortal(
    <>
      {children}
    </>,
    document.getElementById('portal'),
  );
}

export default ModalContacts;
