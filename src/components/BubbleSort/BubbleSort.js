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

                {/* <div className="description4">
                <b> Need to make description :) </b>
                </div> */}

                <button onClick={() => {window.location.href='/bsort'}}>Reset</button>
            
                <P5Wrapper sketch={this.sketch}></P5Wrapper>
            </section>
        );
    }
}