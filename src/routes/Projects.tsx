import { Grid, Title } from '@mantine/core';
import { ProjectButton } from '@/components';
import data from '@/assets/data/projects.json';

type Project = {
	id: number;
	title: string;
	image: string;
	description: string;
};

const Projects = () => {
	const designProjects = data.filter((proj) => proj.type === 'design');
	const apps = data.filter((proj) => proj.type === 'web');
	return (
		<Grid>
			<Grid.Col span={6}>
				<Title order={3}>Apps</Title>

				{apps.map((app) => (
					<ProjectButton
						key={app.id}
						title={app.title}
						image={app.image}
						description={app.description}
					/>
				))}
			</Grid.Col>
			<Grid.Col span={6} style={{ borderLeft: '1px solid black' }}>
				<Title order={3}>Design Projects</Title>
				{designProjects.map((proj) => (
					<ProjectButton
						key={proj.id}
						title={proj.title}
						image={proj.image}
						description={proj.description}
					/>
				))}
			</Grid.Col>
		</Grid>
	);
};

export { Projects };
