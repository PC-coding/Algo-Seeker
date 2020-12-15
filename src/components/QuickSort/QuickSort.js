import React, {Component} from 'react';
import P5Wrapper from 'react-p5-wrapper'

export default class QuickSort extends Component {

  sketch(p){
    let values = [];
    let w = 30;
    let states = [];
    let slow = false;
    let slower = false;
    let normal = true;

      p.setup = () => {

        p.createCanvas(900, 600);

    values = new Array(p.floor(p.width / w));
    for (let i = 0; i < values.length; i++) {
      values[i] = p.random(p.height);
      states[i] = -1;
    }
    quickSort(values, 0, values.length - 1);
    let button = p.createButton("refresh");
    button.mousePressed(resetSketch);
    button.parent("resetQSort");
    let slowerBtn = p.createButton("slower");
    slowerBtn.mousePressed(quarter_speed);
    slowerBtn.parent("resetQSort");
    let slowBtn = p.createButton("slow");
    slowBtn.mousePressed(half_speed);
    slowBtn.parent("resetQSort");
    let normalBtn = p.createButton("normal");
    normalBtn.mousePressed(normal_speed);
    normalBtn.parent("resetQSort");

      }

      function resetSketch() {
        window.location.reload('/qsort');
      }

      function half_speed() {
        slow = true;
        normal = false;
        slower = false;
      }
      function quarter_speed() {
        slower = true;
        normal = false;
        slow = false;
      }
      function normal_speed() {
        slow = false;
        normal = true;
        slower = false;
      }


      async function quickSort(arr, start, end) {
        if (start >= end) {
          return;
        }
        let index = await partition(arr, start, end);
        states[index] = -1;

        await Promise.all([
          quickSort(arr, start, index - 1),
          quickSort(arr, index + 1, end)
        ]);
      }

      async function partition(arr, start, end) {
    for (let i = start; i < end; i++) {
      states[i] = 1;
    }

    let pivotValue = arr[end];
    let pivotIndex = start;
    states[pivotIndex] = 0;
    for (let i = start; i < end; i++) {
      if (arr[i] < pivotValue) {
        await swap(arr, i, pivotIndex);
        states[pivotIndex] = -1;
        pivotIndex++;
        states[pivotIndex] = 0;
      }
    }
    await swap(arr, pivotIndex, end);

    for (let i = start; i < end; i++) {
      if (i != pivotIndex) {
        states[i] = -1;
      }
    }

    return pivotIndex;
  }

      p.draw = () => {
        p.background(0);

    for (let i = 0; i < values.length; i++) {
      p.noStroke();
      if (states[i] == 0) {
        p.fill('#E0777D');
      } else if (states[i] == 1) {
        p.fill('#D6FFB7');
      } else if (states[i] == 2) {
        p.fill('#0000FF');
      }else {
        p.fill(255);
      }
      p.rect(i * w, p.height - values[i], w, values[i]);
    }
      }

    //   p.myCustomRedrawAccordingToNewPropsHandler = (newProps) => {
    //     if(p.canvas) //Make sure the canvas has been created
    //       p.fill(newProps.color);
    //   }

      async function swap(arr, a, b) {
        if(slow) {
          await sleep(1000);
        }else if(slower) {
          await sleep(3000);
        }else if(normal) {
          await sleep(300);
        }

        let temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
      }

      function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  }


render() {
    return (

      <section id="QSort">
        <div className="title3">
        Quick Sort
        </div>
        <div className="description3">
          <b>Current position</b> in the array is indicated by the red bar.<br></br>
          <b>Pivot value</b> is indicated by the element immediately to the right of the green shade.<br></br>
          <b>How it works:</b> We scan through the array from left to right.<br></br>
          All values greater than the pivot are swapped with currentPosition(red bar).<br></br>
          All values less than pivot are skipped over.<br></br>
        Pivot value is swapped with currentPosition when all green shade values are less than pivot.<br></br>
      Subsequently, a new pivot is chosen, indicated by a new red bar appearing.
        </div>
        <div id="resetQSort"></div>
        <P5Wrapper sketch={this.sketch} />
      </section>
    );

  }

}