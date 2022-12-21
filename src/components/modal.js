import React from 'react'
import { GrClose } from 'react-icons/gr';
import '../statics/modal.css';

export default function Modal({ showModal, setShowModal, modalData }) {

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const date = parseInt(modalData.releaseDate.slice(-2));
    const month = months[parseInt(modalData.releaseDate.slice(5, 7)) - 1];
    const year = parseInt(modalData.releaseDate.slice(0, 4));

    return (
        <div className="modal-background">
            <div className='modal-container'>
                <div className="modal-header">
                    <h3>{modalData.title}</h3>
                    <button onClick={() => setShowModal(!showModal)}><GrClose /></button>
                </div>

                <div className="modal-body">
                    <div className="modal-body-img">
                        <img src={modalData.URL} alt="movieImage" />
                    </div>
                    <div className="movie-info">
                        <p><span>Release date: </span>{`${month} ${date}, ${year}`}</p>
                        <p>{modalData.overview}</p>
                        <p><span>{modalData.rating}</span> / 10 ({`${modalData.voteCount}`} total votes)</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
