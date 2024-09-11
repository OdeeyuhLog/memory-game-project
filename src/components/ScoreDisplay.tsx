import { Group, Text } from "@mantine/core";

interface ScoreDisplayProps {
	score: number;
	highScore: number;
}

const ScoreDisplay = ({ score, highScore }: ScoreDisplayProps) => {
	return (
		<Group ff={"VT323"}>
			<Text size={"lg"}>Score: {score}</Text>
			<Text size="lg">High Score: {highScore}</Text>
		</Group>
	);
};

export default ScoreDisplay;
