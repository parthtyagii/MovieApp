import React, { useEffect, useState } from 'react';
import Movies from './movies';
import './main.css';
import { FcNext, FcPrevious } from 'react-icons/fc';

export default function Main({ showModal, setShowModal, setModalData, searching, searchedMovies, setSearchedMovies, foundPage, setFoundPage, totalPages, setTotalPages, searchWord }) {
    const [page, setPage] = useState(1);
    const [pages, setPages] = useState(0);

    const nextHandler = () => {
        try {
            if (searching && (totalPages > foundPage)) {
                setFoundPage(foundPage + 1);
            }
            else {
                if (pages > page) {
                    setPage(page + 1);
                }
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    const prevHandler = () => {
        try {
            if (searching) {
                if (foundPage > 1) {
                    setFoundPage(foundPage - 1);
                }
            }
            else {
                if (page > 1) {
                    setPage(page - 1);
                }
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        setPage(1);
        setFoundPage(1);
    }, [searching, searchWord])

    return (
        <main>
            <div className="main-container">
                <h4>Most Recent Movies</h4>
                <Movies searchWord={searchWord} pages={pages} setPages={setPages} totalPages={totalPages} setTotalPages={setTotalPages} setModalData={setModalData} showModal={showModal} setShowModal={setShowModal} page={page} searching={searching} searchedMovies={searchedMovies} setSearchedMovies={setSearchedMovies} foundPage={foundPage} setFoundPage={setFoundPage} />
                <div className="pages">
                    {!searching && (pages >= 1) &&
                        <button className="prev" onClick={() => prevHandler()}  >
                            <FcPrevious />
                            prev
                        </button>
                    }

                    {!searching && (pages > page) &&
                        <button className='next' onClick={() => nextHandler()} >
                            next
                            <FcNext />
                        </button>
                    }

                    {/* ---------------------------------------------------------------------------- */}

                    {searching && (totalPages >= 1) &&
                        <button className="prev" onClick={() => prevHandler()}  >
                            <FcPrevious />
                            prev
                        </button>
                    }

                    {searching && (totalPages > foundPage) &&
                        <button className='next' onClick={() => nextHandler()} >
                            next
                            <FcNext />
                        </button>
                    }

                    {/* --------------------------------------------------------------------------- */}

                    {((pages === 0) || (totalPages == 0)) &&
                        <h3>"Sorry, we couldn't find any movies that match your search criteria. Please try modifying your search or using different search terms to see if we can find what you're looking for."</h3>
                    }

                </div>
            </div>
        </main>
    )
}
