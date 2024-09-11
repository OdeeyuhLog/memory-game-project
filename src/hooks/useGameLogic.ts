import { useEffect, useState } from "react";
import type { CardType, GameState, Pokemon } from "../types/types";

const useGameLogic = (initialCards: Pokemon[]) => {
	const [cards, setCards] = useState<CardType[]>([]);
	const [gameState, setGameState] = useState<GameState>({
		score: 0,
		highScore: 0,
		selectedCardIds: new Set(),
		gameOver: false,
	});

	useEffect(() => {
		const newCards = initialCards.map((pokemon, index) => ({
			id: index,
			pokemon,
		}));
		setCards(newCards);
	}, [initialCards]);

	const shuffleCards = () => {
		setCards((prevCards) => [...prevCards].sort(() => Math.random() - 0.5));
	};

	const handleCardClick = (id: number) => {
		if (gameState.gameOver) return;

		setGameState((prevState) => {
			if (prevState.selectedCardIds.has(id)) {
				return {
					...prevState,
					score: 0,
					highScore: Math.max(prevState.highScore, prevState.score),
					selectedCardIds: new Set(),
				};
			}
			const newScore = prevState.score + 1;
			const newSelectedCardIds = new Set(prevState.selectedCardIds).add(id);
			const gameOver = newScore === cards.length;

			return {
				...prevState,
				score: newScore,
				highScore: gameOver
					? Math.max(prevState.highScore, newScore)
					: prevState.highScore,
				selectedCardIds: newSelectedCardIds,
				gameOver,
			};
		});
		shuffleCards();
	};

	const resetGame = () => {
		shuffleCards();
		setGameState({
			score: 0,
			highScore: gameState.highScore,
			selectedCardIds: new Set(),
			gameOver: false,
		});
	};

	return { cards, gameState, handleCardClick, resetGame };
};

export default useGameLogic;
