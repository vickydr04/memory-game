import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import cardStyles from './Card.module.scss';

const Card = ({
  cards,
  id,
  imageUrl,
  cardNumber,
  setSelectedCards,
  selectedCards,
}) => {

  const [flipped, setFlipped] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  });

  useEffect(() => {
    if (selectedCards[2] === true && selectedCards.indexOf(cardNumber) > -1) {
      setTimeout(() => {
        setFlipped(state => !state);
        setSelectedCards([]);
      }, 500)
    } else if (selectedCards[2] === false && cardNumber === 0) {
      setSelectedCards([]);
    }
  }, [selectedCards, cardNumber, setSelectedCards])

  const handleCardClick = event => {
    if (!cards[cardNumber].flipped ) {
      setFlipped(state => !state);
      const newIndexes = [...selectedCards];
      newIndexes.push(cardNumber);
      setSelectedCards(newIndexes);
    } 
  }

  return (
    <div
      className={cardStyles.card}
      onClick={handleCardClick}  
      >      
      <animated.div
        id={id}
        className={`${cardStyles.cardSide} ${cardStyles.cardSideBack}`}
        style={{ opacity: opacity.interpolate(o => 1 - o), transform }}>
      </animated.div>
      <animated.div
        className={`${cardStyles.cardSide} ${cardStyles.cardSideFront}`}
        style={{
          backgroundImage: `url( ${imageUrl} )`,
          opacity,
          transform: transform.interpolate(t => `${t} rotateY(180deg)`),
          backgroundPosition: 'center center',
          backgroundSize: 'cover'
        }}
      />
    </div>
  )
}

export default Card
