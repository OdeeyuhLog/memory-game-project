interface CardType {
	id: number;
	content: string;
}

interface GameState {
	score: number;
	highScore: number;
	selectedCardIds: Set<number>;
	gameOver: boolean;
}

export type { CardType, GameState };
