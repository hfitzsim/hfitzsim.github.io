import { useParams } from 'react-router-dom';
import projects from '@/assets/data/projects.json';
import { Title } from '@mantine/core';
import { useState, useEffect } from 'react';
import { EventTracker, TheSill, SaveADog, MountainMatrix } from '@/components';

const ProjectDetail = () => {
	const { projectId } = useParams();
	const project = projects.find((proj) => proj.id.toString() === projectId);
	const [projectToRender, setProjectToRender] = useState<React.ComponentType | null>(null);

	useEffect(() => {
		let Component = null;

		switch (projectId) {
			case '1':
				Component = <MountainMatrix />;
				break;
			case '2':
				Component = <EventTracker />;
				break;
			case '3':
				Component = <TheSill />;
				break;
			case '4':
				Component = <SaveADog />;
				break;
			default:
				Component = null;
		}

		setProjectToRender(() => Component);
	}, [projectId]);

	return (
		<>
			<Title order={2}>{project!.title}</Title>
			{projectToRender}
		</>
	);
};

export { ProjectDetail };
