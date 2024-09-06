import { Group, Text } from "@mantine/core";

interface ScoreDisplayProps {
	score: number;
	highScore: number;
}

const ScoreDisplay = ({ score, highScore }: ScoreDisplayProps) => {
	return (
		<Group>
			<Text>Score: {score}</Text>
			<Text>High Score: {highScore}</Text>
		</Group>
	);
};

export default ScoreDisplay;
