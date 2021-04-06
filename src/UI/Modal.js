import React, { Fragment } from 'react';
import modalStyles from './Modal.module.scss';

const Modal = ({ score, handleModal }) => {

    return (
        <Fragment>
            <div className={modalStyles.Backdrop}></div>
            <div
                className={modalStyles.Modal}
                style={{
                    transform: handleModal ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: handleModal ? '1' : '0'
                }}>
                <div className={modalStyles.ModalContent}>
                    <h2>
                        Game Over
                    </h2>
                    <p>Score: {score}</p>
                    <button className={modalStyles.Button} onClick={handleModal}>
                        <span>New game</span>
                    </button>
                </div>
            </div>
        </Fragment>
    );
}


export default Modal;