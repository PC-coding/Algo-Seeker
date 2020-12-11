// import React, {Component} from 'react';
// import './BFS.css';




// var DUMMY_OBSTACLES = ['{"q":6,"r":9,"s":-15}', '{"q":7,"r":8,"s":-15}', '{"q":7,"r":7,"s":-14}', '{"q":8,"r":6,"s":-14}', '{"q":8,"r":5,"s":-13}', '{"q":9,"r":4,"s":-13}', '{"q":5,"r":9,"s":-14}',
//  '{"q":4,"r":9,"s":-13}', '{"q":3,"r":9,"s":-12}', '{"q":2,"r":9,"s":-11}', '{"q":1,"r":9,"s":-10}', '{"q":0,"r":9,"s":-9}', '{"q":-1,"r":9,"s":-8}', '{"q":-2,"r":9,"s":-7}', '{"q":-3,"r":9,"s":-6}',
//   '{"q":-4,"r":9,"s":-5}', '{"q":-5,"r":9,"s":-4}', '{"q":-6,"r":9,"s":-3}', '{"q":-7,"r":9,"s":-2}', '{"q":-8,"r":9,"s":-1}', '{"q":-9,"r":9,"s":0}', '{"q":-11,"r":9,"s":2}', '{"q":-10,"r":9,"s":1}',
//    '{"q":-12,"r":9,"s":3}', '{"q":-13,"r":9,"s":4}', '{"q":-14,"r":9,"s":5}', '{"q":-15,"r":9,"s":6}', '{"q":-15,"r":8,"s":7}', '{"q":-14,"r":7,"s":7}', '{"q":-14,"r":6,"s":8}', '{"q":-13,"r":5,"s":8}',
//     '{"q":-13,"r":4,"s":9}', '{"q":-12,"r":3,"s":9}', '{"q":-12,"r":2,"s":10}', '{"q":-11,"r":1,"s":10}', '{"q":-11,"r":0,"s":11}', '{"q":-10,"r":-1,"s":11}', '{"q":-10,"r":-2,"s":12}',
//      '{"q":-9,"r":-3,"s":12}', '{"q":-9,"r":-4,"s":13}', '{"q":-8,"r":-5,"s":13}', '{"q":-8,"r":-6,"s":14}', '{"q":-7,"r":-7,"s":14}', '{"q":-7,"r":-8,"s":15}', '{"q":-6,"r":-9,"s":15}',
//       '{"q":-5,"r":-9,"s":14}', '{"q":-4,"r":-9,"s":13}', '{"q":-3,"r":-9,"s":12}', '{"q":-2,"r":-9,"s":11}', '{"q":-1,"r":-9,"s":10}', '{"q":0,"r":-9,"s":9}', '{"q":1,"r":-9,"s":8}', '{"q":2,"r":-9,"s":7}',
//        '{"q":3,"r":-9,"s":6}', '{"q":4,"r":-9,"s":5}', '{"q":5,"r":-9,"s":4}', '{"q":6,"r":-9,"s":3}', '{"q":7,"r":-9,"s":2}', '{"q":8,"r":-9,"s":1}', '{"q":9,"r":-9,"s":0}', '{"q":10,"r":-9,"s":-1}',
//         '{"q":11,"r":-9,"s":-2}', '{"q":12,"r":-9,"s":-3}', '{"q":13,"r":-9,"s":-4}', '{"q":14,"r":-9,"s":-5}', '{"q":15,"r":-9,"s":-6}', '{"q":15,"r":-8,"s":-7}', '{"q":14,"r":-7,"s":-7}',
//          '{"q":14,"r":-6,"s":-8}', '{"q":13,"r":-5,"s":-8}', '{"q":13,"r":-4,"s":-9}', '{"q":12,"r":-3,"s":-9}', '{"q":12,"r":-2,"s":-10}', '{"q":11,"r":-1,"s":-10}', '{"q":11,"r":0,"s":-11}',
//           '{"q":10,"r":1,"s":-11}', '{"q":10,"r":2,"s":-12}', '{"q":9,"r":3,"s":-12}', '{"q":-2, "r":-8, "s":10}', '{"q": -3, "r": -7, "s": 10}', '{"q": -4, "r": -6, "s": 10}', '{"q": -5, "r": -5, "s": 10}',
//           '{"q": -6, "r": -4, "s": 10}', '{"q": -7, "r": -4, "s": 11}', '{"q": 4, "r": -7, "s": 3}', '{"q": 3, "r": -6, "s": 3}', '{"q": 2, "r": -5, "s": 3}',
//     '{"q": 1, "r": -4, "s": 3}',
//     '{"q": 2, "r": -4, "s": 2}',
//     '{"q": 3, "r": -4, "s": 1}',
//     '{"q": 4, "r": -4, "s": 0}',
//     '{"q": 9, "r": -3, "s": -6}',
//     '{"q": 10, "r": -3, "s": -7}',
//     '{"q": 8, "r": -2, "s": -6}',
//     '{"q": 7, "r": -2, "s": -5}',
//     '{"q": 4, "r": -2, "s": -2}',
//     '{"q": 4, "r": -1, "s": -3}',
//     '{"q": 4, "r": 0, "s": -4}',
//     '{"q": 4, "r": 1, "s": -5}',
//     '{"q": 3, "r": 2, "s": -5}',
//     '{"q": 2, "r": 3, "s": -5}',
//     '{"q": 1, "r": 4, "s": -5}',
//     '{"q": -0, "r": 5, "s": -5}',
//     '{"q": -1, "r": 6, "s": -5}',
//     '{"q": -2, "r": 7, "s": -5}',
//     '{"q": 4, "r": 5, "s": -9}',
//     '{"q": 4, "r": 6, "s": -10}',
//     '{"q": 5, "r": 6, "s": -11}',
//     '{"q": 5, "r": 7, "s": -12}',
//     '{"q": -5, "r": 7, "s": -2}',
//     '{"q": -5, "r": 8, "s": -3}',
//     '{"q": -5, "r": 6, "s": -1}',
//     '{"q": -5, "r": 5, "s": 0}',
//     '{"q": -4, "r": 4, "s": -0}',
//     '{"q": -3, "r": 3, "s": -0}',
//     '{"q": -5, "r": 3, "s": 2}',
//     '{"q": -6, "r": 4, "s": 2}',
//     '{"q": -4, "r": 2, "s": 2}',
//     '{"q": -4, "r": 1, "s": 3}',
//     '{"q": -7, "r": 4, "s": 3}',
//     '{"q": -8, "r": 4, "s": 4}',
//     '{"q": -9, "r": 4, "s": 5}',
//     '{"q": -10, "r": 4, "s": 6}',
//     '{"q": -11, "r": 4, "s": 7}',
//     '{"q": -12, "r": 4, "s": 8}',
//     '{"q": -6, "r": 1, "s": 5}',
//     '{"q": -6, "r": 0, "s": 6}',
//     '{"q": -6, "r": -1, "s": 7}',
//     '{"q": -6, "r": -2, "s": 8}',
//     '{"q": -2, "r": -1, "s": 3}',
//     '{"q": -2, "r": -2, "s": 4}']

