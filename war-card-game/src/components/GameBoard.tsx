import React from 'react';
import HUD from './HUD';
import Deck from './Deck';
import { useGame } from '../hooks/useGame';
import './animations.css';
import './gradients.css';

const GameBoard: React.FC = () => {
    const { gameState, playerTurn } = useGame();

    return (
        <div className="game-board">
            <HUD gameState={gameState} playerTurn={playerTurn} />
            <Deck />
            {/* Additional components and game logic can be added here */}
        </div>
    );
};

export default GameBoard;