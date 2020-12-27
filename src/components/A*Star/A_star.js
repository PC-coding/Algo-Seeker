import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';

export default class AStar extends Component {
    sketch(p){

        // Function to delete element from the array
        function removeFromArray(arr, elt) {
            // Could use indexOf here instead to be more efficient
            for (let i = arr.length - 1; i >= 0; i--) {
              if (arr[i] == elt) {
                arr.splice(i, 1);
              }
            }
          }
          
          // An educated guess of how far it is between two points
          function heuristic(a, b) {
            let d = p.dist(a.i, a.j, b.i, b.j);
            // let d = abs(a.i - b.i) + abs(a.j - b.j);
            return d;
          }
          
          // How many columns and rows?
          let cols = 50;
          let rows = 50;
          
          // This will be the 2D array
          let grid = new Array(cols);
          
          // Open and closed set
          let openSet = [];
          let closedSet = [];
          
          // Start and end
          let start;
          let end;
          
          // Width and height of each cell of grid
          let w, h;
          
          // The road taken
          let path = [];
          
            p.setup = () => {
            p.createCanvas(800, 800);
            console.log('A*');
          
            // Grid cell size
            w = p.width / cols;
            h = p.height / rows;
          
            // Making a 2D array
            for (let i = 0; i < cols; i++) {
              grid[i] = new Array(rows);
            }
          
            for (let i = 0; i < cols; i++) {
              for (let j = 0; j < rows; j++) {
                grid[i][j] = new Spot(i, j);
              }
            }
          
            // All the neighbors
            for (let i = 0; i < cols; i++) {
              for (let j = 0; j < rows; j++) {
                grid[i][j].addNeighbors(grid);
              }
            }
          
            // Start and end
            start = grid[0][0];
            end = grid[cols - 1][rows - 1];
            start.wall = false;
            end.wall = false;
          
            // openSet starts with beginning only
            openSet.push(start);

            let button = p.createButton("visualize");
            button.mousePressed(resetSketch);
            button.parent("resetAStar");
          }
          function resetSketch() {
            window.location.reload();
        }
          
          p.draw = () => {
            // Am I still searching?
            if (openSet.length > 0) {
              // Best next option
              let winner = 0;
              for (let i = 0; i < openSet.length; i++) {
                if (openSet[i].f < openSet[winner].f) {
                  winner = i;
                }
              }
              let current = openSet[winner];
          
              // Did I finish?
              if (current === end) {
                p.noLoop();
                console.log('DONE!');
              }
          
              // Best option moves from openSet to closedSet
              removeFromArray(openSet, current);
              closedSet.push(current);
          
              // Check all the neighbors
              let neighbors = current.neighbors;
              for (let i = 0; i < neighbors.length; i++) {
                let neighbor = neighbors[i];
          
                // Valid next spot?
                if (!closedSet.includes(neighbor) && !neighbor.wall) {
                  let tempG = current.g + heuristic(neighbor, current);
          
                  // Is this a better path than before?
                  let newPath = false;
                  if (openSet.includes(neighbor)) {
                    if (tempG < neighbor.g) {
                      neighbor.g = tempG;
                      newPath = true;
                    }
                  } else {
                    neighbor.g = tempG;
                    newPath = true;
                    openSet.push(neighbor);
                  }
          
                  // Yes, it's a better path
                  if (newPath) {
                    neighbor.h = heuristic(neighbor, end);
                    neighbor.f = neighbor.g + neighbor.h;
                    neighbor.previous = current;
                  }
                }
              }
              // Uh oh, no solution
            } else {
              console.log('no solution');
              p.noLoop();
              return;
            }
          
            // Draw current state of everything
            p.background(255);
          
            for (let i = 0; i < cols; i++) {
              for (let j = 0; j < rows; j++) {
                grid[i][j].show();
              }
            }
          
            for (let i = 0; i < closedSet.length; i++) {
              closedSet[i].show(p.color(255, 0, 0, 50));
            }
          
            for (let i = 0; i < openSet.length; i++) {
              openSet[i].show(p.color(0, 255, 0, 50));
            }
          
            // Find the path by working backwards
            path = [];
            let temp = path;
            path.push(temp);
            while (temp.previous) {
              path.push(temp.previous);
              temp = temp.previous;
            }
          
            // for (let i = 0; i < path.length; i++) {
            // path[i].show(color(0, 0, 255));
            //}
          
            // Drawing path as continuous line
            p.noFill();
            p.stroke(255, 0, 200);
            p.strokeWeight(w / 2);
            p.beginShape();
            for (let i = 0; i < path.length; i++) {
              p.vertex(path[i].i * w + w / 2, path[i].j * h + h / 2);
            }
            p.endShape();
          }
          // An object to describe a spot in the grid
         function Spot(i, j) {
              // Location
              this.i = i;
              this.j = j;
            
              // f, g, and h values for A*
              this.f = 0;
              this.g = 0;
              this.h = 0;
            
              // Neighbors
              this.neighbors = [];
            
              // Where did I come from?
              this.previous = undefined;
            
              // Am I a wall?
              this.wall = false;
              if (p.random(1) < 0.4) {
                this.wall = true;
              }
            
              // Display me
              this.show = function(col) {
                if (this.wall) {
                  p.fill(0);
                  p.noStroke();
                  p.ellipse(this.i * w + w / 2, this.j * h + h / 2, w / 2, h / 2);
                } else if (col) {
                  p.fill(col);
                  p.rect(this.i * w, this.j * h, w, h);
                }
              };
            
              // Figure out who my neighbors are
              this.addNeighbors = function(grid) {
                var i = this.i;
                var j = this.j;
                if (i < cols - 1) {
                  this.neighbors.push(grid[i + 1][j]);
                }
                if (i > 0) {
                  this.neighbors.push(grid[i - 1][j]);
                }
                if (j < rows - 1) {
                  this.neighbors.push(grid[i][j + 1]);
                }
                if (j > 0) {
                  this.neighbors.push(grid[i][j - 1]);
                }
                if (i > 0 && j > 0) {
                  this.neighbors.push(grid[i - 1][j - 1]);
                }
                if (i < cols - 1 && j > 0) {
                  this.neighbors.push(grid[i + 1][j - 1]);
                }
                if (i > 0 && j < rows - 1) {
                  this.neighbors.push(grid[i - 1][j + 1]);
                }
                if (i < cols - 1 && j < rows - 1) {
                  this.neighbors.push(grid[i + 1][j + 1]);
                }
              };
        }
    }
    render(){
        return(
            <section id='AStar'>
                <div className='title5'>
                    A* Search Algorithm
                </div>

                <div className="dijkstraDescription">
                <b id='bold'>What is it?:</b> <br/>
                    The A* search is a graph traversal and path searching algorithm which is often<br />
                    used in many fields of computer science due to it's completeness, optimality and efficiency.<br/>
                    <br/>
                <b id="bold"> How it works: </b> 
                    <br />
                    Like Dijkstra, A* works by making a shortest path tree from the <b>start</b> node to the <br/>
                    <b>target</b> node.<br/>
                    <br/>
                <b id='bold'>Real World Application:</b><br/>
                    - It's used in various applications such as maps. In maps, the algorithm is used to calculate the <br/> 
                    shortest distance between the initial node to the destination node.<br/>
                    <br/>
                <b id="bold">Note: </b>
                    Although A* search algorithm's efficiency - one major practical drawback is it's<br/>
                    O(bd) space complexity meaning that it stores all generated nodes memory.  <br></br>
                </div>

                <div id="resetAStar"></div>
                <br/>
                <P5Wrapper sketch={this.sketch}></P5Wrapper>
            </section>

        )
    }
}
