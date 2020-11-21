import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Weather from './Components/Weather';
import Main from './Components/Main';
import './index.css';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Weather />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          {/* links for footer */}
          <Route
            exact
            path="/elbrus"
            component={() => {
              window.location.href = 'https://elbrusboot.camp/';
              return null;
            }}
          />
          <Route
            exact
            path="/gitRepo"
            component={() => {
              window.location.href = 'https://github.com/Kristinabag/Kapusta';
              return null;
            }}
          />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
