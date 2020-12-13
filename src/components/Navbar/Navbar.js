import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <nav>
            <div>
                <Link to='/dijkstras'>
                Djikstra's
                </Link>

                <Link to='/bfs'>
                Breadth-First Search
                </Link>

                <Link to='/bsort'>
                Bubble Sort
                </Link>

                <Link to='/qsort'>
                Quick Sort
                </Link>
            </div>
        </nav>
    )
}

export default Navbar;