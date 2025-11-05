import { useState, useEffect } from 'react';
import { shuffleDeck, determineWinner } from '../lib/gameLogic';
import { CardType, GameState } from '../types';

const useGame = () => {
    const [deck, setDeck] = useState<CardType[]>([]);
    const [player1Cards, setPlayer1Cards] = useState<CardType[]>([]);
    const [player2Cards, setPlayer2Cards] = useState<CardType[]>([]);
    const [winner, setWinner] = useState<string | null>(null);
    const [gameState, setGameState] = useState<GameState>('waiting');

    useEffect(() => {
        const initialDeck = createDeck();
        setDeck(initialDeck);
    }, []);

    const createDeck = (): CardType[] => {
        // Logic to create a deck of cards
        return []; // Replace with actual card creation logic
    };

    const startGame = () => {
        const shuffledDeck = shuffleDeck(deck);
        const midIndex = Math.ceil(shuffledDeck.length / 2);
        setPlayer1Cards(shuffledDeck.slice(0, midIndex));
        setPlayer2Cards(shuffledDeck.slice(midIndex));
        setGameState('playing');
    };

    const playRound = () => {
        if (gameState !== 'playing') return;

        // Logic for playing a round and determining the winner
        const roundWinner = determineWinner(player1Cards, player2Cards);
        setWinner(roundWinner);
        // Additional logic to update player cards and game state
    };

    return {
        deck,
        player1Cards,
        player2Cards,
        winner,
        gameState,
        startGame,
        playRound,
    };
};

export default useGame;