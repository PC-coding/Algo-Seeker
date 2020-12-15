import React from 'react';
import BFS from '../../img/bfs.png'
import dijkstra from '../../img/dijkstra.png';
import bsort from '../../img/bsort.png';
import qsort from '../../img/qsort.png';
import ts_genetic from '../../img/ts_genetic.png';
import astar from '../../img/astar.png';


export default function HomePage(){
    return(
        <div>
            <img src={BFS} />
            <img src={dijkstra} />
            <img src={bsort} />
            <img src={qsort} />
            <img src={ts_genetic} />
            <img src={astar} />
        </div>
    )
}