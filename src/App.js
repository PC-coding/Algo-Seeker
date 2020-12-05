import logo from './algoseeker.png';
import './App.css';
import Navbar from './components/Header/Navbar';
import Router from './components/Header/Router';
import { BrowserRouter, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to='/'>
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
        <Navbar />
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
