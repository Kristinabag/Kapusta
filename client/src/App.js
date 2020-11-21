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
        <Switch>
          <Route exact path="/">
            <Weather />
            <Main />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
