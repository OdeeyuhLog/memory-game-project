interface CardType {
	id: number;
	pokemon: Pokemon;
}

interface Pokemon {
	id: number;
	name: string;
	url: string;
}

interface GameState {
	score: number;
	highScore: number;
	selectedCardIds: Set<number>;
	gameOver: boolean;
}

export type { CardType, GameState, Pokemon };
