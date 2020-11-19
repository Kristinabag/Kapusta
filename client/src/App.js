import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Router>
        <Header />
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
