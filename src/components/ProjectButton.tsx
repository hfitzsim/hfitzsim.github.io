import { Card, Title, Image, Text, Stack } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

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
		<motion.div
			whileHover={{ scale: 1.02 }}
			onClick={() => navigate(`/projects/${project.id}`)}
			style={{ cursor: 'pointer' }}
		>
			<Card
				m={15}
				p="xl"
				maw={550}
				bg={'white'}
				shadow="sm"
				padding="lg"
				radius="xs"
				withBorder
				styles={{
					root: {
						'&:hover': {
							'& .overlay': {
								opacity: 1,
							},
						},
					},
				}}
			>
				<Stack>
					<Card.Section>
						<Image src={project.image} h={300} alt={project.title} />
					</Card.Section>
					<Card.Section>
						<Title order={6}>{project.title}</Title>
						<Text>{project.description}</Text>
					</Card.Section>
				</Stack>
				<motion.div
					whileHover={{ backgroundColor: 'rgba(114, 161, 192, 0.10)' }}
					style={{
						position: 'absolute',
						inset: 0,
						borderRadius: 'inherit',
						zIndex: 1,
					}}
				/>
			</Card>
		</motion.div>
	);
};

export { ProjectButton };
