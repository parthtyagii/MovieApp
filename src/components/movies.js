import React, { useState, useEffect } from 'react';
import SingleMovie from './singleMovie';
import '../statics/movies.css';
import ScaleLoader from 'react-spinners/ScaleLoader';



export default function Movies({ loading, setLoading, showModal, setShowModal, setModalData, page, pages, setPages, searching, searchedMovies, setSearchedMovies, foundPage, setFoundPage, totalPages, setTotalPages, searchWord }) {

    const [movies, setMovies] = useState([]);


    const getAllMovies = async () => {
        try {
            setLoading(true);
            const response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`);
            const data = await response.json();
            if (page <= 2) {
                setPages(data.total_pages)
            }
            //now
            setMovies(data.results);
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        }
        catch (e) {
            console.log(e);
        }
    }

    const getAllSearchedMovies = async () => {
        try {
            setLoading(true);
            const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&page=${foundPage}&query=${searchWord}`);
            const data = await response.json();
            if (foundPage <= 2) {
                setTotalPages(data.total_pages);
            }
            //now
            setSearchedMovies(data.results);
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        }
        catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getAllMovies();
    }, [page]);

    useEffect(() => {
        getAllSearchedMovies();
    }, [foundPage, searchWord]);

    // console.log(foundPage, pages, totalPages);

    return (
        <div className='movies-container'>

            {loading &&
                <div className="moviesLoader">
                    <ScaleLoader color="#B2B2B2" height='100px' width='15px' />
                </div>
            }

            {!loading && !searching && movies &&
                movies.map((m) => {
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

            {!loading && searching && searchedMovies &&
                searchedMovies.map((m) => {
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
