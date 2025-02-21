import { Text, Image, Title } from '@mantine/core';

interface ProjectProps {
	title: string;
}

const SaveADog: React.FC<ProjectProps> = ({ title }) => {
	return (
		<>
			<Title order={2} style={{ textAlign: 'center' }}>
				{title}
			</Title>
			<h4>Website Redesign</h4>
			<Text>
				This project is a redesign of the website <a href="https://saveadog.org/">SaveADog.org. </a>
				The final design incorporates the site's original color palette but gives it a modern look
				and feel. The logo was created with Adobe Illustrator, the navigation bar follows standard
				conventions and run across the top of the page, and the most pertinent information to
				potential adopters is shown right on the landing page.
			</Text>
			<figure>
				<Image src="/assets/SaveADog-1.png" />
				<figcaption>Resdesign of SaveADog.org homepage.</figcaption>
			</figure>
			<Text>
				In addition to resdesigning the home page, I chose to redesign the page that lists dogs
				available for adoption. This takes a clean, minimalistic approach, showing images of each
				dog's name, age, etc. In practice, this page would not include any 'back' or 'next' buttons
				as users can "infinitely scroll" to see all dogs. Contact information remains visible in the
				footer until all dogs have loaded and can be viewed.{' '}
			</Text>
			<figure>
				<Image src="/assets/SaveADog-2.png" />
				<figcaption>Redesign of SaveADog.org available dogs page.</figcaption>
			</figure>
		</>
	);
};

export { SaveADog };
