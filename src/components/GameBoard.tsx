import { Grid } from "@mantine/core";
import { CardType } from "../types/types";
import GameCard from "./GameCard";

interface GameBoardProps {
	cards: CardType[];
	onCardClick: (id: number) => void;
}

const GameBoard = ({ cards, onCardClick }: GameBoardProps) => {
	return (
		<Grid>
			{cards.map((card) => (
				<Grid.Col key={card.id} span={3}>
					<GameCard card={card} onClick={onCardClick} />
				</Grid.Col>
			))}
		</Grid>
	);
};

export default GameBoard;
