import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import style from './style.module.css';
import ControlPanel from '../ControlPanel';
import Clothes from '../Clothes';
import Wardrobe from '../Wardrobe';
import WardrobeForm from '../WardrobeForm';
import Sidebar from '../Sidebar';

function Main() {
  const user = useSelector((state) => state.user);

  return (
    <>
      {user.name ? (
        <div className={style.container}>
          <Sidebar className="sidebar" />
          <Switch>
            <Route exact path="/">
              <Clothes className="clothes" />
            </Route>
            <Route exact path="/wardrobe">
              <Wardrobe />
            </Route>
            <Route exact path="/wardrobe/add">
              <WardrobeForm />
            </Route>
          </Switch>
          <ControlPanel className="ControlPanel" />
        </div>
      ) : (

        <div>
          {' '}
          {' '}
        </div>

      )}
    </>
  );
}

export default Main;
