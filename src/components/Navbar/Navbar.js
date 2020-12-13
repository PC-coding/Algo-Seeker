import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(){
    return(
        <nav>
            <Link to='/djikstras'>
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
        </nav>
    )
}