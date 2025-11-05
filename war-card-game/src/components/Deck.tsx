import React, { useState } from 'react';
import { Card } from './Card';
import { useShuffleAnimation } from './animations/useShuffleAnimation';
import { CardType } from '../types';

interface DeckProps {
  cards: CardType[];
  onDeal: (card: CardType) => void;
}

export const Deck: React.FC<DeckProps> = ({ cards, onDeal }) => {
  const [deck, setDeck] = useState(cards);
  const shuffleAnimation = useShuffleAnimation();

  const shuffleDeck = () => {
    const shuffledDeck = [...deck].sort(() => Math.random() - 0.5);
    setDeck(shuffledDeck);
    shuffleAnimation.start();
  };

  const dealCard = () => {
    if (deck.length > 0) {
      const cardToDeal = deck[0];
      setDeck(deck.slice(1));
      onDeal(cardToDeal);
    }
  };

  return (
    <div className="deck">
      <button onClick={shuffleDeck} className="shuffle-button">
        Shuffle Deck
      </button>
      <button onClick={dealCard} className="deal-button">
        Deal Card
      </button>
      <div className="card-container">
        {deck.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </div>
    </div>
  );
};