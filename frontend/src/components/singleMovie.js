import React, { useState, useEffect } from 'react';
import '../statics/singleMovie.css';

export default function SingleMovie({ movieInfo, showModal, setShowModal, setModalData }) {

    const [imageUrl, setImageUrl] = useState('');
    const [show, setShow] = useState(false);
    const [allData, setAllData] = useState({});

    const handler = () => {
        try {
            setShowModal(!showModal);
            setModalData({
                ...allData,
                URL: `https://image.tmdb.org/t/p/w500${imageUrl}`
            })
        }
        catch (e) {
            console.log(e);
        }
    }

    const findImage = async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${movieInfo.id}/images?api_key=${process.env.REACT_APP_API_KEY}`)
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
        catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
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
