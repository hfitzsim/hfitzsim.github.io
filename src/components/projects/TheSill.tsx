import { Container, Title, Stack, Text, SimpleGrid, List, Anchor } from '@mantine/core';
import { ExtendedImage } from '@/components';
import { useOutletContext } from 'react-router-dom';
import img1 from '@/assets/TheSillWireframes-1.png';
import img2 from '@/assets/TheSillMobileApp-2.png';
import img3 from '@/assets/TheSillMobileApp-3.png';
import img4 from '@/assets/TheSillMobileApp-4.png';
import img5 from '@/assets/TheSillMobileApp-5.png';
import img6 from '@/assets/TheSillMobileApp-6.png';

interface ProjectProps {
	title: string;
}

const TheSill: React.FC<ProjectProps> = ({ title }) => {
	const isXs = useOutletContext();
	const gridCols = isXs === undefined ? 5 : isXs ? 1 : 5;

	const images = [
		{ src: img2, alt: 'TheSill Mobile App splash screen' },
		{ src: img3, alt: 'TheSill Mobile App main menu' },
		{ src: img4, alt: 'TheSill Mobile App shopping screen' },
		{ src: img5, alt: 'TheSill Mobile App checkout screen' },
		{ src: img6, alt: 'TheSill Mobile App account and past orders screen' },
	];

	const extendedImages = images.map((img) => {
		return <ExtendedImage key={img.src} src={img.src} alt={img.alt} fullHeight />;
	});
	return (
		<Container>
			<Stack align="center" gap="md" maw={800} justify={'center'}>
				<Title order={2} style={{ textAlign: 'center' }}>
					{title}
				</Title>
				<h4>Mobile App Design</h4>
				<Text style={{ lineHeight: '2' }}>
					For this class, the assignment was to design a mobile app for a website that did not yet
					have one. I chose{' '}
					<Anchor c={'vermillion'} href="https://www.thesill.com/">
						TheSill.com.
					</Anchor>{' '}
					A potted plant subscription service. For part one, we were to{' '}
					<Text span fw={700}>
						redesign{' '}
					</Text>
					the logo and{' '}
					<Text span fw={700}>
						create wireframes
					</Text>{' '}
					for five different app pages that would represent different functions. I created designs
					for the following:
					<List ml={30} my={15}>
						<List.Item>a landing page</List.Item>
						<List.Item>main menu of services</List.Item>
						<List.Item>shopping page</List.Item>
						<List.Item>shopping cart/checkout</List.Item>
						<List.Item>account page</List.Item>
					</List>
					Feel free to click on any of the images to see the full size version.
				</Text>
				<ExtendedImage src={img1} alt={'TheSill Mobile App Low Fidelity Wireframes'} fullWidth />
				<Text>
					After peer review, the{' '}
					<Text span fw={700}>
						feedback
					</Text>{' '}
					was incorporated into the{' '}
					<Text span fw={700}>
						higher fidelity mockups
					</Text>{' '}
					below.
				</Text>
				<SimpleGrid cols={gridCols}>{extendedImages}</SimpleGrid>
			</Stack>
		</Container>
	);
};

export { TheSill };
