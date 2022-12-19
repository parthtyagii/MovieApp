import React, { useState } from 'react';
import Movies from './movies';
import './main.css';
import { FcNext, FcPrevious } from 'react-icons/fc';

export default function Main({ showModal, setShowModal, setModalData }) {
    const [page, setPage] = useState(1);

    const nextHandler = () => {
        setPage(page + 1);
        console.log(page);
    }

    const prevHandler = () => {
        if (page > 1) {
            setPage(page - 1);
        }
        console.log(page);
    }

    return (
        <main>
            <div className="main-container">
                <h4>Most Recent Movies</h4>
                <Movies setModalData={setModalData} showModal={showModal} setShowModal={setShowModal} page={page} />
                <div className="pages">
                    <button className="prev" onClick={() => prevHandler()}  >
                        <FcPrevious />
                        prev
                    </button>

                    <button className='next' onClick={() => nextHandler()} >
                        next
                        <FcNext />
                    </button>
                </div>
            </div>
        </main>
    )
}
