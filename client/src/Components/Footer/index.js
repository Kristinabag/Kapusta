import { Link } from 'react-router-dom';
import style from './style.module.css';

function Footer() {
  return (
    <div className="footer">
      <div>
        &copy; 2020
        {' '}
        <Link to="/elbrus" className={`${style.link}`} target="_blank">elbrusboot.camp</Link>
        {' '}
        | By
        {' '}
        <Link className={`${style.link}`} to="/gitRepo" target="_blank">Kapusta</Link>
      </div>
    </div>
  );
}

export default Footer;
