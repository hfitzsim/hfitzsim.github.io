import { Stack, Flex, Text, Button, Anchor, List, Image, Space, Title } from '@mantine/core';
import screenshot from '@/assets/mm-dashboard.png';

interface ProjectProps {
	title: string;
}

const MountainMatrix: React.FC<ProjectProps> = ({ title }) => {
	return (
		<Stack gap="sm" align="center">
			<Title order={2} style={{ textAlign: 'center' }}>
				{title}
			</Title>
			<Image src={screenshot} h={'auto'} maw={900} mt={20} />

			<Flex justify="center" m={20}>
				<Anchor href="https://hfitzsim.dev/mountain-matrix" target="_blank">
					<Button>See Live Demo</Button>
				</Anchor>
			</Flex>
			<Text maw={800}>
				For this project, I designed and implemented different views for users to compare ski resort
				statistics. This would help with the decision paralysis that can occur when trying to choose
				a resort to go to on a particular day. I designed the logo with Adobe Illustrator and
				developed a total of four different views:
				<Space />
				<List ml={30} my={15}>
					<List.Item>Dashboard</List.Item>
					<List.Item>Resort Search / Detail View</List.Item>
					<List.Item>Resort Comparison View</List.Item>
					<List.Item>Map View</List.Item>
				</List>
				This project was built with{' '}
				<Text span fw={700}>
					Angular, Angular Material, and the Leaflet API
				</Text>
				. The mock data provided is primarily localized to the Northeastern US, with one
				exception—Whistler Blackcomb in BC, Canada—because it's my absolute favorite.
			</Text>
		</Stack>
	);
};

export { MountainMatrix };
