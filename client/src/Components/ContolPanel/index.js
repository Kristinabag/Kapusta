import './style.css';
import { useDispatch } from "react-redux";
import { chooseActivity } from '../../redux/actions/activity';
import { useState } from 'react';

function ControlPanel() {
  const dispatch = useDispatch();
  const [selectValue, setSelectValue] = useState('leasure-walking');

  function setActivity(event) {
    setSelectValue(event.target.value);
    dispatch(chooseActivity(selectValue));
  }

  return (
    <div className="ControlPanel">

    <div class="card border-dark mb-3">
      <div class="card-body">
        <h4 class="card-title">Тип активности: </h4>
          <select value={selectValue} onChange={setActivity} className="nav-link dropdown-toggle" data-toggle="dropdown">
            <option className="h-1" value="leasure-walking">Пешая прогулка</option>
            <option className="m-1" value="chilling-at-home">Отдыхать дома</option>
            <option className="m-1" value="work-office">Работа в офисе</option>
            <option className="m-1" value="work-informal">Работа без дресс-кода</option>
            <option className="m-1" value="leasure-goingout">Встреча с друзьями</option>
            <option className="m-1" value="sport-jogging">Пробежка</option>
            <option className="m-1" value="sport-cycling">Велопрогулка</option>
            <option className="m-1" value="sport-winter">Зимние виды спорта</option>
            <option className="m-1" value="sport-hiking">Треккинг</option>
          </select>
      </div>
    </div>

    <div class="card border-dark mb-3">
      <div class="card-body">
        <h4 class="card-title">Одежда:  </h4>
        <select className="nav-link dropdown-toggle" data-toggle="dropdown">
            <option>Гардероб по умолчанию</option>
            <option>Мой гардероб</option>
          </select>
      </div>
    </div>

     <div className="recomendation">
      <div className="card border-dark mb-3" >
        <div className="card-header"><h2>Recommedation</h2></div>
        <div className="card-body">
          <p className="card-text">Сегодня ветрено, поэтому оденься теплее и не забудь зонт, возможны осадки.</p>
        </div>
      </div>
     </div>

    </div>
  );
}

export default ControlPanel;