// export default class BFS extends React.Component {
//   constructor(props) {
//     super(props);

//     this.handleMouseMove = this.handleMouseMove.bind(this);
//     this.handleClick = this.handleClick.bind(this);
//     this.state = {
//       hexSize: 20,
//       hexOrigin: { x: 400, y: 300 },
//       currentHex: { q: 0, r: 0, s: 0, x: 0, y: 0 },
//       obstacles: DUMMY_OBSTACLES,
//       playerPosition: { q: 0, r: 0, s: 0},
//       cameFrom: {},
//       hexPath: [],
//       path: []
//     }
//   }

//   componentWillMount(){
//     let hexParametres = this.getHexParametres();
//     this.setState({
//       canvasSize: { canvasWidth: 800, canvasHeight: 600 },
//       hexParametres: hexParametres
//     })
//   }


//   componentDidMount(){
//     const { canvasWidth, canvasHeight } = this.state.canvasSize;
//     this.canvasHex.width = canvasWidth;
//     this.canvasHex.height = canvasHeight;
//     this.canvasInteraction.width = canvasWidth;
//     this.canvasInteraction.height = canvasHeight;
//     this.getCanvasPosition(this.canvasInteraction);
//     this.drawHexes();
//   }

//   shouldComponentUpdate(nextProps, nextState) {
//     if(nextState.currentHex !== this.state.currentHex) {
//       const { q, r, s, x, y } = nextState.currentHex;
//       const { canvasWidth, canvasHeight } = this.state.canvasSize;
//       const ctx = this.canvasInteraction.getContext("2d");
//       ctx.clearRect(0, 0, canvasWidth, canvasHeight);
//       let currentDistanceLine = nextState.currentDistanceLine;
//       for(let i = 0; i <= currentDistanceLine.length - 2; i++) {
//         if(i == 0) {
//           this.drawHex(this.canvasInteraction, this.Point(currentDistanceLine[i].x, currentDistanceLine[i].y), 1, "black", "red");
//         }
//         else {
//           this.drawHex(this.canvasInteraction, this.Point(currentDistanceLine[i].x, currentDistanceLine[i].y), 1, "black", "grey");
//         }
//       }
//       nextState.obstacles.map((l)=>{
//         const { q,r,s,x,y } = JSON.parse(l);
//         this.drawHex(this.canvasInteraction, this.Point(x,y), 1, "black", "black");
//       })
//       //this.drawNeighbors(this.Hex(q, r, s));
//       this.drawHex(this.canvasInteraction, this.Point(x,y), 1, "black", "grey");
//       return true;
//     }
//     return false;
//   }

//   getHexCornerCoord(center, i) {
//    let angle_deg = 60 * i  + 30;
//    let angle_rad = Math.PI / 180 * angle_deg;
//    let x = center.x + this.state.hexSize * Math.cos(angle_rad);
//    let y = center.y + this.state.hexSize * Math.sin(angle_rad);
//    return this.Point(x, y);
//  }

//   Point(x, y) {
//    return {x: x, y: y}
//  }

//  drawHex(canvasID, center, lineWidth, lineColor, fillColor) {
//   for (let i = 0; i <= 5; i++) {
//     let start = this.getHexCornerCoord(center, i);
//     let end = this.getHexCornerCoord(center, i + 1);
//     this.fillHex(canvasID, center, fillColor);
//     this.drawLine(canvasID, start, end, lineWidth, lineColor);
//   }
// }


//  drawLine(canvasID, start, end, lineWidth, lineColor) {
//      const ctx = canvasID.getContext("2d");
//      ctx.beginPath();
//      ctx.moveTo(start.x, start.y);
//      ctx.strokeStyle = lineColor;
//      ctx.lineWidth = lineWidth;
//      ctx.lineTo(end.x, end.y);
//      ctx.stroke();
//      ctx.closePath();
//    }

