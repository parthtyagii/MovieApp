import React, { useState, useEffect } from 'react';
import './singleMovie.css';

export default function SingleMovie({ movieInfo, showModal, setShowModal, setModalData }) {

    const [imageUrl, setImageUrl] = useState('');
    const [show, setShow] = useState(false);
    const [allData, setAllData] = useState({});

    const handler = () => {
        setShowModal(!showModal);
        console.log(allData);
        setModalData({
            ...allData,
            URL: `https://image.tmdb.org/t/p/w500${imageUrl}`
        })
    }

    const findImage = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieInfo.id}/images?api_key=74897e41b263b3bb2c0e1d05a44be4c0`)
        const data = await response.json();
        //now

        if (data.posters && movieInfo.title && movieInfo.rating && (data.posters.length !== 0)) {
            setShow(true);
            setImageUrl(data.posters[0].file_path);
            setAllData({
                id: movieInfo.id,
                title: movieInfo.title,
                overview: movieInfo.overview,
                rating: movieInfo.rating,
                releaseDate: movieInfo.releaseDate,
                voteCount: movieInfo.voteCount,
            });

        }
    }

    useState(() => {
        findImage();
    }, [])

    return (
        <>
            {show &&
                <div className="movie" onClick={() => handler()} >
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
