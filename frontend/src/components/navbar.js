import React from 'react';
import movieAppTitle from '../INSYNK.jpg';
import './navbar.css';
import { TfiSearch } from 'react-icons/tfi';

export default function Navbar() {
    return (
        <nav>
            <div className="nav-container">
                <img src={movieAppTitle} alt="movieAppTitle" />
                <input type="text" placeholder="Search for a movie" />
                <TfiSearch id='searchSymbol' />
                <hr />
            </div>
        </nav>
    );
}
