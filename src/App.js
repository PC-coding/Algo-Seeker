import logo from './algoseeker.png';
import './App.css';
import { BrowserRouter, Link } from 'react-router-dom';
import PathfindingVisualizer from './components/PathfindingVisualizer/PathfindingVisualizer';
import BFS from './components/BFS/BFS';
import BFS2 from './components/BFS/BFS2'

const App = () => {

  return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Pathfinding Visualizer</h1>
            <PathfindingVisualizer />
            <BFS2 />
            <BFS />
      </div>
    )
}  

  
  

export default App;
