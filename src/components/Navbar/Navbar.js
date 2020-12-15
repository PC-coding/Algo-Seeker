import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../algoseeker.png'
import './Navbar.css'

const Navbar = () => {
    return(
        <nav>
                <div>
                    <Link to='/landing' style={{padding: 20}}>
                        <img src={img} style={{height:'50px', width:'50px'}} className='logobar' />
                    </Link>
                </div>
                <div className='nav1'>
                    <Link to='/' style={{ padding: 20, textDecoration:'None', color:'white', fontWeight:'bold', fontSize: 'large'}}> 
                    Choose your Algorithm!: </Link>

                    <Link to='/dijkstras' style={{padding: 20, color:'white', fontWeight:'bold', fontSize: 'large'}}>
                    Djikstra's
                    </Link>

                    <Link to='/bfs' style={{padding: 20, color:'white', fontWeight:'bold', fontSize: 'large'}}>
                    Breadth-First Search
                    </Link>

                    <Link to='/bsort' style={{padding: 20, color:'white', fontWeight:'bold', fontSize: 'large'}}>
                    Bubble Sort
                    </Link>

                    <Link to='/qsort' style={{padding: 20, color:'white', fontWeight:'bold', fontSize: 'large'}}>
                    Quick Sort
                    </Link>

                    <Link to='/astar' style={{padding: 20, color:'white', fontWeight:'bold', fontSize: 'large'}}>
                    A* Star
                    </Link>

                    <Link to='/travelingsalesperson' style={{padding: 20, color:'white', fontWeight:'bold', fontSize: 'large'}}>
                    Genetic Algorithm
                    </Link>
                </div>
        </nav>
    )
}

export default Navbar;