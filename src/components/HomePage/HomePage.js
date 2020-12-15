import React from 'react';
import BFS from '../../img/bfs.png'
import dijkstra from '../../img/dijkstra.png';
import bsort from '../../img/bsort.png';
import qsort from '../../img/qsort.png';
import ts_genetic from '../../img/ts_genetic.png';
import astar from '../../img/astar.png';
import { Link } from 'react-router-dom';


export default function HomePage(){
    return(
        <div style={{display:'grid', gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20, alignContent:'center'}}>
            <Link to='/bfs'>
                <img src={BFS} />
            </Link>

            <Link to='/dijkstra'>
                <img src={dijkstra} />
            </Link>

            <Link to='/bsort'>
                <img src={bsort} />
            </Link>

            <Link to='/qsort'>
                <img src={qsort} />
            </Link>

            <Link to='/travelinssalesperson'>
                <img src={ts_genetic} />
            </Link>

            <Link to='/astar'>
                <img src={astar} />
            </Link>
        </div>
    )
}