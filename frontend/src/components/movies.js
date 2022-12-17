import React, { useState } from 'react';
import './movies.css';

export default function Movies({ showModal, setShowModal }) {

    const handler = () => {
        console.log("Hello");
        setShowModal(!showModal);
    }

    return (
        <div className='movies-container'>
            <div className="movie" onClick={handler} >
                <div className="upperPart">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1VejMer5gFLAaM7l-1dMKqwJeZYJp9O2OlwqJ4P0-n1nnjtpb" alt="movieImage" />
                </div>
                <div className="rating">
                    <span>8.1</span>
                </div>
                <div className="lowerPart">
                    <span>Munna Bhai MBBS</span>
                </div>
            </div>

            <div className="movie" onClick={handler} >
                <div className="upperPart">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1VejMer5gFLAaM7l-1dMKqwJeZYJp9O2OlwqJ4P0-n1nnjtpb" alt="movieImage" />
                </div>
                <div className="rating">
                    <span>8.1</span>
                </div>
                <div className="lowerPart">
                    <span>Munna Bhai MBBS</span>
                </div>
            </div>

            <div className="movie" onClick={handler} >
                <div className="upperPart">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1VejMer5gFLAaM7l-1dMKqwJeZYJp9O2OlwqJ4P0-n1nnjtpb" alt="movieImage" />
                </div>
                <div className="rating">
                    <span>8.1</span>
                </div>
                <div className="lowerPart">
                    <span>Munna Bhai MBBS</span>
                </div>
            </div>

            <div className="movie" onClick={handler} >
                <div className="upperPart">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1VejMer5gFLAaM7l-1dMKqwJeZYJp9O2OlwqJ4P0-n1nnjtpb" alt="movieImage" />
                </div>
                <div className="rating">
                    <span>8.1</span>
                </div>
                <div className="lowerPart">
                    <span>Munna Bhai MBBS</span>
                </div>
            </div>

            <div className="movie" onClick={handler} >
                <div className="upperPart">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1VejMer5gFLAaM7l-1dMKqwJeZYJp9O2OlwqJ4P0-n1nnjtpb" alt="movieImage" />
                </div>
                <div className="rating">
                    <span>8.1</span>
                </div>
                <div className="lowerPart">
                    <span>Munna Bhai MBBS</span>
                </div>
            </div>

            <div className="movie" onClick={handler} >
                <div className="upperPart">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1VejMer5gFLAaM7l-1dMKqwJeZYJp9O2OlwqJ4P0-n1nnjtpb" alt="movieImage" />
                </div>
                <div className="rating">
                    <span>8.1</span>
                </div>
                <div className="lowerPart">
                    <span>Munna Bhai MBBS</span>
                </div>
            </div>

            <div className="movie" onClick={handler} >
                <div className="upperPart">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1VejMer5gFLAaM7l-1dMKqwJeZYJp9O2OlwqJ4P0-n1nnjtpb" alt="movieImage" />
                </div>
                <div className="rating">
                    <span>8.1</span>
                </div>
                <div className="lowerPart">
                    <span>Munna Bhai MBBS</span>
                </div>
            </div>

            <div className="movie" onClick={handler} >
                <div className="upperPart">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1VejMer5gFLAaM7l-1dMKqwJeZYJp9O2OlwqJ4P0-n1nnjtpb" alt="movieImage" />
                </div>
                <div className="rating">
                    <span>8.1</span>
                </div>
                <div className="lowerPart">
                    <span>Munna Bhai MBBS</span>
                </div>
            </div>

        </div>
    )
}
