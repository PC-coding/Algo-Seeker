import React, {Component} from 'react';
import P5Wrapper from 'react-p5-wrapper';

export default class BubbleSort extends Component {
    sketch(p){
        let values = [];
        let i = 0;
        let j = 0;
        let w = 50;

        p.setup = () => {
            p.createCanvas(900, 600);
            values = new Array(p.width);
            for (let i = 0; i < values.length; i++) {
                values[i] = p.random(p.height);
            }
        }

        p.draw = () => {
            p.background(0);

            if (i < values.length) {
                for (let j = 0; j < values.length - i - 1; j++) {
                    let a = values[j];
                    let b = values[j + 1];
                    if (a > b) {
                        swap(values, j, j + 1);
                    }
                }
            } else {
            console.log("finished");
            p.noLoop();
            }
            i++;
            for (let i = 0; i < values.length; i++) {
                p.stroke(255);
                p.line(i, p.height, i, p.height - values[i]);
            }
        }

        function swap(arr, a, b) {
            let temp = arr[a];
            arr[a] = arr[b];
            arr[b] = temp;
        }
    }

    render() {

        return (
            <section id="BSort">
                <div className="title4">
                Bubble Sort
                </div>

                <div className="dijkstraDescription">
                <b id='bold'>What is it?:</b> <br/>
                    Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent 
                    elements until they appear in the correct order.<br/>
                    It's commonly referred to as the sinking sort, as you can tell by the visualization below.<br/>
                    <br/>
                <b id="bold"> How it works: </b> 
                    <br />
                    The <b>largest end node</b> gets sorted first. <br/>
                    The smaller elements take longer to move to their correct positions.<br/>
                    <br/>
                <b id='bold'>Use in the real world:</b><br/>
                    - Due to it's simple nature, the bubble sort algorithm is often used to introduce the<br/> 
                    concept of algorithms to computer science students. <br/>
                    - It interacts poorly with modern CPU hardware. It produces atleast twice as many writes,<br/> 
                    cache misses and more branch mispredicitons than an insertion sort would.<br/>
                    <br/>
                <b id="bold">Note: </b>
                    Although bubble sort is one of the simplest sorting algorithms to understand and implement,<br></br>
                    it's O(n2) complexity means that it's efficiency decreases the larger the list to sort through is.  <br></br>
                </div>

                <button onClick={() => {window.location.href='/bsort'}}>Reset</button>
                <br/>
                <br/>
                <P5Wrapper sketch={this.sketch}></P5Wrapper>
            </section>
        );
    }
}