import React, { useState } from 'react'
import Movies from './movies';
import './main.css';

export default function Main({ showModal, setShowModal, setModalData }) {

    return (
        <main>
            <div className="main-container">
                <h4>Most Recent Movies</h4>
                <Movies setModalData={setModalData} showModal={showModal} setShowModal={setShowModal} />
            </div>
        </main>
    )
}
