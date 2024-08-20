import { Image, Title, Stack, Group, Button } from '@mantine/core';

const Home = () => {
	return (
		<Stack align="center">
			<Image src="src/assets/images/kyoto.JPG" radius={600} h={200} w={200} />
			<Title order={3}>Hello! I'm Hannah, a UI/UX Developer based in Boston.</Title>
			<Group>
				<Button>About Me</Button>
				<Button variant="outline">See Projects</Button>
				<Button>Get In Touch</Button>
			</Group>
		</Stack>
	);
};

export { Home };
