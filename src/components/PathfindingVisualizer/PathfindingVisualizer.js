import React, { Component } from 'react';
import Node from './Node/Node';
import './PathfindingVisualizer.css';

export default class PathfindingVisualizer extends Component {

    render(){ 
        const {grid, mouseIsPressed } = this.state;

        return(
            <div>
                <button >
                Visualize
                </button>
                {/* <h1>
                    Pathfinding Visualizer
                </h1> */}
                {/* <div className='grid'>
                    {grid.map((row, rowIdx) => {
                        const {row, col, isFinish, isStart, isWall} = node;
                        return(
                            <Node
                            key={nodeIdx}
                            col={col}
                            isFinish={isFinish}
                            isStart={isStart}>

                            </Node>
                        )
                    }
                    )}                    
                </div> */}
            </div>
        )
    }
}