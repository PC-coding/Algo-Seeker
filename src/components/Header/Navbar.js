import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return(
        <nav>
            <Link to='/sortingalgos'>
                Sorting Algorithms
                {/* image logo here */}
            </Link>

            <Link to='/pathfindingvisualizer'>
                Pathfinding Visualizer
                {/* image logo here */}
            </Link>
        </nav>
    )
}