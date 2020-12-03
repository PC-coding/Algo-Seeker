import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return(
        <nav>
            <Link>
                Sorting Algorithms
            </Link>

            <Link>
                Pathfinding Visualizer
            </Link>
        </nav>
    )
}