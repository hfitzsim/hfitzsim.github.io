import { useParams } from 'react-router-dom';
import projects from '@/assets/data/projects.json';
import { useState, useEffect } from 'react';
import { Breadcrumb, EventTracker, TheSill, SaveADog, MountainMatrix } from '@/components';

const ProjectDetail = () => {
	const { projectId } = useParams();
	const project = projects.find((proj) => proj.id.toString() === projectId);
	const [projectToRender, setProjectToRender] = useState<React.ComponentType | null>(null);

	useEffect(() => {
		let Component = null;

		switch (projectId) {
			case '1':
				Component = <MountainMatrix title="Mountain Matrix" />;
				break;
			case '2':
				Component = <EventTracker title="Event Tracker" />;
				break;
			case '3':
				Component = <TheSill title="The Sill" />;
				break;
			case '4':
				Component = <SaveADog title="Save a Dog" />;
				break;
			default:
				Component = null;
		}

		setProjectToRender(() => Component);
	}, [projectId]);

	return (
		<>
			<Breadcrumb project={project!.title} />
			{projectToRender}
		</>
	);
};

export { ProjectDetail };
