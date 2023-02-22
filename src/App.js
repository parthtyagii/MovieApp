import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar';
import Main from './components/main';
import Modal from './components/modal';
import { GrUserFemale } from 'react-icons/gr';
import './App.css';
import ScaleLoader from 'react-spinners/ScaleLoader';


function App() {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({});
  const [loading, setLoading] = useState(false);

  const [searching, setSearching] = useState(false);
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [foundPage, setFoundPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchWord, setSearchWord] = useState('avatar');

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {loading &&
        <div className="pageLoader">
          <ScaleLoader color="#B2B2B2" height='100px' width='15px' />
        </div>
      }

      {!loading &&
        <div className='body-container'>
          <Navbar setSearching={setSearching} setSearchWord={setSearchWord} />
          <Main setModalData={setModalData} showModal={showModal} setShowModal={setShowModal} searching={searching} searchedMovies={searchedMovies} setSearchedMovies={setSearchedMovies} foundPage={foundPage} setFoundPage={setFoundPage}
            totalPages={totalPages} setTotalPages={setTotalPages} searchWord={searchWord} />
          {showModal && <Modal showModal={showModal} setShowModal={setShowModal} modalData={modalData} />}
        </div>
      }
    </>
  );
}

export default App;
