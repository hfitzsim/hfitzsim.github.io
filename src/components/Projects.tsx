import { Container, Image } from '@mantine/core';
import { useState } from 'react';
import data from '@/assets/data/projects.json';

interface ProjectsProps {
	nav: (view: string) => void;
}

const Projects = ({ nav }: ProjectsProps) => {
	const [projects, _setProjects] = useState(data);
	return (
		<Container className="projects-grid">
			{projects.length > 0 &&
				projects.map((proj) => (
					<Image
						className="project-image"
						src={proj.image}
						alt={proj.title}
						onClick={() => nav(proj.title)}
						style={{ cursor: 'pointer' }}
						h={600}
						w={400}
					/>
				))}
		</Container>
	);
};

export { Projects };
