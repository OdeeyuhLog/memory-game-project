import { Card, Image, Stack, Text } from "@mantine/core";
import type { CardType } from "../types/types";
import Tilt from "react-parallax-tilt";

interface GameCardProps {
	card: CardType;
	onClick: (id: number) => void;
}

const GameCard = ({ card, onClick }: GameCardProps) => {
	return (
		<Tilt>
			<Card
				shadow="md"
				padding="lg"
				radius="md"
				withBorder
				onClick={() => onClick(card.id)}
				style={{
					cursor: "pointer",
					textAlign: "center",
				}}
			>
				<Stack gap={2} align="center">
					<Image src={card.pokemon.url} w={110} />
					<Text size="lg" tt="capitalize" ff={"VT323"}>
						{card.pokemon.name}
					</Text>
				</Stack>
			</Card>
		</Tilt>
	);
};

export default GameCard;
