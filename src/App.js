import logo from './algoseeker.png';
import './App.css';
import { BrowserRouter, Link } from 'react-router-dom';
import PathfindingVisualizer from './components/PathfindingVisualizer/PathfindingVisualizer';

const App = () => {

  return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Pathfinding Visualizer</h1>
            <PathfindingVisualizer />
      </div>
    )
}  

  
  

export default App;
