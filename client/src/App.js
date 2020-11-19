import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Components/Header';
import Footer from './Components/Footer';
import SelectionMenu from './Components/SelectionMenu';
import Clothes from './Components/Clothes';
import ContolPanel from './Components/ContolPanel';
import Weather from './Components/Weather';
import './index.css'
import "bootswatch/dist/cosmo/bootstrap.min.css";
// (examples: darkly, slate, cosmo, spacelab, and superhero. See https://bootswatch.com/ for current theme names.)
import Weather from './Components/Weather';


function App() {
  return (
    <>
      <Router>
        <Header />
        <Weather />
        <Switch>
          <Route exact path="/">
            <Weather />
            <div className="mainComponent">
            <ContolPanel />
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
