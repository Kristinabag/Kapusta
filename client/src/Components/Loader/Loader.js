import { useSelector } from 'react-redux';
import style from './style.module.css';

function Loader() {
  const show = useSelector((state) => state.loader);

  return (
    <>
      {
      show
      && (
      <div className={style.loaderWr}>
        <div className={style['lds-dual-ring']} />
      </div>
      )
    }
    </>
  );
}

export default Loader;
