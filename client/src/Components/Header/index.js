import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as RiIcons from 'react-icons/ri';
import * as IoIcons from 'react-icons/io';

import style from './style.module.css';

function Header() {
  const [user, setUser] = useState(true);

  const loginHandler = () => setUser(true);
  const logoutHandler = () => setUser(false);

  return (
    <div className={style.header}>
      <div className="d-flex">
        <Link className="navbar-brand" to="/">Главная</Link>
      </div>
      <div>
        {
          user
            ? (
              <>
                <Link to="/wardrobe">
                  <button type="button" className="btn btn-outline-primary mx-1">
                    <RiIcons.RiTShirt2Line />
                    <span> Гардероб</span>
                  </button>
                </Link>
                <Link to="/logout">
                  <button onClick={logoutHandler} type="button" className="btn btn-outline-primary mx-1">
                    <IoIcons.IoMdExit />
                    <span>Выйти</span>
                  </button>
                </Link>
              </>
            )
            : (
              <>
                <Link to="/login"><button type="button" className="btn btn-secondary mx-1" onClick={loginHandler}>Войти</button></Link>
                <Link to="/registration"><button type="button" className="btn btn-secondary mx-1">Зарегистрироваться</button></Link>
              </>
            )
        }
      </div>
    </div>
  );
}

export default Header;
