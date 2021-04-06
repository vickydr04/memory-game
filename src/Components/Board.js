import React, { useEffect, useState } from 'react';
import Card from './Card';
import { shuffle, duplicateElems } from '../utils/helper';
import APIreq from '../API/api';
import axios from 'axios';
import boardStyles from './Board.module.scss'

const Board = ({ handleScore, isGameOver }) => {
    const [cards, setCards] = useState([]);
    const [selectedCards, setSelectedCards] = useState([]);
    const [startGame, setStartGame] = useState(false);

    useEffect(() => {
        if (!startGame) {
            const fetchData = async () => {
                const result = await axios(APIreq);
                let selected = shuffle(result.data).slice(0, 6);
                let newCards = [];

                for (const key in selected) {
                    newCards.push({
                        id: result.data[key].id,
                        image: result.data[key].avatar_url,
                        name: result.data[key].login,
                        flipped: false,
                    })
                }

                const repeatElems = duplicateElems(newCards);
                const shuffledGame = shuffle(repeatElems);
                setCards(shuffledGame);
                setStartGame(true);
            };
            fetchData();
        }

    }, [startGame]);

    useEffect(() => {
        if (selectedCards.length === 2) {
            const match = cards[selectedCards[0]].name === cards[selectedCards[1]].name
            if (match) {
                const newGame = [...cards];
                newGame[selectedCards[0]].flipped = true;
                newGame[selectedCards[1]].flipped = true;
                setCards(newGame);
                const newIndexes = [...selectedCards];
                newIndexes.push(false);
                setSelectedCards(newIndexes);
                handleScore(prevScore => prevScore + 100);
            } else {
                const newIndexes = [...selectedCards];
                newIndexes.push(true);
                setSelectedCards(newIndexes);
            }
        }
    }, [selectedCards, cards, handleScore])

    useEffect(() => {
        if (cards) {
            let matches = cards.filter(c => c.flipped === false);
            if (startGame && matches.length === 0) {
                isGameOver(false);
            }
        }
    }, [cards, startGame, isGameOver]);

    return (
        <div className={boardStyles.Container}>
            {startGame && cards.map((card, index) => (
                <div key={index} className={boardStyles.item}>
                    <Card
                        cards={cards}
                        imageUrl={card.image}
                        cardNumber={index}
                        setSelectedCards={setSelectedCards}
                        selectedCards={selectedCards}
                    />
                </div>
            ))}
        </div>
    );
}

export default Board;
