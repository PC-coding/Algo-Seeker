import React, { useState, useEffect } from 'react';
import Node from './Node/Node.js';
import './PathfindingVisualizer.css'

const cols = 15;
const rows = 15;

const PathfindingVisualizer = () => {
    const [Grid, setGrid] = useState([]);
    
    useEffect(() => {
        initializeGrid();
    }, []);


    const initializeGrid = () => {
        const grid = new Array(cols);

        for (let i = 0; i < cols; i++){
            grid[i] = new Array(rows);
        }

        createSpot(grid);
        setGrid(grid);
    };

    const createSpot = (grid) => {
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j<cols; j++) {
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

    const gridWithNode = (
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
    );

    return (
        <div className='Wrapper'>
            <h1> Component</h1>
            {gridWithNode}
        </div>
    )
};

export default PathfindingVisualizer;