import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../algoseeker.png'
import './Navbar.css'

const Navbar = () => {
    return(
        <nav>
            <div className='navone'>
                <Link to='/' style={{padding: 20}}>
                    <img src={img} style={{height:'50px', width:'50px'}} />
                </Link>
                <Link to='/' style={{textDecoration:'None'}}> 
                Choose your Algorithm!: </Link>

                <Link to='/dijkstras' style={{padding: 20}}>
                Djikstra's
                </Link>

                <Link to='/bfs' style={{padding: 20}}>
                Breadth-First Search
                </Link>

                <Link to='/bsort' style={{padding: 20}}>
                Bubble Sort
                </Link>

                <Link to='/qsort' style={{padding: 20}}>
                Quick Sort
                </Link>
            </div>
        </nav>
    )
}

export default Navbar;