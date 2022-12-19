import React, { useState, useEffect } from 'react';
import SingleMovie from './singleMovie';

export default function Movies({ showModal, setShowModal, setModalData, page }) {

    const [movies, setMovies] = useState([]);

    const getAllMovies = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=74897e41b263b3bb2c0e1d05a44be4c0&page=${page}`);
        const data = await response.json();
        //now
        setMovies(data.results);
    }

    useEffect(() => {
        getAllMovies();
    }, [page])

    return (
        <div className='movies-container'>
            {
                movies.map((m) => {
                    // console.log(m)
                    let movie_rating = m.vote_average;
                    if (movie_rating % 1 !== 0) {
                        movie_rating = movie_rating.toFixed(1);
                    }

                    const movieInfo = {
                        id: m.id,
                        title: m.title,
                        overview: m.overview,
                        rating: movie_rating,
                        releaseDate: m.release_date,
                        voteCount: m.vote_count,
                        path: m.poster_path
                    };

                    return (

                        <SingleMovie setModalData={setModalData} key={m.id} movieInfo={movieInfo} showModal={showModal} setShowModal={setShowModal} />

                    );

                })
            }




        </div>
    );
}
