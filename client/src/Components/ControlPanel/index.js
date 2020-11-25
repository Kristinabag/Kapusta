import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import chooseActivity from '../../redux/actions/activity';
import changeWardrobeType from '../../redux/actions/wardrobeType';

function ControlPanel() {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.user);

  function handleClick() {
    history.push('/signin');
  }

  return (
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

      <div className="recomendation">
        <div className="card border-dark mb-3">
          <div className="card-header">Рекомендации</div>
          <div className="card-body">
            <p className="card-text">
              Сегодня ветрено, поэтому оденься теплее и не забудь зонт, возможны
              осадки.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ControlPanel;
