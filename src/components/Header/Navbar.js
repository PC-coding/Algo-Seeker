import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return(
        <nav>
            <Link>
                Sorting Algorithms
                {/* image logo here */}
            </Link>

            <Link>
                Pathfinding Visualizer
                {/* image logo here */}
            </Link>
        </nav>
    )
}