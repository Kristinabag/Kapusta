import style from './style.module.css';
import ControlPanel from '../ControlPanel';
import Clothes from '../Clothes';
import Sidebar from '../Sidebar';

function Main() {
  return (
    <div className={style.container}>
      <Sidebar className="sidebar" />
      <Clothes className="clothes" />
      <ControlPanel className="ControlPanel" />
    </div>
  );
}

export default Main;
