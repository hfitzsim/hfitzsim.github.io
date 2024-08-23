import { Image, Title, Stack, Group, Button, getGradient, useMantineTheme } from '@mantine/core';
import img from '@/assets/kyoto.jpg';
import { useNavigate } from 'react-router-dom';

const Home = () => {
	const navigate = useNavigate();
	const theme = useMantineTheme();
	const gradient = getGradient(
		{ deg: 160, from: 'rgba(255,199,72,1) 0%', to: 'rgba(237,131,230,1) 100%' },
		theme
	);

	return (
		<Stack align="center" gap={75} mt={75}>
			<Group>
				<Image src={img} radius={600} h={200} w={200} />
				<Title order={1}>
					Hello! I'm Hannah, <br />
					<span style={{ paddingLeft: '5px' }}>
						a UI/UX Developer <br />
					</span>
					based in Boston.
				</Title>
			</Group>
			<Group gap="xl">
				<Button /* color={gradient} */ onClick={() => navigate('/bio')}>About Me</Button>
				<Button /* color={gradient} */ onClick={() => navigate('/projects')} variant="outline">
					See Projects
				</Button>
				<Button /* color={gradient} */ onClick={() => navigate('/contact')}>Get In Touch</Button>
			</Group>
		</Stack>
	);
};

export { Home };
