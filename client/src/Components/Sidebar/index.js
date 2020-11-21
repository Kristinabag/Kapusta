import { Link } from 'react-router-dom';
import * as RiIcons from 'react-icons/ri';
import * as AiIcons from 'react-icons/ai';
import * as FiIcons from 'react-icons/fi';

function Sidebar() {
  return (
    <>
      <div>
        <ul className="list-group list-group-flush">
          <input className="list-group-item" type="text" placeholder="Посмотреть другой город" />
          <Link to="/" className="list-group-item navLink">
            <FiIcons.FiRefreshCcw />
            <span> Обновить вещи</span>
          </Link>
          <Link to="/" className="list-group-item navLink">
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
