import { Card, Title, Image, Text, Button, Flex, Stack } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

type Project = {
	id: number;
	title: string;
	image: string;
	description: string;
};

interface ProjectProps {
	project: Project;
}

const ProjectButton: React.FC<ProjectProps> = ({ project }) => {
	const navigate = useNavigate();
	return (
		<Card m={15} p="xl" maw={550} bg={'isabelline'}>
			<Stack>
				<Card.Section>
					<Image src={project.image} h={200} fit="contain" />
				</Card.Section>
				<Card.Section>
					<Title order={6}>{project.title}</Title>
					<Text>{project.description}</Text>
				</Card.Section>
				<Card.Section>
					<Flex justify="center">
						<Button onClick={() => navigate(`/projects/${project.id}`)}>See Project Details</Button>
					</Flex>
				</Card.Section>
			</Stack>
		</Card>
	);
};

export { ProjectButton };
