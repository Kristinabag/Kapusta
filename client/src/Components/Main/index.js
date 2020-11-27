import { Switch, Route } from 'react-router-dom';
import './style.css';
import ControlPanel from '../ControlPanel';
import Clothes from '../Clothes';
import Wardrobe from '../Wardrobe';
import WardrobeForm from '../WardrobeForm';
import Sidebar from '../Sidebar';

function Main() {
  return (
    <>
      <div className="main">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Clothes />
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
    </>
  );
}

export default Main;
