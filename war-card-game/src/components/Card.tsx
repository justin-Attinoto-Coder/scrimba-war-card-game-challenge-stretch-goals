import React from 'react';
import { CardProps } from '../types';

const Card: React.FC<CardProps> = ({ rank, suit, isFlipped, onClick }) => {
    const cardClass = `card ${isFlipped ? 'flipped' : ''}`;

    return (
        <div className={cardClass} onClick={onClick}>
            <div className="card-inner">
                <div className="card-front">
                    <span>{rank}</span>
                    <span>{suit}</span>
                </div>
                <div className="card-back">
                    <span>?</span>
                </div>
            </div>
        </div>
    );
};

export default Card;