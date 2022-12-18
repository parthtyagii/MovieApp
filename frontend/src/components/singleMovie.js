import React, { useState, useEffect } from 'react';
import './singleMovie.css';
import Modal from './modal.js';

export default function SingleMovie({ movieInfo, showModal, setShowModal }) {

    const [imageUrl, setImageUrl] = useState('');
    const [show, setShow] = useState(false);

    const handler = () => {
        setShowModal(!showModal);
    }

    const findImage = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieInfo.id}/images?api_key=74897e41b263b3bb2c0e1d05a44be4c0`)
        const data = await response.json();
        //now
        // console.log(typeof movieInfo.rating);

        if (data.posters && movieInfo.title && movieInfo.rating && (data.posters.length !== 0)) {
            setShow(true);
            setImageUrl(data.posters[0].file_path);
        }
    }

    useState(() => {
        findImage();
    }, [])

    return (
        <>
            {show &&
                <div className="movie" onClick={handler} >
                    <div className="upperPart">
                        <img id='movie-image' src={`https://image.tmdb.org/t/p/w500${imageUrl}`} alt="movieImage" />
                    </div>
                    <div className="rating">
                        <span>{movieInfo.rating}</span>
                    </div>
                    <div className="lowerPart">
                        <span>{movieInfo.title}</span>
                    </div>
                </div>
            }
        </>
    )
}
