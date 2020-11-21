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
                <Link className="btn btn-outline-primary mx-1" to="/wardrobe">
                  <RiIcons.RiTShirt2Line />
                  <span>Гардероб</span>
                </Link>
                <Link className="btn btn-outline-primary mx-1" onClick={logoutHandler}>
                  <IoIcons.IoMdExit />
                  <span>Выйти</span>
                </Link>
              </>
            )
            : (
              <>
                <Link className="btn btn-secondary mx-1" onClick={loginHandler}>Войти</Link>
                <Link className="btn btn-secondary mx-1" to="/registration">Зарегистрироваться</Link>
              </>
            )
        }
      </div>
    </div>
  );
}

export default Header;
