import './style.css';
import { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addClothItemSaga } from '../../redux/actions/clothes';

function WardrobeForm() {
  const [name, setName] = useState('');
  const [type, setType] = useState('top');
  const [activityFor, setActivityFor] = useState([]);
  const [weatherFor, setWeatherFor] = useState([]);
  const [temperatureFor, setTemperatureFor] = useState([]);
  const [layer, setLayer] = useState(null);
  const clothForm = useRef(null);

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append('user', user);
    formdata.append('name', name);
    formdata.append('type', type);
    formdata.append('activityFor', JSON.stringify(activityFor));
    formdata.append('weatherFor', JSON.stringify(weatherFor));
    formdata.append('temperatureFor', JSON.stringify(temperatureFor));
    if (layer) formdata.append('layer', layer);
    // formdata.append('layer', clothForm.current.layer.value);
    formdata.append('file', clothForm.current.picture.files[0]);
    console.log('formdata: ', formdata);
    dispatch(addClothItemSaga(formdata));
  };

  return (
    <form id="clothForm" ref={clothForm} onSubmit={onFormSubmit}>
      <input
        onChange={(e) => setName(e.target.value)}
        className="list-group-item"
        type="text"
        placeholder="Название предмета гардероба"
        name="name"
        value={name}
      />

      <select
        onChange={(e) => setType(e.target.value)}
        className="nav-link dropdown-toggle"
        data-toggle="dropdown"
        name="type"
        value={type}
      >
        <option className="h-1" disabled>
          Это топ, брюки или что-то еще?
        </option>
        <option className="m-1" value="top">
          Топ (футболка, куртка, рубашка и подобное)
        </option>
        <option className="m-1" value="bottom">
          Брюки, шорты
        </option>
        <option className="m-1" value="hat">
          Головной убор
        </option>
        <option className="m-1" value="shoes">
          Обувь, носки
        </option>
        <option className="m-1" value="accessory">
          Аксессуар
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

      <select
        onChange={(e) => {
          setActivityFor(
            Array.from(e.target.selectedOptions).map((el) => el.value),
          );
        }}
        className="nav-link dropdown-toggle"
        data-toggle="dropdown"
        multiple
        name="activityFor"
        values={activityFor}
      >
        <option disabled>
          Для чего вы используете эту одежду?
        </option>
        <option className="h-1" value="leasure-walking">
          Пешая прогулка
        </option>
        <option className="m-1" value="chilling-at-home">
          Отдых дома
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

      <select
        onChange={(e) => setTemperatureFor(
          Array.from(e.target.selectedOptions).map((el) => el.value),
        )}
        className="nav-link dropdown-toggle"
        data-toggle="dropdown"
        multiple
        name="temperatureFor"
        values={temperatureFor}
      >
        <option disabled>
          Для какой температуры воздуха она подойдет?
        </option>
        <option className="h-1" value="hot">
          Выше +20°С
        </option>
        <option className="m-1" value="warm">
          От +11°С до +20°С
        </option>
        <option className="m-1" value="cold">
          От +1°С до +10°С
        </option>
        <option className="m-1" value="freeze">
          От -20°С до 0°С
        </option>
        <option className="m-1" value="extraFreeze">
          Ниже -20°С
        </option>
      </select>

      <select
        onChange={(e) => setWeatherFor(
          Array.from(e.target.selectedOptions).map((el) => el.value),
        )}
        className="nav-link dropdown-toggle"
        data-toggle="dropdown"
        multiple
        name="weatherFor"
        values={weatherFor}
      >
        <option disabled>
          Вы будете носить это в снегопад или дождь?
        </option>
        <option className="h-1" value="clear">
          В ясный солнечный день
        </option>
        <option className="m-1" value="clouds">
          В облачную погоду
        </option>
        <option className="m-1" value="rain">
          Во время дождя
        </option>
        <option className="m-1" value="snow">
          В снежную погоду
        </option>
      </select>

      <select
        onChange={(e) => {
          if (type === 'accessory' || type === 'hat') setLayer(null);
          setLayer(e.target.value);
        }}
        className="nav-link dropdown-toggle"
        data-toggle="dropdown"
        name="layer"
        value={layer}
      >
        <option disabled>
          Какой это слой одежды?
        </option>
        <option className="h-1" value={1}>
          1 (майка, нижняя футболка / носки)
        </option>
        <option className="m-1" value={2}>
          2 (футболка / обувь)
        </option>
        <option className="m-1" value={3}>
          3 (рубашка)
        </option>
        <option className="m-1" value={4}>
          4 (свитер, кардиган)
        </option>
        <option className="m-1" value={5}>
          5 (легкая верхняя одежда, худи)
        </option>
        <option className="m-1" value={6}>
          6 (теплая верхняя одежда)
        </option>
      </select>

      <input type="file" name="picture" />

      <button type="submit">Добавить в гарероб</button>
    </form>
  );
}

export default WardrobeForm;
