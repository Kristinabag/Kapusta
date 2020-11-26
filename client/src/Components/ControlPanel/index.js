/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import './style.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import chooseActivity from '../../redux/actions/activity';
import changeWardrobeType from '../../redux/actions/wardrobeType';
import Recommendation from '../Recommendation';
import ModalContacts from '../ModalControlPanel';
import style from './style.module.css';

function ControlPanel() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  /* for Modal */
  const [isOpenModal, setIsOpenModal] = useState(false);

  /* when click appears other than modal window */
  const overlayHandlerClick = () => {
    setIsOpenModal(false);
  };

  /* on Escape we can exit modal window */
  const overlayHandlerKey = (e) => {
    if (e.key === 'Escape') {
      setIsOpenModal(false);
    }
  };

  /* adding eventlistener for espace key press */
  useEffect(() => {
    document.addEventListener('keyup', overlayHandlerKey, false);
    /* removing listener after leaving this component */
    return () => {
      document.removeEventListener('keyup', overlayHandlerKey, false);
    };
  }, []);

  function handleClick() {
    setIsOpenModal(true);
  }

  return (
    <>
      {/* modal window */}
      {isOpenModal && (
        <>
          <div onClick={overlayHandlerClick} className={style.overlay} />
          <ModalContacts>
            <div className={`${style.modal} alert alert-dismissible alert-info`}>
              <button onClick={overlayHandlerClick} type="button" className="close" data-dismiss="alert">&times;</button>
              <div className="d-flex flex-column align-items-center justify-content-center">
                <strong>О, черт!</strong>
                {' '}
                Чтобы пользоваться этой опцией, пожалуйста, зарегистрируйтесь или войдите ...
                <div className="d-flex">
                  <Link to="/signin" className="btn btn-info mt-2 mx-1" type="button">Войти</Link>
                  <Link to="/signup" className="btn btn-info mt-2 mx-1" type="button">Зарегистрироваться</Link>
                </div>
              </div>
            </div>
          </ModalContacts>
        </>
      )}
      <div className="ControlPanel">
        {user.name ? (
          <>
            <div className="card border-primary mb-3">
              <div className="card-header">Типа активности</div>
              <div className="card-body">
                <select
                  onChange={(e) => dispatch(chooseActivity(e.target.value))}
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                >
                  <option className="h-1" value="leasure-walking">
                    Пешая прогулка
                  </option>
                  <option className="m-1" value="chilling-at-home">
                    Отдыхать дома
                  </option>
                  <option className="m-1" value="work-office">
                    Работа в офисе
                  </option>
                  <option className="m-1" value="work-informal">
                    Работа без дресс-кода
                  </option>
                  <option className="m-1" value="leasure-goingout">
                    Встреча с друзьями
                  </option>
                  <option className="m-1" value="sport-jogging">
                    Пробежка
                  </option>
                  <option className="m-1" value="sport-cycling">
                    Велопрогулка
                  </option>
                  <option className="m-1" value="sport-winter">
                    Зимние виды спорта
                  </option>
                  <option className="m-1" value="sport-hiking">
                    Треккинг
                  </option>
                </select>
              </div>
            </div>
            <div className="card border-dark mb-3">
              <div className="card-header">Одежда</div>
              <div className="card-body">
                <select
                  onChange={(e) => dispatch(changeWardrobeType(e.target.value))}
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                >
                  <option value="default">Гардероб по умолчанию</option>
                  <option value="myWardrobe">Мой гардероб</option>
                </select>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="card border-primary mb-3">
              <div className="card-header">Типа активности</div>
              <div className="card-body">
                <select
                  onChange={handleClick}
                  className="nav-link dropdown-toggle visible"
                  data-toggle="dropdown"
                >
                  <option className="h-1" value="leasure-walking">
                    Пешая прогулка
                  </option>
                  <option className="m-1" value="chilling-at-home">
                    Отдыхать дома
                  </option>
                  <option className="m-1" value="work-office">
                    Работа в офисе
                  </option>
                  <option className="m-1" value="work-informal">
                    Работа без дресс-кода
                  </option>
                  <option className="m-1" value="leasure-goingout">
                    Встреча с друзьями
                  </option>
                  <option className="m-1" value="sport-jogging">
                    Пробежка
                  </option>
                  <option className="m-1" value="sport-cycling">
                    Велопрогулка
                  </option>
                  <option className="m-1" value="sport-winter">
                    Зимние виды спорта
                  </option>
                  <option className="m-1" value="sport-hiking">
                    Треккинг
                  </option>
                </select>
              </div>
            </div>
            <div className="card border-dark mb-3">
              <div className="card-header">Одежда</div>
              <div className="card-body">
                <select
                  onChange={handleClick}
                  className="nav-link dropdown-toggle visible"
                  data-toggle="dropdown"
                >
                  <option value="default">Гардероб по умолчанию</option>
                  <option value="myWardrobe">Мой гардероб</option>
                </select>
              </div>
            </div>
          </>
        )}

        <Recommendation />
      </div>
    </>
  );
}

export default ControlPanel;
