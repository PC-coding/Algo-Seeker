import React from 'react';
import BFS from '../../img/bfs.png'
import dijkstra from '../../img/dijkstra.png';
import bsort from '../../img/bsort.png';
import qsort from '../../img/qsort.png';
import ts_genetic from '../../img/ts_genetic.png';
import astar from '../../img/astar.png';
import { Link } from 'react-router-dom';
import Particles from 'react-tsparticles';


export default function HomePage(){
    return(
        <div className='homePageWrapper'>
                    {/* <h1 style={{textAlign:'center', fontSize:'5rem'}}>Algo-Seeker</h1>
                    <div style={{display:'grid', gridTemplateColumns: "repeat(3, 1fr)", 
                                gridGap: 20, alignContent:'center', marginLeft:'180px', 
                                marginTop: '25px'}}>
                        <Link to='/bfs'>
                            <img src={BFS} />
                        </Link>

                        <Link to='/dijkstras'>
                            <img src={dijkstra} />
                        </Link>

                        <Link to='/bsort'>
                            <img src={bsort} />
                        </Link>

                        <Link to='/qsort'>
                            <img src={qsort} />
                        </Link>

                        <Link to='/travelingsalesperson'>
                            <img src={ts_genetic} />
                        </Link>

                        <Link to='/astar'>
                            <img src={astar} />
                        </Link>
                    </div>  */}
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
          Algo-Seeker
        </h1>
        <p className='homePageText'>
          Welcome to my algorithm visualizer, I built this application because I was interested in <br/>
          creating 
        </p>
        </div>
        
    )
}