import { Grid, Group, Select } from '@mantine/core';
import { ProjectButton } from '@/components';
import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import data from '@/assets/data/projects.json';

const Projects = () => {
	const isXs = useOutletContext();
	const [projects, setProjects] = useState(data);
	return (
		<>
			<Group>
				<Select
					size="xs"
					variant="unstyled"
					label="Filter by project type"
					data={['All', 'Software Development', 'UX Design']}
					placeholder="None"
					onChange={(value) => {
						if (!value || value === null || value.toString() === 'All') {
							setProjects(data);
						} else {
							setProjects(data.filter((project) => project.type === value.toString()));
						}
					}}
				/>
			</Group>
			<Grid>
				{projects.length > 0 &&
					projects.map((app) => (
						<Grid.Col span={isXs ? 12 : 6} key={app.id}>
							<ProjectButton key={app.id} project={app} />
						</Grid.Col>
					))}
			</Grid>
		</>
	);
};

export { Projects };
