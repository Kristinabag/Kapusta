import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Weather from './Components/Weather';
import Main from './Components/Main';
import './index.css';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import BGImage from './Components/BGImage';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Weather />
        <Main />
        <Footer />
        <Switch>
          <Route exact path="/signin">
            <SignIn />
          </Route>

          <Route exact path="/signup">
            <SignUp />
          </Route>

          {/* <Route exact path="/logout">
                {user ? <Redirect to="/" /> : <WardrobeForm />}
              </Route>
              <PrivateRoute exact path="/info">
            <Info />
          </PrivateRoute> */}

          <Route path="/">Page 404</Route>
        </Switch>
      </Router>
      <BGImage />
    </>
  );
}

export default App;