//    drawHexes() {
//      const { canvasWidth, canvasHeight } = this.state.canvasSize;
//      const { hexWidth, hexHeight, vertDist, horizDist } = this.state.hexParametres;
//      const hexOrigin = this.state.hexOrigin;
//      let qLeftSide = Math.round(hexOrigin.x/hexWidth) * 4;
//      let qRightSide = Math.round(canvasWidth - hexOrigin.x) / hexWidth * 2;
//      let rTopSide = Math.round(hexOrigin.y/(hexHeight/2));
//      let rBottomSide = Math.round((canvasHeight - hexOrigin.y)/(hexHeight/2));

//      var p = 0;
//      for(let r = 0; r <= rBottomSide; r++) {
//        if(r % 2 == 0 && r !== 0) {
//          p++;
//        }
//        for(let q = -qLeftSide; q <= qRightSide; q++) {
//          const { x, y } = this.hexToPixel(this.Hex(q-p, r))
//          if((x > hexWidth/2 && x < canvasWidth - hexWidth/2) && (y > hexHeight/2 && y < canvasHeight - hexHeight/2)) {
//            this.drawHex(this.canvasHex, this.Point(x,y), 1, "black", "grey");
//            //this.drawHexCoordinates(this.canvasHex, this.Point(x,y), this.Hex(q-p, r, - ( q - p) - r));
//          }
//        }
//      }
//      var n = 0;
//      for(let r = -1; r >= -rTopSide; r--) {
//         if(r%2 !== 0) {
//           n++;
//         }
//         for(let q = -qLeftSide; q <= qRightSide; q++) {
//           const { x, y } = this.hexToPixel(this.Hex(q+n, r));
//           if((x > hexWidth/2 && x < canvasWidth - hexWidth/2) && (y > hexHeight/2 && y < canvasHeight - hexHeight/2)) {
//             this.drawHex(this.canvasHex, this.Point(x,y), 1, "black", "grey");
//             //this.drawHexCoordinates(this.canvasHex, this.Point(x,y), this.Hex(q+n, r, - (q + n) - r));
//           }
//         }
//      }
//    }

//    hexToPixel(h){
//      let hexOrigin = this.state.hexOrigin;
//      let x = this.state.hexSize * Math.sqrt(3) * (h.q + h.r/2) + hexOrigin.x;
//      let y = this.state.hexSize * 3/2 * h.r + hexOrigin.y;
//      return this.Point(x, y)
//    }

// Hex(q, r, s) {
//   return { q: q, r: r, s: s}
// }

// drawHexCoordinates(canvasID, center, h) {
//   const ctx = canvasID.getContext("2d");
//   ctx.fillText(h.q, center.x+6, center.y);
//   ctx.fillText(h.r, center.x-3, center.y+15);
//   ctx.fillText(h.s, center.x-12, center.y);

// }

// getHexParametres() {
//   let hexHeight = this.state.hexSize * 2;
//   let hexWidth = Math.sqrt(3)/2 * hexHeight;
//   let vertDist = hexHeight * 3/4;
//   let horizDist = hexWidth;
//   return { hexWidth, hexHeight, vertDist, horizDist }
// }

// handleMouseMove(e) {
//   const { left, right, top, bottom } = this.state.canvasPosition;
//   const { canvasWidth, canvasHeight } = this.state.canvasSize;
//   const { hexWidth, hexHeight, vertDist, horizDist } = this.state.hexParametres;
//   let offsetX = e.pageX - left;
//   let offsetY = e.pageY - top;
//   const { q, r, s } = this.cubeRound(this.pixelToHex(this.Point(offsetX, offsetY)));
//   const { x, y } = this.hexToPixel(this.Hex(q, r, s));
//   let playerPosition = this.state.playerPosition;
//   this.getDistanceLine(this.Hex(0,0,0), this.Hex(q,r,s));
//   console.log(this.state.currentDistanceLine)
//   if((x > hexWidth / 2 && x < canvasWidth - hexWidth / 2) && (y > hexHeight / 2 && y < canvasHeight - hexHeight/2)){
//     this.setState({
//       currentHex: { q, r, s, x, y }
//     })
//   }
// }

// getCanvasPosition(canvasID) {
//   let rect = canvasID.getBoundingClientRect();
//   this.setState({
//     canvasPosition: { left: rect.left, right: rect.right, top: rect.top, bottom: rect.bottom }
//   })
// }

// pixelToHex(p) {
//   let size = this.state.hexSize;
//   let origin = this.state.hexOrigin;
//   let q = ((p.x - origin.x) * Math.sqrt(3)/3 - (p.y - origin.y) / 3) / size
//   let r = (p.y - origin.y) * 2/3 / size
//   return this.Hex(q, r, - q - r);
// }

// cubeRound(cube) {
//   var rx = Math.round(cube.q)
//   var ry = Math.round(cube.r)
//   var rz = Math.round(cube.s)

//   var x_diff = Math.abs(rx - cube.q)
//   var y_diff = Math.abs(ry - cube.r)
//   var z_diff = Math.abs(rz - cube.s)

//   if(x_diff > y_diff && x_diff > z_diff) {
//     rx = -ry-rz
//   }
//   else if(y_diff > z_diff) {
//     ry = -rx-rz
//   }
//   else{
//     rz = -rx-ry
//   }
//   return this.Hex(rx, ry, rz);
// }

