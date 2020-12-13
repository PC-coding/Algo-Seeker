import logo from './algoseeker.png';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './components/Navbar/Router';
import Navbar from './components/Navbar/Navbar';

const App = () => {

  return (
    <BrowserRouter>
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <header>
          <Navbar />
          <Router />
        </header>
      </div>
    </BrowserRouter>
  )
}  

  
  

export default App;
