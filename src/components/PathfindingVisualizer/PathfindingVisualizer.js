import React, { useState, useEffect } from 'react';
import Node from './Node/Node.js';
import './PathfindingVisualizer.css';


const PathfindingVisualizer = () => {
    const [Grid, setGrid] = useState([]);
    
    useEffect(() => {
        initializeGrid();
    }, []);

    const cols = 15;
    const rows = 15;

    const initializeGrid = () => {
        const grid = new Array(cols);

        for (let i = 0; i < cols; i++){
            grid[i] = new Array(rows);
        }

        createSpot(grid);
        setGrid(grid);
    };

    const createSpot = (grid) => {
        for (let i = 0; i < cols; i++) {
            for (let j = 0; j<rows; j++) {
                grid[i][j] = new Spot(i, j);
            }
        }
    };

    function Spot(i, j){
        this.x = i;
        this.y = j;
        this.g = 0;
        this.f = 0;
        this.h = 0;
    };

    const gridWithNode = () => {
        <div>
            {Grid.map((row, rowIndex) => {
                return (
                    <div key={rowIndex} className='rowWrapper'>
                        {row.map((col, colIndex) => {
                            return <Node key={colIndex} />;
                        })}
                    </div>
                );
            })}
        </div>
    };

    return(
        <div className='Wrapper'>
            <h1> Pathfinding Visualizer</h1>
            {gridWithNode}
        </div>
    )
};

export default PathfindingVisualizer;