import { useSelector } from 'react-redux';
import style from './style.module.css';

function ClothesLoader() {
  const loaders = useSelector((state) => state.loaders);

  return (
    <>
      {
      loaders.clothes
      && (
      <div className={style.loaderWr}>
        <div className={style['lds-dual-ring']} />
      </div>
      )
    }
    </>
  );
}

export default ClothesLoader;
