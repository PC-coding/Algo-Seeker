import React from 'react';
import Particles from 'react-tsparticles';
import img from '../../img/algob-w-2.png';


export default function HomePage(){
    return(
      <div className='homePageWrapper'>
        <Particles
          id="tsparticles"
          options={{
            background: {
              color: {
              //   value: "#0d47a1",
              value: '#de3023',
              },
            },
            fpsLimit: 60,
            interactivity: {
              detectsOn: "canvas",
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 0.8,
                  size: 40,
                },
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 6,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  value_area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                random: true,
                value: 5,
              },
            },
            detectRetina: true,
        }} />

        <h1 className='homePageHeader'>
          <img src={img} style={{height:'500px'}}/>
        </h1>

        <p className='homePageText'>
          Welcome to my algorithm visualizer, I built this application <br/> 
          because I was interested in
          creating a pathfinding and  <br/>
          sorting visualizer using 
          computer science algorithms. I thought it <br/>
          would be a fun way to learn more about algorithms and how they work. 
        <br/>
        <br/>
          Sources: <br/>

          <a href='https://www.geeksforgeeks.org/fundamentals-of-algorithms/'style={{color:'black'}}>Basic Algorithm Introductions</a><br/>
          <a href='https://p5js.org/reference/' style={{color:'black'}}>P5 Documentation</a><br/>
          <a href='https://www.npmjs.com/package/react-particles-js' style={{color:'black'}}>React Particles</a>

        </p>
      </div>
    )
}