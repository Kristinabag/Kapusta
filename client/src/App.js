import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Weather from './Components/Weather';
import Main from './Components/Main';
import './index.css';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import Contacts from './Components/Contacts';
import BGImage from './Components/BGImage';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Weather />
        <div className="containerMain">
          <Switch>
            <Route exact path="/signin">
              <SignIn />
            </Route>

            <Route exact path="/signup">
              <SignUp />
            </Route>

            <Route exact path="/contacts">
              <Contacts />
            </Route>

            <Route path="/">
              <Main />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
      <BGImage />
    </>
  );
}

export default App;
