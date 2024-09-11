import {
	Button,
	Container,
	Flex,
	Group,
	Modal,
	Stack,
	Text,
	Title,
	Loader,
	Center,
	Anchor,
} from "@mantine/core";
import useGameLogic from "../hooks/useGameLogic";
import ScoreDisplay from "./ScoreDisplay";
import GameBoard from "./GameBoard";
import { useEffect, useState } from "react";
import type { Pokemon } from "../types/types";
import { fetchPokemons } from "../api/pokemon";
import { IconBrandGithub } from "@tabler/icons-react";

const MemoryGame = () => {
	const [initialPokemons, setInitialPokemons] = useState<Pokemon[]>([]);
	const [noTransitionOpened, setNoTransitionOpened] = useState(true);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const initGame = async () => {
			const pokemons = await fetchPokemons(8);
			setInitialPokemons(pokemons);
			setIsLoading(false);
		};

		initGame();
	}, []);

	const { cards, gameState, handleCardClick, resetGame } =
		useGameLogic(initialPokemons);

	if (isLoading) {
		return (
			<Container
				size="sm"
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					height: "100vh",
				}}
			>
				<Loader size="lg" />
			</Container>
		);
	}

	return (
		<Stack mih={"100vh"} p="lg">
			<Group justify="space-between" align="start">
				<Stack>
					<Title order={1} ta="center" ff="VT323" size={40}>
						Pokemon Memory Card Game
					</Title>
					<Text mb="md" ff={"VT323"} size="lg">
						Select each card without repeating
					</Text>
				</Stack>
				<ScoreDisplay score={gameState.score} highScore={gameState.highScore} />
			</Group>
			<Flex justify="center" p={60} align="center">
				<GameBoard cards={cards} onCardClick={handleCardClick} />
			</Flex>
			<Center ff={"VT323"}>
				<Anchor href="https://github.com/OdeeyuhLog" underline="never">
					<Group gap={7} justify="start">
						<IconBrandGithub color="black" />
						<Text c={"dark"}>Made by OdeeyuhLog</Text>
					</Group>
				</Anchor>
			</Center>
			{gameState.gameOver && (
				<Modal
					opened={noTransitionOpened}
					onClose={() => setNoTransitionOpened(false)}
					withCloseButton={false}
					centered={true}
					transitionProps={{
						transition: "fade",
						duration: 300,
						timingFunction: "linear",
					}}
				>
					<Text ta="center" fw={700} size="xl" mt="md" c="green">
						Congratulations! You've selected all unique cards!
					</Text>
					<Button onClick={resetGame} mt="md" mb="md">
						{" "}
						Reset Game
					</Button>
				</Modal>
			)}
		</Stack>
	);
};

export default MemoryGame;