// cubeDirections(direction) {
//   const cubeDirections = [this.Hex(1, 0, -1), this.Hex(1, -1, 0), this.Hex(0, -1, 1), this.Hex(-1, 0, 1), this.Hex(-1, 1, 0),
//   this.Hex(0, 1, -1)];
//   return cubeDirections[direction];
// }

// cubeAdd(a, b) {
//   return this.Hex(a.q + b.q, a.r + b.r, a.s + b.s);
// }

// cubeSubstract(hexA, hexB) {
//   return this.Hex(hexA.q - hexB.q, hexA.r - hexB.r, hexA.s - hexB.s);
// }

// getCubeNeighbor(h, direction) {
//   return this.cubeAdd(h, this.cubeDirections(direction));
// }

// drawNeighbors(h) {
//   for(let i = 0; i <=5; i++) {
//     const { q, r, s } = this.getCubeNeighbor(this.Hex(h.q, h.r, h.s), i);
//     const { x, y } = this.hexToPixel(this.Hex(q, r, s));
//     this.drawHex(this.canvasInteraction, this.Point(x, y), "red", 2);
//   }
// }

// cubeDistance(hexA, hexB) {
//   const { q, r, s } = this.cubeSubstract(hexA, hexB);
//   return (Math.abs(q) + Math.abs(r) + Math.abs(s)) /2;
// }

// linearInt(a, b, t) {
//   return (a + (b - a) * t)
// }

// cubeLinearInt(hexA, hexB, t) {
//   return this.Hex(this.linearInt(hexA.q, hexB.q, t), this.linearInt(hexA.r, hexB.r, t), this.linearInt(hexA.s, hexB.s, t));
// }

// getDistanceLine(hexA, hexB) {
//   let dist = this.cubeDistance(hexA, hexB);
//   var arr = [];
//   for(let i = 0; i <= dist; i++) {
//     let center = this.hexToPixel(this.cubeRound(this.cubeLinearInt(hexA, hexB, 1.0 / dist * i)));
//     arr = [].concat(arr, center);
//   }
//   this.setState({
//     currentDistanceLine: arr
//   })
// }

// fillHex(canvasID, center, fillColor) {
//   let c0 = this.getHexCornerCoord(center, 0);
//   let c1 = this.getHexCornerCoord(center, 1);
//   let c2 = this.getHexCornerCoord(center, 2);
//   let c3 = this.getHexCornerCoord(center, 3);
//   let c4 = this.getHexCornerCoord(center, 4);
//   let c5 = this.getHexCornerCoord(center, 5);
//   const ctx = canvasID.getContext("2d");
//   ctx.beginPath();
//   ctx.fillStyle = fillColor;
//   ctx.globalAlpha = 0.1;
//   ctx.moveTo(c0.x, c0.y);
//   ctx.lineTo(c1.x, c1.y);
//   ctx.lineTo(c2.x, c2.y);
//   ctx.lineTo(c3.x, c3.y);
//   ctx.lineTo(c4.x, c4.y);
//   ctx.lineTo(c5.x, c5.y);
//   ctx.closePath();
//   ctx.fill();
// }

// handleClick() {
//   this.addObstacles();
// }

// drawObstacles() {
//  this.state.obstacles.map((1)=> {
//      const { q, r, s } = JSON.parse(1);
//      const { x, y } = this.hexToPixel(this.Hex(q,r,s));
//      this.drawHex(this.canvasHex, this.Point(x,y), 1, 'black', 'black')
//  })
// }

//   render() {
//     return (
//       <div className="BFS">
//         <canvas ref={canvasHex => this.canvasHex = canvasHex }></canvas>
//         <canvas ref={canvasCoordinates => this.canvasCoordinates = canvasCoordinates }></canvas>
//         <canvas ref={canvasInteraction => this.canvasInteraction = canvasInteraction} onMouseMove = {this.handleMouseMove}
//           onClick={this.handleClick}></canvas>
//       </div>
//     )
//   }
// }



import React, {Component} from 'react';
import './BFS.css'


