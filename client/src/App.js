import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import SelectionMenu from './Components/SelectionMenu';
import Clothes from './Components/Clothes';
import ControlPanel from './Components/ControlPanel';
import Weather from './Components/Weather';
import './index.css';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Weather />
            <div className="mainComponent">
              <ControlPanel />
              <Clothes />
              <SelectionMenu />
            </div>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
