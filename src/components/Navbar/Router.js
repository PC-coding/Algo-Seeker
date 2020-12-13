import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import PathfindingVisualizer from '../PathfindingVisualizer/PathfindingVisualizer';
import QuickSort from '../QuickSort/QuickSort';
import BubbleSort from '../BubbleSort/BubbleSort';
import BFS from '../BFS/BFS';
import BFS2 from '../BFS/BFS2';

export default function Router(){
    return(
        <BrowserRouter>
            <Route path='/dijkstras'>
                <PathfindingVisualizer />
            </Route>

            <Route path='/bfs'>
                <BFS />
                <BFS2 />
            </Route>

            <Route path='/qsort'>
                <QuickSort />
            </Route>

            <Route path='/bsort'>
                <BubbleSort />
            </Route>
        </BrowserRouter>
    )
}