import { useSelector } from 'react-redux';
import style from './style.module.css';

function WeatherLoader() {
  const loaders = useSelector((state) => state.loaders);

  return (
    <>
      {
      loaders.weather
      && (
      <div className={style.loaderWr}>
        <div className={style['lds-dual-ring']} />
      </div>
      )
    }
    </>
  );
}

export default WeatherLoader;
