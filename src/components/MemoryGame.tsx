import { Button, Container, Paper, Text, Title } from "@mantine/core";
import useGameLogic from "../hooks/useGameLogic";
import ScoreDisplay from "./ScoreDisplay";
import GameBoard from "./GameBoard";

const MemoryGame = () => {
	const initialCards = [
		{ id: 0, content: "🌊" },
		{ id: 1, content: "🪨" },
		{ id: 2, content: "🔥" },
		{ id: 3, content: "💨" },
		{ id: 4, content: "⚔️" },
		{ id: 5, content: "🍃" },
		{ id: 6, content: "🌙" },
		{ id: 7, content: "🌞" },
	];

	const { cards, gameState, handleCardClick, resetGame } =
		useGameLogic(initialCards);

	return (
		<Container size="sm">
			<Paper shadow="xs" p="md">
				<Title order={1} ta="center" mb="md">
					Pokemon Memory Card Game
				</Title>
				<Text mb="md">Select each card without repeating</Text>
				<ScoreDisplay score={gameState.score} highScore={gameState.highScore} />
				<Button onClick={resetGame} fullWidth mt="md" mb="md">
					{" "}
					Reset Game
				</Button>
				<GameBoard cards={cards} onCardClick={handleCardClick} />
				{gameState.gameOver && (
					<Text ta="center" fw={700} size="xl" mt="md" c="green">
						Congratulations! You've selected all unique cards!
					</Text>
				)}
			</Paper>
		</Container>
	);
};

export default MemoryGame;
