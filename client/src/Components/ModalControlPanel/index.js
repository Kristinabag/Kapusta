import ReactDom from 'react-dom';

function ModalControlPanel({ children }) {
  return ReactDom.createPortal(
    <>
      {children}
    </>,
    document.getElementById('portal'),
  );
}

export default ModalControlPanel;
