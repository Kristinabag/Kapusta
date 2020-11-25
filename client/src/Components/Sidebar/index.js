import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as RiIcons from 'react-icons/ri';
import * as AiIcons from 'react-icons/ai';
import * as FiIcons from 'react-icons/fi';
import AutocompleteInput from '../AutocompleteInput';
import './style.css';

function Sidebar() {
  const user = useSelector((state) => state.user);

  return (
    <>
      <div>
        <ul className="list-group list-group-flush">
          <AutocompleteInput />
          <Link to="/" className="list-group-item navLink">
            <FiIcons.FiRefreshCcw />
            <span> Обновить вещи</span>
          </Link>
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
