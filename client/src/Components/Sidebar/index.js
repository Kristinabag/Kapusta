import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as RiIcons from 'react-icons/ri';
import * as AiIcons from 'react-icons/ai';
import * as FiIcons from 'react-icons/fi';
import renewToggle from '../../redux/actions/renewToggle';
import AutocompleteInput from '../AutocompleteInput';
import './style.css';

function Sidebar() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <>
      <div className="sidebar">
        <ul className="list-group list-group-flush">
          <AutocompleteInput />
          <button type="button" onClick={() => dispatch(renewToggle())} className="list-group-item navLink update">
            <FiIcons.FiRefreshCcw />
            <span> Обновить вещи</span>
          </button>
          {user.name ? (
            <Link to="/wardrobe" className="list-group-item navLink">
              <RiIcons.RiTShirt2Line />
              <span> Гардероб</span>
            </Link>
          ) : (
            <Link to="/wardrobe" className="list-group-item navLink disabled">
              <RiIcons.RiTShirt2Line />
              <span> Гардероб</span>
            </Link>
          )}

          <Link to="/contacts" className="list-group-item navLink">
            <AiIcons.AiOutlineContacts />
            <span> Контакты</span>
          </Link>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
