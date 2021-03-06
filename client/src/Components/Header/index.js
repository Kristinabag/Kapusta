import { Link } from 'react-router-dom';
import * as RiIcons from 'react-icons/ri';
import * as IoIcons from 'react-icons/io';
import { useSelector, useDispatch } from 'react-redux';
// import style from './style.module.css';
import ACTION_CREATORS from '../../redux/actions/user';
import changeWardrobeType from '../../redux/actions/wardrobeType';

function Header() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(ACTION_CREATORS.LOGOUT());
    dispatch(changeWardrobeType('default'));
    localStorage.removeItem('user');
  };

  return (
    <div className="header">
      <div className="d-flex">
        <Link className="navbar-brand" to="/">Kapusta</Link>
      </div>
      {user.name
        ? (
          <>
            <div>
              {user.name}
              <Link to="/wardrobe">
                <button type="button" className="btn btn-outline-primary ml-2 mx-1">
                  <RiIcons.RiTShirt2Line />
                  <span> Гардероб</span>
                </button>
              </Link>
              <Link to="/">
                <button onClick={logout} type="button" className="btn btn-outline-primary mx-1">
                  <IoIcons.IoMdExit />
                  <span>Выйти</span>
                </button>
              </Link>
            </div>
          </>
        ) : (
          <>
            <div>
              <Link to="/signin"><button type="button" className="btn btn-outline-primary mx-1">Войти</button></Link>
              <Link to="/signup"><button type="button" className="btn btn-outline-primary mx-1">Зарегистрироваться</button></Link>
            </div>
          </>
        )}

    </div>
  );
}

export default Header;
