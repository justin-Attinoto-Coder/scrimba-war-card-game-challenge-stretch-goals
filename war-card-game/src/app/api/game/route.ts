import { NextApiRequest, NextApiResponse } from 'next';
import { GameState, initializeGame, playTurn } from '../../../lib/gameLogic';

let currentGameState: GameState | null = null;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        // Initialize a new game
        currentGameState = initializeGame();
        return res.status(200).json(currentGameState);
    } else if (req.method === 'PUT') {
        // Play a turn in the game
        if (!currentGameState) {
            return res.status(400).json({ error: 'Game not initialized' });
        }
        const { playerAction } = req.body;
        currentGameState = playTurn(currentGameState, playerAction);
        return res.status(200).json(currentGameState);
    } else {
        // Handle unsupported methods
        return res.status(405).json({ error: 'Method not allowed' });
    }
}