import React, { useState, useEffect } from 'react';


const Timer = ({seconds, openModal, isOpenModal}) => {
    const [timeLeft, setTimeLeft] = useState(seconds);

    useEffect(() => {
        if(isOpenModal) return;
        
        if (timeLeft  === 0) {
            openModal(true);
            return;
        }
        
        if (!timeLeft) return;
        
        const intervalId = setInterval(() => {
            setTimeLeft(timeLeft - 1);
        }, 1000);

        return () => clearInterval(intervalId);

    }, [timeLeft]);

    return (
        <div>
            <h1>Time: {timeLeft} seconds</h1>
        </div>
    );

}

export default Timer;