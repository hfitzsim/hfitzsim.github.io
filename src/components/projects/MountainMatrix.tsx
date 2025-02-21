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
				statistics. This would help with decision paralysis that can occur when trying to choose a
				resort to go to on a particular day. I designed the logo with Adobe Illustrator and
				developed a total of four different views:
				<Space />
				<List ml={30} my={15}>
					<List.Item>Dashboard</List.Item>
					<List.Item>Resort Search / Detail View</List.Item>
					<List.Item>Resort Comparison View</List.Item>
					<List.Item>Map View</List.Item>
				</List>
				This project was built with Angular, Angular Material, and the Leaflet API. The data
				localized to the north east of the US, some of the ski resorts I have visited frequently.
				There is one entry for Whistler Blackcomb because it is my favorite.
			</Text>
		</Stack>
	);
};

export { MountainMatrix };
