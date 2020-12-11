import React, { useState, useEffect } from 'react';

const PathfindingVisualizer = () => {
    const [Grid, setGrid] = useState([]);
    
    const cols = 5;
    const rows = 5;

    const initializeGrid = () => {
        const grid = new Array(cols);

        for (let i = 0; i < cols; i++){
            grid[i] = new Array(rows);
        }

        createSpot(grid);

    };

    const createSpot = (grid) => {
        for (let i = 0; i < cols; i++) {
            for (let j = 0; j<rows; j++) {
                grid[i][j] = new Spot(i, j);
            }
        }
    };

    return(
        <div>
            <h1> Pathfinding Visualizer</h1>
        </div>
    )
}

export default PathfindingVisualizer;