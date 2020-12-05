import React from 'react';
import { Route } from 'react-router-dom';
import PathfindingVisualizer from '../PathfindingVisualizer/PathfindingVisualizer';
import SortingAlgos from '../SortingAlgos/SortingAlgos.js';

export default function Router() {
    return(
        <div>
            <Route path='/pathfindingvisualizer'>
                <PathfindingVisualizer />
            </Route>

            <Route path='/sortingalgos'>
                <SortingAlgos />
            </Route>
        </div>
    )
}