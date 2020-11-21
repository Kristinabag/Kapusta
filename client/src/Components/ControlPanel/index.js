import './style.css';
import { useDispatch } from 'react-redux';
import chooseActivity from '../../redux/actions/activity';

function ControlPanel() {
  const dispatch = useDispatch();

  return (
    <div className="ControlPanel">
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
          <select className="nav-link dropdown-toggle" data-toggle="dropdown">
            <option>Гардероб по умолчанию</option>
            <option>Мой гардероб</option>
          </select>
        </div>
      </div>

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
