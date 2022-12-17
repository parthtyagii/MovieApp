import React, { useState } from 'react';
import Navbar from './components/navbar';
import Main from './components/main';
import Modal from './components/modal';
import './App.css';

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className='body-container'>
      <Navbar />
      <Main showModal={showModal} setShowModal={setShowModal} />
      {showModal && <Modal showModal={showModal} setShowModal={setShowModal} />}
    </div>
  );
}

export default App;
