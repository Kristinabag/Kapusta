import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
// import Weather from './Components/Weather';
import Main from './Components/Main';
import './index.css';

function App() {
  return (
    <>
      <Router>
        <Header />
        {/* <Weather /> */}
        <Main />
        <Footer />
      </Router>
    </>
  );
}

export default App;
