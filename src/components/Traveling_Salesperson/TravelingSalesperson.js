import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';

export default class TravelingSalesperson extends Component {
    sketch(p){

        let cities = [];
        let totalCities = 12;

        let popSize = 500;
        let population = [];
        let fitness = [];

        let recordDistance = Infinity;
        let bestEver;
        let currentBest;

        let statusP;

        p.setup = () => {
        p.createCanvas(800, 800);
        let order = [];
        for (let i = 0; i < totalCities; i++) {
            let v = p.createVector(p.random(p.width), p.random(p.height / 2));
            cities[i] = v;
            order[i] = i;
        }

        for (let i = 0; i < popSize; i++) {
            population[i] = p.shuffle(order);
        }
        statusP = p.createP('').style('font-size', '32pt');

        let button = p.createButton("reset");
            button.mousePressed(resetSketch);
            button.parent("resetTravelingSalesperson");
        }

        function resetSketch() {
            window.location.reload();
        }

        p.draw = () => {
        p.background(0);

        // GA
        calculateFitness();
        normalizeFitness();
        nextGeneration();

        p.stroke(255);
        p.strokeWeight(4);
        p.noFill();
        p.beginShape();
        for (let i = 0; i < bestEver.length; i++) {
            let n = bestEver[i];
            p.vertex(cities[n].x, cities[n].y);
            p.ellipse(cities[n].x, cities[n].y, 16, 16);
        }
        p.endShape();

        p.translate(0, p.height / 2);
        p.stroke(255);
        p.strokeWeight(4);
        p.noFill();
        p.beginShape();
        for (let i = 0; i < currentBest.length; i++) {
            let n = currentBest[i];
            p.vertex(cities[n].x, cities[n].y);
            p.ellipse(cities[n].x, cities[n].y, 16, 16);
        }
        p.endShape();
        }

        function swap(a, i, j) {
        let temp = a[i];
        a[i] = a[j];
        a[j] = temp;
        }

        function calcDistance(points, order) {
        let sum = 0;
        for (let i = 0; i < order.length - 1; i++) {
            let cityAIndex = order[i];
            let cityA = points[cityAIndex];
            let cityBIndex = order[i + 1];
            let cityB = points[cityBIndex];
            let d = p.dist(cityA.x, cityA.y, cityB.x, cityB.y);
            sum += d;
        }
        return sum;
        }
        function calculateFitness() {
            let currentRecord = Infinity;
            for (let i = 0; i < population.length; i++) {
              let d = calcDistance(cities, population[i]);
              if (d < recordDistance) {
                recordDistance = d;
                bestEver = population[i];
              }
              if (d < currentRecord) {
                currentRecord = d;
                currentBest = population[i];
              }
              fitness[i] = 1 / (p.pow(d, 8) + 1);
            }
          }
          
          function normalizeFitness() {
            let sum = 0;
            for (let i = 0; i < fitness.length; i++) {
              sum += fitness[i];
            }
            for (let i = 0; i < fitness.length; i++) {
              fitness[i] = fitness[i] / sum;
            }
          }
          
          function nextGeneration() {
            let newPopulation = [];
            for (let i = 0; i < population.length; i++) {
              let orderA = pickOne(population, fitness);
              let orderB = pickOne(population, fitness);
              let order = crossOver(orderA, orderB);
              mutate(order, 0.01);
              newPopulation[i] = order;
            }
            population = newPopulation;
          }
          
          function pickOne(list, prob) {
            let index = 0;
            let r = p.random(1);
          
            while (r > 0) {
              r = r - prob[index];
              index++;
            }
            index--;
            return list[index].slice();
          }
          
          function crossOver(orderA, orderB) {
            let start = p.floor(p.random(orderA.length));
            let end = p.floor(p.random(start + 1, orderA.length));
            let neworder = orderA.slice(start, end);
            for (let i = 0; i < orderB.length; i++) {
              let city = orderB[i];
              if (!neworder.includes(city)) {
                neworder.push(city);
              }
            }
            return neworder;
          }
          
          function mutate(order, mutationRate) {
            for (let i = 0; i < totalCities; i++) {
              if (p.random(1) < mutationRate) {
                let indexA = p.floor(p.random(order.length));
                let indexB = (indexA + 1) % totalCities;
                swap(order, indexA, indexB);
              }
            }
        }
    }
    render() {
        return(
            <section id='geneticAlgo'>
                <div className='title5'>
                    Traveling Salesperson 
                    <br></br>with Genetic Algorithm
                </div>
                <div id="resetTravelingSalesperson"></div>
                
                <P5Wrapper sketch={this.sketch}></P5Wrapper>
            </section>
        )
    }
}
 