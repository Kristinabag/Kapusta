import './style.css';
// import ImageUploader from 'react-images-upload';
import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
// import { useSelector, useDispatch } from 'react-redux';
import { addClothItemSaga } from '../../redux/actions/clothes';

function Wardrobe() {
  const [name, setName] = useState('');
  const [type, setType] = useState('top');
  const [activityFor, setActivityFor] = useState([]);
  const [weatherFor, setWeatherFor] = useState([]);
  const [temperatureFor, setTemperatureFor] = useState([]);
  const [layer, setLayer] = useState(2);
  // const [file, setFile] = useState(null);
  const clothForm = useRef(null);
  // const [picture, setPicture] = useState({});

  console.log('activityFor: ', activityFor);
  // console.log('picture: ', picture);

  // const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log('clothForm: ', clothForm.current);
    const formdata = new FormData(clothForm.current);
    console.log('formdata: ', formdata);
    // formdata.append('file', file, file.name);
    dispatch(addClothItemSaga(formdata));
  };

  return (
    <form
      id="clothForm"
      ref={clothForm}
      onSubmit={onFormSubmit}
      // value={{
      //   name,
      //   type,
      //   activity,
      //   temperatureFor,
      //   weatherFor,
      //   layer,
      //   picture,
      // }}
    >
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
        <option className="h-1" disabled selected>Это топ, брюки или что-то еще?</option>
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
          setActivityFor(Array.from(e.target.selectedOptions).map((el) => el.value));
        }}
        className="nav-link dropdown-toggle"
        data-toggle="dropdown"
        multiple
        name="activityFor"
        values={activityFor}
      >
        <option disabled selected>Для чего вы используете эту одежду?</option>
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
        onChange={
          (e) => setTemperatureFor(Array.from(e.target.selectedOptions).map((el) => el.value))
        }
        className="nav-link dropdown-toggle"
        data-toggle="dropdown"
        multiple
        name="temperatureFor"
        values={temperatureFor}
      >
        <option disabled selected>Для какой температуры воздуха она подойдет?</option>
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
        onChange={(e) => setWeatherFor(Array.from(e.target.selectedOptions).map((el) => el.value))}
        className="nav-link dropdown-toggle"
        data-toggle="dropdown"
        multiple
        name="weatherFor"
        values={weatherFor}
      >
        <option disabled selected>Вы будете носить это в снегопад или дождь?</option>
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
        onChange={(e) => setLayer(e.target.value)}
        className="nav-link dropdown-toggle"
        data-toggle="dropdown"
        name="layer"
        value={layer}
      >
        <option disabled selected>Какой это слой одежды?</option>
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
      {/* <ImageUploader
        withIcon
        buttonText="Добавить фотографию одежды"
        onChange={(pic) => setPicture(pic[pic.length - 1])}
        imgExtension={['.jpg', '.gif', '.png']}
        maxFileSize={5242880}
        name="picture"
        value={picture}
      /> */}
      <input type="file" name="picture" />
      <button type="submit">Добавить в гарероб</button>
    </form>
  );
}

export default Wardrobe;
