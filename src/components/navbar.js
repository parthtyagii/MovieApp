import React, { useState } from 'react';
import movieAppTitle from '../INSYNK.jpg';
import '../statics/navbar.css';
import { SiThemoviedatabase } from 'react-icons/si';

export default function Navbar({ setSearching, setSearchWord }) {

    const changeHandler = (e) => {
        setSearchWord(e.target.value);
        if (e.target.value !== '') {
            setSearching(true);
        }
        else {
            setSearching(false);
        }
    }

    return (
        <nav>
            <div className="nav-container">
                <div className="logo-container">
                    <SiThemoviedatabase className='logo' />
                    <span>MovieMap</span>
                </div>
                <input type="text" placeholder="Search for a movie" onChange={(e) => changeHandler(e)} />
            </div>
        </nav>
    );
}