var DUMMY_OBSTACLES = ['{"q":6,"r":9,"s":-15}', '{"q":7,"r":8,"s":-15}', '{"q":7,"r":7,"s":-14}', '{"q":8,"r":6,"s":-14}', '{"q":8,"r":5,"s":-13}', '{"q":9,"r":4,"s":-13}', '{"q":5,"r":9,"s":-14}',
 '{"q":4,"r":9,"s":-13}', '{"q":3,"r":9,"s":-12}', '{"q":2,"r":9,"s":-11}', '{"q":1,"r":9,"s":-10}', '{"q":0,"r":9,"s":-9}', '{"q":-1,"r":9,"s":-8}', '{"q":-2,"r":9,"s":-7}', '{"q":-3,"r":9,"s":-6}',
  '{"q":-4,"r":9,"s":-5}', '{"q":-5,"r":9,"s":-4}', '{"q":-6,"r":9,"s":-3}', '{"q":-7,"r":9,"s":-2}', '{"q":-8,"r":9,"s":-1}', '{"q":-9,"r":9,"s":0}', '{"q":-11,"r":9,"s":2}', '{"q":-10,"r":9,"s":1}',
   '{"q":-12,"r":9,"s":3}', '{"q":-13,"r":9,"s":4}', '{"q":-14,"r":9,"s":5}', '{"q":-15,"r":9,"s":6}', '{"q":-15,"r":8,"s":7}', '{"q":-14,"r":7,"s":7}', '{"q":-14,"r":6,"s":8}', '{"q":-13,"r":5,"s":8}',
    '{"q":-13,"r":4,"s":9}', '{"q":-12,"r":3,"s":9}', '{"q":-12,"r":2,"s":10}', '{"q":-11,"r":1,"s":10}', '{"q":-11,"r":0,"s":11}', '{"q":-10,"r":-1,"s":11}', '{"q":-10,"r":-2,"s":12}',
     '{"q":-9,"r":-3,"s":12}', '{"q":-9,"r":-4,"s":13}', '{"q":-8,"r":-5,"s":13}', '{"q":-8,"r":-6,"s":14}', '{"q":-7,"r":-7,"s":14}', '{"q":-7,"r":-8,"s":15}', '{"q":-6,"r":-9,"s":15}',
      '{"q":-5,"r":-9,"s":14}', '{"q":-4,"r":-9,"s":13}', '{"q":-3,"r":-9,"s":12}', '{"q":-2,"r":-9,"s":11}', '{"q":-1,"r":-9,"s":10}', '{"q":0,"r":-9,"s":9}', '{"q":1,"r":-9,"s":8}', '{"q":2,"r":-9,"s":7}',
       '{"q":3,"r":-9,"s":6}', '{"q":4,"r":-9,"s":5}', '{"q":5,"r":-9,"s":4}', '{"q":6,"r":-9,"s":3}', '{"q":7,"r":-9,"s":2}', '{"q":8,"r":-9,"s":1}', '{"q":9,"r":-9,"s":0}', '{"q":10,"r":-9,"s":-1}',
        '{"q":11,"r":-9,"s":-2}', '{"q":12,"r":-9,"s":-3}', '{"q":13,"r":-9,"s":-4}', '{"q":14,"r":-9,"s":-5}', '{"q":15,"r":-9,"s":-6}', '{"q":15,"r":-8,"s":-7}', '{"q":14,"r":-7,"s":-7}',
         '{"q":14,"r":-6,"s":-8}', '{"q":13,"r":-5,"s":-8}', '{"q":13,"r":-4,"s":-9}', '{"q":12,"r":-3,"s":-9}', '{"q":12,"r":-2,"s":-10}', '{"q":11,"r":-1,"s":-10}', '{"q":11,"r":0,"s":-11}',
          '{"q":10,"r":1,"s":-11}', '{"q":10,"r":2,"s":-12}', '{"q":9,"r":3,"s":-12}', '{"q":-2, "r":-8, "s":10}', '{"q": -3, "r": -7, "s": 10}', '{"q": -4, "r": -6, "s": 10}', '{"q": -5, "r": -5, "s": 10}',
          '{"q": -6, "r": -4, "s": 10}', '{"q": -7, "r": -4, "s": 11}', '{"q": 4, "r": -7, "s": 3}', '{"q": 3, "r": -6, "s": 3}', '{"q": 2, "r": -5, "s": 3}',
    '{"q": 1, "r": -4, "s": 3}',
    '{"q": 2, "r": -4, "s": 2}',
    '{"q": 3, "r": -4, "s": 1}',
    '{"q": 4, "r": -4, "s": 0}',
    '{"q": 9, "r": -3, "s": -6}',
    '{"q": 10, "r": -3, "s": -7}',
    '{"q": 8, "r": -2, "s": -6}',
    '{"q": 7, "r": -2, "s": -5}',
    '{"q": 4, "r": -2, "s": -2}',
    '{"q": 4, "r": -1, "s": -3}',
    '{"q": 4, "r": 0, "s": -4}',
    '{"q": 4, "r": 1, "s": -5}',
    '{"q": 3, "r": 2, "s": -5}',
    '{"q": 2, "r": 3, "s": -5}',
    '{"q": 1, "r": 4, "s": -5}',
    '{"q": -0, "r": 5, "s": -5}',
    '{"q": -1, "r": 6, "s": -5}',
    '{"q": -2, "r": 7, "s": -5}',
    '{"q": 4, "r": 5, "s": -9}',
    '{"q": 4, "r": 6, "s": -10}',
    '{"q": 5, "r": 6, "s": -11}',
    '{"q": 5, "r": 7, "s": -12}',
    '{"q": -5, "r": 7, "s": -2}',
    '{"q": -5, "r": 8, "s": -3}',
    '{"q": -5, "r": 6, "s": -1}',
    '{"q": -5, "r": 5, "s": 0}',
    '{"q": -4, "r": 4, "s": -0}',
    '{"q": -3, "r": 3, "s": -0}',
    '{"q": -5, "r": 3, "s": 2}',
    '{"q": -6, "r": 4, "s": 2}',
    '{"q": -4, "r": 2, "s": 2}',
    '{"q": -4, "r": 1, "s": 3}',
    '{"q": -7, "r": 4, "s": 3}',
    '{"q": -8, "r": 4, "s": 4}',
    '{"q": -9, "r": 4, "s": 5}',
    '{"q": -10, "r": 4, "s": 6}',
    '{"q": -11, "r": 4, "s": 7}',
    '{"q": -12, "r": 4, "s": 8}',
    '{"q": -6, "r": 1, "s": 5}',
    '{"q": -6, "r": 0, "s": 6}',
    '{"q": -6, "r": -1, "s": 7}',
    '{"q": -6, "r": -2, "s": 8}',
    '{"q": -2, "r": -1, "s": 3}',
    '{"q": -2, "r": -2, "s": 4}']




