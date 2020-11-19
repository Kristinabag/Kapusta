import './style.css'

function ControlPanel() {
  return (
    <div className="ControlPanel">
     <div className="typeActive">
       Тип активности: 
       <select>
        <option>Пешая прогулка</option>
        <option>Катание на велосипеде</option>
        <option>Дорога до работы</option>
      </select>
     </div>
     <div className="clothesSelect">
       Одежда: 
       <select>
        <option>Гардероб по умолчанию</option>
        <option>Мой гардероб</option>
      </select>
     </div>
     <div className="recomendation">
      <div className="card border-dark mb-3" >
        <div className="card-header">Рекомендации</div>
        <div className="card-body">
          <p className="card-text">Сегодня ветренно, поэтому оденься теплее и не забудь зонт, возможны осадки.</p>
        </div>
      </div>
     </div>

    </div>
  );
}

export default ControlPanel;
