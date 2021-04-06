import React, { Fragment, useState, useEffect } from 'react';
import Board from './Board';
import Score from './Score';
import Modal from '../UI/Modal';
import Timer from './Timer';
import gameStyles from './Game.module.scss'

const SECONDS = 60;

const Game = () => {
    const [isGameStarted, setIsGameStarted] = useState(false);
    const [score, setScore] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [gameFinished, setGameFinished]  = useState(false);

    const handleOnStartGame = () => {
        setIsGameStarted(true);
    }

    const handleGameOver = () => {
        setIsModalOpen(true);
    }

    const handleModal = () => {
        setIsModalOpen(false);
        setGameFinished(true);
        setScore(0);
    }
    
    useEffect(() => {
        if (!isModalOpen) {
            setGameFinished(false);
        }
     }, [isModalOpen]);

    return (
        <div className={gameStyles.GameContainer}>          
            {!isGameStarted ?
                <div className={gameStyles.ButtonWrapper}>
                    <button className={gameStyles.Button} onClick={handleOnStartGame}>
                        <span>Start Game</span>
                    </button>
                </div>
            :
            (!gameFinished &&
                <Fragment>
                    <Board handleScore={setScore} isGameOver={handleGameOver} />
                    <div className={gameStyles.Bottom}>
                        <Timer seconds={SECONDS} openModal={setIsModalOpen} isOpenModal={isModalOpen}/>
                        <Score score={score} />
                    </div>
                </Fragment>
            )}
            {isModalOpen && 
                <Modal handleModal={handleModal} score={score} />
            }
        </div>  
    )
}

export default Game;