export default class BreadthFirstSearch extends Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleExpandClick = this.handleExpandClick.bind(this);

    this.state = {
      hexSize: 20,
      //position of the very middle hexagon (changes the numbers seen in hexagons)
      //decreasing y moves hexagon(0,0,0) upwards, increasing x moves hexagon(0,0,0) to the right
      hexOrigin: { x: 400, y: 300 },
      currentHex: {q: 0, r: 0, s: 0, x: 0, y: 0},
      playerPosition: {q: 0, r: 0, s: 0, x: 400, y: 300},
      obstacles: DUMMY_OBSTACLES,
      frontier: [],
      //storing hexagons starting from playerPosition
      cameFrom: {}
    }
  }
  componentWillMount(){
    let hexParametres = this.getHexParametres();
    this.setState({
      canvasSize: { canvasWidth: 800, canvasHeight: 600 },
      hexParametres: hexParametres
    })
  }

  componentDidMount(){
    const { canvasWidth, canvasHeight } = this.state.canvasSize;
    this.canvasHex.width = canvasWidth;
    this.canvasHex.height = canvasHeight;
    this.canvasInteraction.width = canvasWidth;
    this.canvasInteraction.height = canvasHeight;
    this.canvasView.width = canvasWidth;
    this.canvasView.height = canvasHeight;
    this.getCanvasPosition(this.canvasInteraction);
    this.drawHex(this.canvasInteraction, this.Point(this.state.playerPosition.x, this.state.playerPosition.y), 1, "grey", "red", 0.2);
    this.drawHexes();
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(nextState.currentHex !== this.state.currentHex) {
      const { q, r, s, x, y } = nextState.currentHex;
      const { canvasWidth, canvasHeight } = this.state.canvasSize;
      const ctx = this.canvasInteraction.getContext("2d");
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      let currentDistanceLine = nextState.currentDistanceLine;

      for (let i = 0; i <= currentDistanceLine.length - 2; i++) {
        if(i === 0) {
          this.drawHex(this.canvasInteraction, this.Point(currentDistanceLine[i].x, currentDistanceLine[i].y), 1, "black", "red");
        }else {
          this.drawHex(this.canvasInteraction, this.Point(currentDistanceLine[i].x, currentDistanceLine[i].y), 1, "black", "grey");
        }

      }
      nextState.obstacles.map((l)=>{
        const { q, r, s } = JSON.parse(l);
        const { x, y } = this.hexToPixel(this.Hex(q, r, s))
        this.drawHex(this.canvasInteraction, this.Point(x, y), 1, "black", "black");

      })
      this.drawHex(this.canvasInteraction, this.Point(x, y), 1, "black", "grey");
      return true;
    }
    if(nextState.cameFrom !== this.state.cameFrom) {
      const { canvasWidth, canvasHeight } = this.state.canvasSize;
      const ctx = this.canvasView.getContext("2d");
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      for(let l in nextState.cameFrom) {
        const { q, r, s } = JSON.parse(l);
        const { x, y } = this.hexToPixel(this.Hex(q, r));
        this.drawHex(this.canvasView, this.Point(x, y), 1, "black", "green", 0.1);
      }
      return true;
    }

    return false;
  }


  drawHexes() {
    const { canvasWidth, canvasHeight } = this.state.canvasSize;
    const { hexWidth, hexHeight, vertDist, horizDist } = this.state.hexParametres;
    //calculate how many columns are on the left side
    //hexOrigin is distance from coorindate x = 0 to hex0(middle hexagon)
    const hexOrigin = this.state.hexOrigin;
    //dividing the distance from the left side of border(x=0) by
    //the width of a hexagon to calculate how many hexagons fit on left
    let qLeftSide = Math.round(hexOrigin.x/horizDist);
    //calculate how many hexagons will fit on the right
    let qRightSide = Math.round((canvasWidth - hexOrigin.x)/horizDist);
    let rTopSide = Math.round(hexOrigin.y/vertDist);
    let rBottomSide = Math.round((canvasHeight - hexOrigin.y)/vertDist);
    var p = 0;
    //screenshot 1 - populates hexigons vertically (populates POSITIVE rows)
    for(let r = 0; r <= rBottomSide; r++) {
      if(r%2 === 0 && r !== 0) {
        p++;
      }
      //populates hexigons horizontally in upper half (populates POSITIVE columns)
      for(let q = -qLeftSide; q <= qRightSide; q++) {
          const { x, y } = this.hexToPixel(this.Hex(q-p, r));
          if((x > hexWidth/2 && x < canvasWidth - hexWidth/2) && (y > hexHeight/2 && y < canvasHeight - hexHeight/2)) {
            this.drawHex(this.canvasHex, this.Point(x,y), 1, "black", "grey");
            //passing in canvas and position of each hex(row, column)

          }
      }
    }
    var n = 0;
    //screenshot 1 - populates hexigons vertically (populates NEGATIVE rows)
    for(let r = -1; r >= -rTopSide; r--) {
      if(r%2 !== 0) {
        n++;
      }
      //populates hexigons horizontally in lower half (populates NEGATIVE columns)
      for(let q = -qLeftSide; q <= qRightSide; q++) {
          //adding integers to hexToPixel arguments shifts hexagons right
          const { x, y } = this.hexToPixel(this.Hex(q+n, r));
          if((x > hexWidth/2 && x < canvasWidth - hexWidth/2) && (y > hexHeight/2 && y < canvasHeight - hexHeight/2)) {
            this.drawHex(this.canvasHex, this.Point(x,y), 1, "black", "grey");

          }
      }
    }
  }

  //builds the individual hex shape
  drawHex(canvasID, center, lineWidth, lineColor, fillColor) {
    for(let i = 0; i <=5; i++) {
      let start = this.getHexCornerCoord(center, i);
      let end = this.getHexCornerCoord(center, i + 1);

      this.fillHex(canvasID, center, fillColor);
      this.drawLine(canvasID, start, end, lineWidth, lineColor);

    }
  }

  //get the coordinates of the corner to draw the hex
    getHexCornerCoord(center, i) {
      var angle_deg = 60 * i + 30;
      var angle_rad = Math.PI / 180 * angle_deg;
      let x = center.x + this.state.hexSize * Math.cos(angle_rad);
      let y = center.y + this.state.hexSize * Math.sin(angle_rad);
      return this.Point(x, y);
    }

    Hex(q, r, s) {
      return {q: q, r: r, s: s}
    }

    Point(x, y) {
      return {x: x, y: y}
    }

