import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as RiIcons from 'react-icons/ri';
import * as AiIcons from 'react-icons/ai';
import * as FiIcons from 'react-icons/fi';
import { loadWeatherSaga } from '../../redux/actions/weather';

function Sidebar() {
  const [formValue, setFormValue] = useState('');
  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(loadWeatherSaga(formValue));
    setFormValue('');
  };

  return (
    <>
      <div>
        <ul className="list-group list-group-flush">
          <form onSubmit={onFormSubmit} value={formValue}>
            <input
              onChange={(e) => setFormValue(e.target.value)}
              className="list-group-item"
              type="text"
              placeholder="Посмотреть другой город"
            />
            <button type="submit">Посмотреть</button>
          </form>
          <Link to="/" className="list-group-item navLink">
            <FiIcons.FiRefreshCcw />
            <span> Обновить вещи</span>
          </Link>
          <Link to="/wardrobe" className="list-group-item navLink">
            <RiIcons.RiTShirt2Line />
            <span> Гардероб</span>
          </Link>
          <Link to="/" className="list-group-item navLink">
            <AiIcons.AiOutlineContacts />
            <span> Контакты</span>
          </Link>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
