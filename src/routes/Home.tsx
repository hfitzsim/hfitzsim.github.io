import { Image, Title, Stack, Group, Button } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

const Home = () => {
	const navigate = useNavigate();

	return (
		<Stack align="center">
			<Image src="src/assets/images/kyoto.JPG" radius={600} h={200} w={200} />
			<Title order={3}>Hello! I'm Hannah, a UI/UX Developer based in Boston.</Title>
			<Group>
				<Button onClick={() => navigate('/bio')}>About Me</Button>
				<Button onClick={() => navigate('/projects')} variant="outline">
					See Projects
				</Button>
				<Button onClick={() => navigate('/contact')}>Get In Touch</Button>
			</Group>
		</Stack>
	);
};

export { Home };
