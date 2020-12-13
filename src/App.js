import logo from './algoseeker.png';
import './App.css';
import { BrowserRouter, Link } from 'react-router-dom';
import PathfindingVisualizer from './components/PathfindingVisualizer/PathfindingVisualizer';
import BFS from './components/BFS/BFS';
import BFS2 from './components/BFS/BFS2';
import QuickSort from './components/QuickSort/QuickSort';
import BubbleSort from './components/BubbleSort/BubbleSort';
import Router from './components/Navbar/Router';
import Navbar from './components/Navbar/Navbar';

const App = () => {

  return (
        <BrowserRouter>
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Pathfinding Visualizer</h1>
        <header>

            <Navbar />
            <Router />
        </header>
            {/* <PathfindingVisualizer />
            <BFS2 />
            <BFS />
            <BubbleSort />
          <QuickSort /> */}
      </div>
          </BrowserRouter>
    )
}  

  
  

export default App;
