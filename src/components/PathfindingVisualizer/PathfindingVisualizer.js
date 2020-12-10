import React, { Component } from 'react';
import Node from './Node/Node';
import './PathfindingVisualizer.css';

export default class PathfindingVisualizer extends Component {
    constructor(props){
        super(props);
        this.state = {
            nodes: [],
        };
    }

    componentDidMount(){
        const nodes = [];
        for (let row = 0; row < 15; row++) {
            const currentRow = [];
            for (let col = 0; col < 50; col++) {
                const currentNode = {
                    col,
                    row,
                    isStart: row === 10 && col === 5,
                    isFinish: row === 10 && col === 45
                };
                currentRow.push(currentNode);
            }
            nodes.push(currentRow);
        }
        this.setState({nodes})
    }
    
    render(){ 
        const {grid, mouseIsPressed } = this.state;
        const {nodes} = this.state;
        return(
            <div className='grid'>
                {/* <button >
                Visualize
                </button> */}
                {nodes.map((row, rowIdx) => {
                    return ( 
                    <div key={rowIdx}>
                        {row.map((node, nodeIdx) => {
                            return(
                                <Node 
                                key={nodeIdx} 
                                isStart={isStart}
                                isFinish={isFinish}></Node>
                            );
                        })}
                    </div>
                    );
                })}                 
            </div>
        )
    }
}