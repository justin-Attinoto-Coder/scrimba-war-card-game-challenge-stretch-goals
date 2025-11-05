export interface Card {
    suit: 'hearts' | 'diamonds' | 'clubs' | 'spades';
    rank: '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K' | 'A';
}

export interface Player {
    id: string;
    name: string;
    hand: Card[];
    score: number;
}

export interface GameState {
    players: Player[];
    deck: Card[];
    currentPlayerIndex: number;
    winner?: Player;
}

export interface GameAction {
    type: 'DRAW_CARD' | 'PLAY_CARD' | 'END_TURN';
    payload?: any;
}