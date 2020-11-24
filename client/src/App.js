import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
// import Weather from './Components/Weather';
// import Main from './Components/Main';
import './index.css';

function App() {
  return (
    <>
      <Router>
        <Header />
        {/* <Weather /> */}
        {/* <Main /> */}

        <Switch>
          <Route exact path="/signin">
            <SignIn />
          </Route>

          <Route exact path="/registration">
            <SignUp />
          </Route>

          {/* <PrivateRoute exact path="/info">
            <Info />
          </PrivateRoute> */}

          <Route path="/">
            Page 404
          </Route>

        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
