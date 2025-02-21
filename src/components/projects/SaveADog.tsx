import { Text, Image, Title } from '@mantine/core';
import { useOutletContext } from 'react-router-dom';

interface ProjectProps {
	title: string;
}

const SaveADog: React.FC<ProjectProps> = ({ title }) => {
	const isXs = useOutletContext();
	return (
		<>
			<Title order={2} style={{ textAlign: 'center' }}>
				{title}
			</Title>
			<h4 style={{ textAlign: 'center' }}>Website Redesign</h4>
			<Text style={{ textAlign: isXs ? 'center' : 'left' }}>
				This project is a redesign of the website <a href="https://saveadog.org/">SaveADog.org. </a>
				My design incorporates the site's original color palette but gives it a modern look and
				feel. The logo was created with Adobe Illustrator, the navigation bar follows standard
				conventions and run across the top of the page, and the most pertinent information to
				potential adopters is shown right on the landing page.
			</Text>
			<figure>
				<Image src="/assets/SaveADog-1.png" alt="Resdesign of SaveADog.org homepage." />
			</figure>
			<Text style={{ textAlign: isXs ? 'center' : 'left' }}>
				In addition to the home page, I redesigned the page that lists dogs available for adoption.
				This takes a clean, minimalistic approach, showing images of each dog's name, age, etc. In
				practice, this page would not include any 'back' or 'next' buttons as users can "infinitely
				scroll" to see all dogs. Contact information remains visible in the footer until all dogs
				have loaded and can be viewed.{' '}
			</Text>
			<figure>
				<Image src="/assets/SaveADog-2.png" alt="Redesign of SaveADog.org available dogs page." />
			</figure>
		</>
	);
};

export { SaveADog };
