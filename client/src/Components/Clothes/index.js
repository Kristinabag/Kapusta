import './style.css'

function Clothes() {
  return (
    <div className="Clothes">
      Прикидон
      <div className="head type">
        <img src="./img/hatWarm.png" />
      </div>
      <div className="body type">
        <img src="./img/jacketRain.png" />
        <img src="./img/jumperPlain.png" />
      </div>
      <div className="legs type">
        <img src="./img/pants.png" />
      </div>
      <div className="boots type">

        <img src="./img/ugg.png" />
      </div>
    </div>
  );
}

export default Clothes;
