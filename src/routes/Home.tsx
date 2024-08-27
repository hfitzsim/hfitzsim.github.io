import { Image, Title, Stack, Group, Flex, Button } from '@mantine/core';
import img from '@/assets/kyoto.jpg';
import { useNavigate, useOutletContext } from 'react-router-dom';

const Home = () => {
	const navigate = useNavigate();
	const isXs = useOutletContext();
	const buttons = () => {
		return (
			<>
				<Button size="lg" onClick={() => navigate('/bio')}>
					About Me
				</Button>
				<Button size="lg" onClick={() => navigate('/projects')} variant="outline">
					See Projects
				</Button>
				<Button size="lg" onClick={() => navigate('/contact')}>
					Get In Touch
				</Button>
			</>
		);
	};

	return (
		<Stack align="center" gap="xl" mt="lg">
			<Group justify={isXs ? 'center' : 'flex-end'}>
				<Image src={img} radius={600} h={200} w={200} />
				<Title order={1} style={{ textAlign: isXs ? 'center' : 'left' }}>
					Hello! I'm Hannah, <br />
					<span style={{ paddingLeft: isXs ? 0 : '5px' }}>
						a UI/UX Developer <br />
					</span>
					based in Boston.
				</Title>
			</Group>
			<Flex gap="xl" direction={isXs ? 'column' : 'row'}>
				{buttons()}
			</Flex>
		</Stack>
	);
};

export { Home };
