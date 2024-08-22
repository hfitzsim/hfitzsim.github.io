import { Card, Title, Image, Text, Button, Flex, Stack } from '@mantine/core';

interface ProjectProps {
	title: string;
	image: string;
	description: string;
}

const ProjectButton: React.FC<ProjectProps> = ({ title, image, description }) => {
	return (
		<Card m={15} p="xl" maw={550}>
			<Stack>
				<Card.Section>
					<Image src={image} h={200} fit="contain" />
				</Card.Section>
				<Card.Section>
					<Title order={6}>{title}</Title>
					<Text>{description}</Text>
				</Card.Section>
				<Card.Section>
					<Flex justify="center">
						<Button onClick={() => console.log('will redirect to /projects/:projectId')}>
							See Project Details
						</Button>
					</Flex>
				</Card.Section>
			</Stack>
		</Card>
	);
};

export { ProjectButton };
