import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Components/Header';
import Footer from './Components/Footer';
import SelectionMenu from './Components/SelectionMenu';
import Clothes from './Components/Clothes';
import ContolPanel from './Components/ContolPanel';
import Weather from './Components/Weather';
import Profile from './Components/Profile';
import './index.css'


function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            {/* <Weather /> */}
            <div className="mainComponent">
            <ContolPanel />
            <Clothes />
            <SelectionMenu />
            </div>
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path='/elbrus' component={() => { 
            window.location.href = 'https://elbrusboot.camp/'; 
            return null;
          }}/>
          <Route exact path='/gitRepo' component={() => { 
            window.location.href = 'https://github.com/Kristinabag/Kapusta'; 
            return null;
          }}/>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
