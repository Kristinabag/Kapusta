import ReactDom from 'react-dom';

function ModalWardrobe({ children }) {
  return ReactDom.createPortal(
    <>
      {children}
    </>,
    document.getElementById('portal'),
  );
}

export default ModalWardrobe;
