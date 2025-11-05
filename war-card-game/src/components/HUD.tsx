import React from 'react';

const HUD: React.FC<{ score: number; playerTurn: string }> = ({ score, playerTurn }) => {
    return (
        <div className="hud">
            <h2 className="hud-title">War Card Game</h2>
            <div className="hud-info">
                <p>Score: {score}</p>
                <p>Current Turn: {playerTurn}</p>
            </div>
        </div>
    );
};

export default HUD;