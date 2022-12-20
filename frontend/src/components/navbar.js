import React, { useState } from 'react';
import movieAppTitle from '../INSYNK.jpg';
import '../statics/navbar.css';

export default function Navbar({ setSearching, setSearchWord }) {

    const changeHandler = (e) => {
        if (e.target.value !== '') {
            setSearching(true);
            setSearchWord(e.target.value);
        }
        else {
            setSearching(false);
        }
    }


    return (
        <nav>
            <div className="nav-container">
                <img src={movieAppTitle} alt="movieAppTitle" />
                <input type="text" placeholder="Search for a movie" onChange={(e) => changeHandler(e)} />
            </div>
        </nav>
    );
}