//draws the line that shapes the hex
  drawLine(canvasID, start, end, lineWidth, lineColor) {
    const ctx = canvasID.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = lineWidth;
    ctx.lineTo(end.x, end.y);
    ctx.stroke();
    ctx.closePath();
  }

  fillHex(canvasID, center, fillColor) {
    let c0 = this.getHexCornerCoord(center, 0);
    let c1 = this.getHexCornerCoord(center, 1);
    let c2 = this.getHexCornerCoord(center, 2);
    let c3 = this.getHexCornerCoord(center, 3);
    let c4 = this.getHexCornerCoord(center, 4);
    let c5 = this.getHexCornerCoord(center, 5);
    const ctx = canvasID.getContext("2d");
    ctx.beginPath();
    ctx.fillStyle = fillColor;
    ctx.globalAlpha = 0.1;
    ctx.moveTo(c0.x, c0.y);
    ctx.lineTo(c1.x, c1.y);
    ctx.lineTo(c2.x, c2.y);
    ctx.lineTo(c3.x, c3.y);
    ctx.lineTo(c4.x, c4.y);
    ctx.lineTo(c5.x, c5.y);
    ctx.closePath();
    ctx.fill();
  }

//prints the coordinates inside of the hexagons
  drawHexCoordinates(canvasID, center, h) {
    const ctx = canvasID.getContext("2d");
    ctx.fillText(h.q, center.x+6, center.y);
    ctx.fillText(h.r, center.x-3, center.y+15);
    ctx.fillText(h.s, center.x-12, center.y);
  }



  getHexParametres() {
    let hexHeight = this.state.hexSize * 2;
    let hexWidth = Math.sqrt(3)/2 * hexHeight;
    //vertical distance between hexigons in each row
    let vertDist = hexHeight * 3/4;
    let horizDist = hexWidth;
    return { hexWidth, hexHeight, vertDist, horizDist }
  }

  hexToPixel(h) {
    //can change where the bundle of hexes originates on the whole grid
    let hexOrigin = this.state.hexOrigin;
    let x = this.state.hexSize * Math.sqrt(3) * (h.q + h.r/2) + hexOrigin.x;
    let y = this.state.hexSize * 3/2 * h.r + hexOrigin.y;
    return this.Point(x, y)
  }

  pixelToHex(p) {
    let size = this.state.hexSize;
    let origin = this.state.hexOrigin;
    let q = ((p.x - origin.x) * Math.sqrt(3)/3 - (p.y - origin.y) / 3) / size
    let r = (p.y - origin.y) * 2/3 / size
    return this.Hex(q, r, -q - r);
  }

  getDistanceLine(hexA, hexB) {
    let dist = this.cubeDistance(hexA, hexB);
    var arr = [];
    for(let i = 0; i <= dist; i++) {
     let center = this.hexToPixel(this.cubeRound(this.cubeLinearInt(hexA, hexB, 1.0 / dist * i)));
     arr = [].concat(arr, center);
    }
    this.setState({
      currentDistanceLine: arr
    })
  }



  cubeDirection(direction) {
    const cubeDirections = [this.Hex(1, 0, -1), this.Hex(1, -1, 0), this.Hex(0, -1, 1),
    this.Hex(-1, 0, 1), this.Hex(-1, 1, 0), this.Hex(0, 1, -1)];
    return cubeDirections[direction];
  }

  cubeLinearInt(hexA, hexB, t) {
    return this.Hex(this.linearInt(hexA.q, hexB.q, t), this.linearInt(hexA.r, hexB.r, t),
    this.linearInt(hexA.s, hexB.s, t));
  }

  linearInt(a, b, t) {
    return (a + (b - a) * t)
  }

  cubeAdd(a, b) {
    return this.Hex(a.q + b.q, a.r + b.r, a.s + b.s);
  }

  cubeSubstract(hexA, hexB) {
    return this.Hex(hexA.q - hexB.q, hexA.r - hexB.r, hexA.s - hexB.s);
  }

  getCubeNeighbor(h, direction) {
    return this.cubeAdd(h, this.cubeDirection(direction));
  }

  getNeighbors(h) {
    var arr = [];
    for(let i = 0; i <=5; i++) {
      const { q, r, s } = this.getCubeNeighbor(this.Hex(h.q, h.r, h.s), i);
      arr.push(this.Hex(q, r, s));
    }
    return arr;
  }



  cubeRound(cube) {
    var rx = Math.round(cube.q)
    var ry = Math.round(cube.r)
    var rz = Math.round(cube.s)
    var x_diff = Math.abs(rx - cube.q)
    var y_diff = Math.abs(ry - cube.r)
    var z_diff = Math.abs(rz - cube.s)
    if(x_diff > y_diff && x_diff > z_diff) {
      rx = -ry-rz
    }
    else if(y_diff > z_diff) {
      ry = -rx-rz
    }
    else{
      rz = -rx-ry
    }
    return this.Hex(rx, ry, rz)
  }



  cubeDistance(hexA, hexB) {
    const { q, r, s } = this.cubeSubstract(hexA, hexB);
    return (Math.abs(q) + Math.abs(r) + Math.abs(s)) / 2;
  }


  drawNeighbors(h) {
    for(let i = 0; i <= 5; i++) {
      const { q, r, s } = this.getCubeNeighbor(this.Hex(h.q, h.r, h.s), i);
      const { x, y } = this.hexToPixel(this.Hex(q, r, s));
      this.drawHex(this.canvasInteraction, this.Point(x, y), "red", 2);
    }
  }


    getCanvasPosition(canvasID) {
      let rect = canvasID.getBoundingClientRect();
      this.setState({
         canvasPosition: { left:rect.left, right: rect.right, top: rect.top, bottom: rect.bottom }
      })
    }

  handleMouseMove(e) {
    const { canvasWidth, canvasHeight } = this.state.canvasSize;
    const { hexWidth, hexHeight, vertDist, horizDist } = this.state.hexParametres;
    //const { left, right, top, bottom } = this.state.canvasPosition;
    //changing the number at the end affects result exponentially
    var canvasPos = document.getElementById("canv3");
    let rect = canvasPos.getBoundingClientRect();
    let offsetX = e.pageX - rect.left;
    let offsetY = (e.pageY - (window.pageYOffset + rect.top));






    const { q, r, s } = this.cubeRound(this.pixelToHex(this.Point(offsetX, offsetY)));
    const { x, y } = this.hexToPixel(this.Hex(q, r, s));

   let playerPosition = this.state.playerPosition;


    this.getDistanceLine(this.Hex(0,0,0), this.Hex(q,r,s));

    if((x > hexWidth/2 && x < canvasWidth - hexWidth/2) && (y > hexHeight/2 && y < canvasHeight - hexHeight/2)) {
      this.setState({
        currentHex: {q, r, s, x, y}
      })
    }

  }

  handleClick() {
    this.addObstacles();
  }

  addObstacles() {
    const { q, r, s } = this.state.currentHex;
    let obstacles = this.state.obstacles;
    if(!obstacles.includes(JSON.stringify(this.Hex(q, r, s)))) {
      obstacles = [].concat(obstacles, JSON.stringify(this.Hex(q, r, s)))
    } else {
      obstacles.map((l,i) => {
        if(l === JSON.stringify(this.Hex(q, r, s))) {
          obstacles = obstacles.slice(0, i).concat(obstacles.slice(i+1));
        }
      })
    }
    console.log({"q":q, "r":r, "s":s})
    this.setState({
      obstacles: obstacles
    })
  }

  handleExpandClick() {
    var frontier = this.state.frontier;
    var cameFrom = this.state.cameFrom;
    if(frontier == 0) {
      frontier.push(this.Hex(0,0,0));
      cameFrom[JSON.stringify(this.Hex(0,0,0))] = JSON.stringify(null);
    }
    let n = 0;
    while(n < 1) {
      var current = frontier.shift();
      let arr = this.getNeighbors(current);
      arr.map((l) => {
        if(!cameFrom.hasOwnProperty(JSON.stringify(l)) && !this.state.obstacles.includes(JSON.stringify(l))) {
          frontier.push(l);
          cameFrom[JSON.stringify(l)] = JSON.stringify(current);
        }
      })
      n++
    }
    cameFrom = Object.assign({}, cameFrom);
    this.setState({
      cameFrom: cameFrom
    })
  }

  resetSketch() {
  window.location.reload();
  }


render() {
    return (
      <section id="BFS">
        <div className="description25">
        <b id="bold">How to use:</b> Hit expand to see Breadth First Search carried out starting
          from the middle node.
        </div>

        <canvas id="canv4" ref={canvasHex => this.canvasHex = canvasHex }> </canvas>
        <canvas id="canv3" ref={canvasCoordinates => this.canvasCoordinates = canvasCoordinates }> </canvas>
        <canvas id="canv2" ref={canvasView => this.canvasView = canvasView }> </canvas>
        <canvas id="canv1" ref={canvasInteraction => this.canvasInteraction = canvasInteraction} onMouseMove = {this.handleMouseMove} onClick = {this.handleClick}> </canvas>
          <button
              className="reset1"
              onClick={ this.resetSketch }
              style= {{ textAlign: "center" }}
            >
              Reset
            </button>

            <button
              className="expandButton1"
              color="blue"
              style={{textAlign: "center"}}
              onClick={this.handleExpandClick}>
              Expand
            </button>



    </section>
    )

  }

}