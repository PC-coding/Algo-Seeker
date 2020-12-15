import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PathfindingVisualizer from '../PathfindingVisualizer/PathfindingVisualizer';
import QuickSort from '../QuickSort/QuickSort';
import BubbleSort from '../BubbleSort/BubbleSort';
import BFS from '../BFS/BFS';
import BFS2 from '../BFS/BFS2';
import AStar from '../A*Star/A_star';
import TravelingSalesperson from '../Traveling_Salesperson/TravelingSalesperson';
import HomePage from '../HomePage/HomePage';

export default function Router(){
    return(
        <div>
            <Route path='/landing'>
                <HomePage />
            </Route>
            
            <Route path='/dijkstras'>
                <PathfindingVisualizer />
            </Route>

            <Route path='/bfs'>
                <BFS2 />
                <BFS />
            </Route>

            <Route path='/qsort'>
                <QuickSort />
            </Route>

            <Route path='/bsort'>
                <BubbleSort />
            </Route>

            <Route path='/astar'>
                <AStar />
            </Route>

            <Route path='/travelingsalesperson'>
                <TravelingSalesperson />
            </Route>

            {/* <Redirect from='/' to='/landing' /> */}
        </div>
    )
}