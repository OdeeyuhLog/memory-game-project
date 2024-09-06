import { Card, Text } from "@mantine/core";
import type { CardType } from "../types/types";

interface GameCardProps {
	card: CardType;
	onClick: (id: number) => void;
}

const GameCard = ({ card, onClick }: GameCardProps) => {
	return (
		<Card
			shadow="md"
			padding="lg"
			radius="md"
			withBorder
			onClick={() => onClick(card.id)}
			style={{ cursor: "pointer", textAlign: "center" }}
		>
			<Text size="xl">{card.content}</Text>
		</Card>
	);
};

export default GameCard;
