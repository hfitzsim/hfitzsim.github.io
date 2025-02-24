import { Text, Image, Title, Stack, Container, Anchor } from '@mantine/core';
import { useOutletContext } from 'react-router-dom';

interface ProjectProps {
	title: string;
}

const SaveADog: React.FC<ProjectProps> = ({ title }) => {
	const isXs = useOutletContext();
	return (
		<Container>
			<Stack maw={800} justify="center" gap="md">
				<Title order={2} style={{ textAlign: 'center' }}>
					{title}
				</Title>
				<h4 style={{ textAlign: 'center' }}>Website Redesign</h4>
				<Text style={{ textAlign: isXs ? 'center' : 'left', lineHeight: '2' }}>
					This project is a redesign of the website{' '}
					<Anchor c="vermillion" href="https://saveadog.org/">
						SaveADog.org.{' '}
					</Anchor>
					My design incorporates the site's original color palette but gives it a modern look and
					feel. The logo was created with Adobe Illustrator, the navigation bar follows standard
					conventions and run across the top of the page, and the most pertinent information to
					potential adopters is shown right on the landing page.
				</Text>
				<Image src="/assets/SaveADog-1.png" alt="Resdesign of SaveADog.org homepage." />
				<Text style={{ textAlign: isXs ? 'center' : 'left', lineHeight: '2' }}>
					In addition to the home page, I redesigned the page that lists dogs available for
					adoption. This takes a clean, minimalistic approach, showing images of each dog's name,
					age, etc. In practice, this page would not include any 'back' or 'next' buttons as users
					can "infinitely scroll" to see all dogs. Contact information remains visible in the footer
					until all dogs have loaded and can be viewed.{' '}
				</Text>
				<Image src="/assets/SaveADog-2.png" alt="Redesign of SaveADog.org available dogs page." />
			</Stack>
		</Container>
	);
};

export { SaveADog };
