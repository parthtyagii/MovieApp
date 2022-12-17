import React from 'react'
import { GrClose } from 'react-icons/gr';
import './modal.css';

export default function Modal({ showModal, setShowModal }) {
    return (
        <div className="modal-background">
            <div className='modal-container'>
                <div className="modal-header">
                    <h3>Munna Bhai MBBS</h3>
                    <button onClick={() => setShowModal(!showModal)}><GrClose /></button>
                </div>

                <div className="modal-body">
                    <div className="modal-body-img">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1VejMer5gFLAaM7l-1dMKqwJeZYJp9O2OlwqJ4P0-n1nnjtpb" alt="movieImage" />
                    </div>
                    <div className="movie-info">
                        <p><span>Release date:</span> May 13, 2021</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quia labore odio ab quisquam atque sequi non dolore officiis modi alias cupiditate quidem maxime, culpa harum hic rerum impedit temporibus.</p>
                        <p><span>6.6</span> / 10 (1214 total votes)</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
