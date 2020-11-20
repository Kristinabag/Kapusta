import './style.css'

function ControlPanel() {
  return (
    <div className="ControlPanel">

    <div class="card border-dark mb-3">
      <div class="card-body">
        <h4 class="card-title">Тип активности: </h4>
          <select className="nav-link dropdown-toggle" data-toggle="dropdown">
            <option className="h-1">Пешая прогулка</option>
            <option className="m-1">Катание на велосипеде</option>
            <option className="m-1">Дорога до работы</option>
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
        <div className="card-header"><h2>Recomedation</h2></div>
        <div className="card-body">
          <p className="card-text">Сегодня ветренно, поэтому оденься теплее и не забудь зонт, возможны осадки.</p>
        </div>
      </div>
     </div>

    </div>
  );
}

export default ControlPanel;
