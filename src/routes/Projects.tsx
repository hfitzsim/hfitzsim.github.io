import { Grid, Title, Stack } from '@mantine/core';
import { ProjectButton } from '@/components';
import data from '@/assets/data/projects.json';

const Projects = () => {
	const designProjects = data.filter((proj) => proj.type === 'design');
	const apps = data.filter((proj) => proj.type === 'web');
	return (
		<Grid>
			<Grid.Col span={6}>
				<Stack align="center">
					<Title order={3}>Apps</Title>
					{apps.map((app) => (
						<ProjectButton
							key={app.id}
							title={app.title}
							image={app.image}
							description={app.description}
						/>
					))}
				</Stack>
			</Grid.Col>
			<Grid.Col span={6} style={{ borderLeft: '1px solid black' }}>
				<Stack align="center">
					<Title order={3}>Design Projects</Title>
					{designProjects.map((proj) => (
						<ProjectButton
							key={proj.id}
							title={proj.title}
							image={proj.image}
							description={proj.description}
						/>
					))}
				</Stack>
			</Grid.Col>
		</Grid>
	);
};

export { Projects };
