import React, { useState } from 'react';
import Navbar from './components/navbar';
import Main from './components/main';
import Modal from './components/modal';
import './App.css';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({});

  const [searching, setSearching] = useState(false);
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [foundPage, setFoundPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchWord, setSearchWord] = useState('avatar');


  return (
    <div className='body-container'>
      <Navbar setSearching={setSearching} setSearchWord={setSearchWord} />
      <Main setModalData={setModalData} showModal={showModal} setShowModal={setShowModal} searching={searching} searchedMovies={searchedMovies} setSearchedMovies={setSearchedMovies} foundPage={foundPage} setFoundPage={setFoundPage}
        totalPages={totalPages} setTotalPages={setTotalPages} searchWord={searchWord}/>
      {showModal && <Modal showModal={showModal} setShowModal={setShowModal} modalData={modalData} />}
    </div>
  );
}

export default App;
