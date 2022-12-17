import React from 'react'
import './main.css';
import Movies from './movies';

export default function Main() {
    return (
        <main>
            <div className="main-container">
                <h4>Most Recent Movies</h4>
                <Movies />
            </div>
        </main>
    )
}
