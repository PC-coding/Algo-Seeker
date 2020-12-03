import React from 'react';
import { Route } from 'react-router-dom';
import PathfindingVisualizer from '../PathfindingVisualizer/PathfindingVisualizer';

export default function Router() {
    return(
        <div>
            <Route path='/pathfindingvisualizer'>
                <PathfindingVisualizer />
            </Route>

            <Route path='/sortingalgo'>
                {/* <SortingAlgos />/ */}
            </Route>
        </div>
    )
}