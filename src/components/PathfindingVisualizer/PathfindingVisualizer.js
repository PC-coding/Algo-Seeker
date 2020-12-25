import React, { Component } from "react";
import Node from "./Node/Node";
import { dijkstra, getNodesInShortestPathOrder } from "../dijkstra/djikstra";
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Button,
  Segment
} from "semantic-ui-react";



const START_NODE_ROW = 10;
const START_NODE_COL = 10;
const FINISH_NODE_ROW = 10;
const FINISH_NODE_COL = 40;

export default class PathfindingVisualizer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: [],
      mouseIsPressed: false
    };
  }

  componentDidMount() {
    const grid = getInitialGrid();
    this.setState({ grid });
  }

  handleMouseDown(row, col) {
    const newGrid = getNewGridWithWallToggled(this.state.grid, row, col);
    this.setState({ grid: newGrid, mouseIsPressed: true });
  }

  handleMouseEnter(row, col) {
    if (!this.state.mouseIsPressed) return;
    const newGrid = getNewGridWithWallToggled(this.state.grid, row, col);
    this.setState({ grid: newGrid });
  }

  handleMouseUp() {
    this.setState({ mouseIsPressed: false });
  }

  animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder) {
    for (let i = 0; i <= visitedNodesInOrder.length; i++) {
      if (i === visitedNodesInOrder.length) {
        setTimeout(() => {
          this.animateShortestPath(nodesInShortestPathOrder);
        }, 10 * i);
        return;
      }
      setTimeout(() => {
        const node = visitedNodesInOrder[i];
        document.getElementById(`node-${node.row}-${node.col}`).className =
          "node node-visited";
      }, 10 * i);
    }
  }

  animateShortestPath(nodesInShortestPathOrder) {
    for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
      setTimeout(() => {
        const node = nodesInShortestPathOrder[i];
        document.getElementById(`node-${node.row}-${node.col}`).className =
          "node node-shortest-path";
      }, 50 * i);
    }
  }

  visualizeDijkstra() {
    const { grid } = this.state;
    const startNode = grid[START_NODE_ROW][START_NODE_COL];
    const finishNode = grid[FINISH_NODE_ROW][FINISH_NODE_COL];
    const visitedNodesInOrder = dijkstra(grid, startNode, finishNode);
    const nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);
    this.animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder);
  }

  clearPath() {
    this.setState({ grid: [] });
    const grid = getInitialGrid();
    this.setState({ grid });
  }

  resetSketch() {
    window.location.reload();
  }

  render() {
    const { grid, mouseIsPressed } = this.state;

    return (
      <section id="dijkstraSec">

        <div id="dijkstraTitle">
  Dijkstra's Algorithm
</div> <b></b>

<div className="dijkstraDescription">
    <b id='bold'>What is it?:</b> <br />
    Dijkstra's Algorithm is an algorithm for finding the shortest paths between nodes in a graph.<br />
    It generates a shortest path tree with given source which guarantees the shortest path.<br />
    <br/>
<b id="bold">How to use: </b> <br />
    Create walls by clicking and dragging over the grid. <br />
    Hit visualize to see Dijkstra's Algorithm select the shortest path!  <br />
    <br/>
<b id="bold"> How it works: </b> <br />The <b>start</b> node and <b>end</b> node are marked on left and right respectively. <br />
    Find distance to all nodes from start, all distances=infinity except start node to begin <br />
<b id="bold">1.</b> Pick the closest node to visit, which is start node. <br />
  <b id="bold">2.</b> Update neighboring nodes, set their distance to current distance + 1.<br></br>
  <b id="bold">3.</b> Mark start node visited. Select next closest node.
  <br />
  <b id="bold">4.</b> Pick one of the 4 neighbors and repeat.<br></br><br></br>
<b id="bold">Note: </b>The most efficient way to keep track of the closest unvisited node is by using a Min Heap.<br></br>
  Since the amount of nodes is so few here, we opt for using an array of unvisited nodes and<br></br>
   sort the nodes with each pass. The nodes are animated in the order that they are visited.


</div>

          <Button
              style={{ marginRight: 16 }}
              onClick={() => this.clearPath()}
            >
              Clear Path
            </Button>

            <Button
              color="blue"
              style={{ marginRight: 16 }}
              onClick={() => this.visualizeDijkstra()}>
              Visualize Algorithm
            </Button>




        <Button onClick={() => this.resetSketch()}>
          Reset Board
        </Button>

        <div className="dijkstraGrid">
          {grid.map((row, rowIdx) => {
            return (
              <div key={rowIdx}>
                {row.map((node, nodeIdx) => {
                  const { row, col, isFinish, isStart, isWall } = node;
                  return (
                    <Node
                      key={nodeIdx}
                      col={col}
                      isFinish={isFinish}
                      isStart={isStart}
                      isWall={isWall}
                      mouseIsPressed={mouseIsPressed}
                      onMouseDown={(row, col) => this.handleMouseDown(row, col)}
                      onMouseEnter={(row, col) =>
                        this.handleMouseEnter(row, col)
                      }
                      onMouseUp={() => this.handleMouseUp()}
                      row={row}
                    ></Node>
                  );
                })}
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}

const getInitialGrid = () => {
  const grid = [];
  for (let row = 0; row < 20; row++) {
    const currentRow = [];
    for (let col = 0; col < 50; col++) {
      currentRow.push(createNode(col, row));
    }
    grid.push(currentRow);
  }
  return grid;
};

const createNode = (col, row) => {
  return {
    col,
    row,
    isStart: row === START_NODE_ROW && col === START_NODE_COL,
    isFinish: row === FINISH_NODE_ROW && col === FINISH_NODE_COL,
    distance: Infinity,
    isVisited: false,
    isWall: false,
    previousNode: null
  };
};

const getNewGridWithWallToggled = (grid, row, col) => {
  const newGrid = grid.slice();
  const node = newGrid[row][col];
  const newNode = {
    ...node,
    isWall: !node.isWall
  };
  newGrid[row][col] = newNode;
  return newGrid;
};