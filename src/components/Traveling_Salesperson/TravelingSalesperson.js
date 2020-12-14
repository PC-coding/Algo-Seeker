import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';

export default class TravelingSalesperson extends Component {
    sketch(p){

        let cities = [];
        let totalCities = 5;
        
        let recordDistance;
        let bestEver;
        
        p.setup = () => {
          p.createCanvas(900, 600);
          for (let i = 0; i < totalCities; i++) {
            let v = p.createVector(p.random(p.width), p.random(p.height));
            cities[i] = v;
          }
          var button = p.createButton("reset");
          button.mousePressed(resetSketch);
          button.parent("resetTravelingSalesperson");

          let d = calcDistance(cities);
          recordDistance = d;
          bestEver = cities.slice();
        }
        function resetSketch() {
            window.location.reload();
        }
        
        p.draw = () => {
          p.background(0);
          p.fill(0);
          p.noStroke();
          p.textSize(12);
          p.text(`Best: ${p.floor(recordDistance)}`, 340, 10);
        
          p.fill(255);
          for (let i = 0; i < cities.length; i++) {
            p.ellipse(cities[i].x, cities[i].y, 8, 8);
          }
        
          p.stroke(255);
          p.strokeWeight(1);
          p.noFill();
          p.beginShape();
          for (let i = 0; i < cities.length; i++) {
            p.vertex(cities[i].x, cities[i].y);
          }
          p.endShape();
        
          p.stroke(255, 0, 255);
          p.strokeWeight(4);
          p.noFill();
          p.beginShape();
          for (let i = 0; i < cities.length; i++) {
            p.vertex(bestEver[i].x, bestEver[i].y);
          }
          p.endShape();
        
          let i = p.floor(p.random(cities.length));
          let j = p.floor(p.random(cities.length));
          swap(cities, i, j);
        
          let d = calcDistance(cities);
          if (d < recordDistance) {
            recordDistance = d;
            bestEver = cities.slice();
          }
        }
        
        function swap(a, i, j) {
          let temp = a[i];
          a[i] = a[j];
          a[j] = temp;
        }
        
        function calcDistance(points) {
          let sum = 0;
          for (let i = 0; i < points.length - 1; i++) {
            let d = p.dist(points[i].x, points[i].y, points[i + 1].x, points[i + 1].y);
            sum += d;
          }
          return sum;
        }
    }
    render() {
        return(
            <section>
                <div id="resetTravelingSalesperson"></div>
                <P5Wrapper sketch={this.sketch}></P5Wrapper>
            </section>
        )
    }
}
 