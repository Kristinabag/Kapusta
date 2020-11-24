import { Link } from 'react-router-dom';
import * as RiIcons from 'react-icons/ri';
import * as IoIcons from 'react-icons/io';

import style from './style.module.css';

function Header() {
  return (
    <div className={style.header}>
      <div className="d-flex">
        <Link className="navbar-brand" to="/">Главная</Link>
      </div>
      <div>
        <>
          <Link to="/wardrobe">
            <button type="button" className="btn btn-outline-primary mx-1">
              <RiIcons.RiTShirt2Line />
              <span> Гардероб</span>
            </button>
          </Link>
          <Link to="/logout">
            <button type="button" className="btn btn-outline-primary mx-1">
              <IoIcons.IoMdExit />
              <span>Выйти</span>
            </button>
          </Link>
        </>
        <>
          <Link to="/signin"><button type="button" className="btn btn-outline-primary mx-1">Войти</button></Link>
          <Link to="/registration"><button type="button" className="btn btn-outline-primary mx-1">Зарегистрироваться</button></Link>
        </>
      </div>
    </div>
  );
}

export default Header;
