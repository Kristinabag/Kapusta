import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Components/Header';
import Footer from './Components/Footer';
import Weather from './Components/Weather';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Weather />
        <Switch>
          <Route exact path="/">
            Главная страница
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
