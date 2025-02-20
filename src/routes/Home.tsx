import { Grid, Card, Button, Flex, Text, Image } from '@mantine/core';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPerson } from '@fortawesome/free-solid-svg-icons';
import photo from '@/assets/kyoto.jpg';

const Home = () => {
	const navigate = useNavigate();
	const isXs = useOutletContext();

	return (
		<Grid gutter={'xl'} grow>
			<Grid.Col span={3}>
				<Image src={photo} h="auto" w={250} mt={15}></Image>
			</Grid.Col>
			<Grid.Col span={9} h={200} mb={200}>
				<Text size="110px" c="vermillion" style={{ letterSpacing: '0.2em' }}>
					<span style={{ fontWeight: '900' }}>HANNAH </span>FITZSIMMONS
				</Text>
				<Text size="65px" c="vermillion">
					UI/UX Developer
				</Text>
			</Grid.Col>

			{/* <Grid.Col span={3}></Grid.Col>

			<Grid.Col span={3}></Grid.Col> */}
			<Grid.Col span={4}>
				<Card shadow="sm" padding="lg" bg={'jet'} withBorder onClick={() => navigate('/bio')}>
					<Card.Section inheritPadding>
						<Flex direction={'column'} justify={'center'} my={'lg'}>
							<FontAwesomeIcon icon={faPerson} size={isXs ? '2x' : '3x'} color={'#F4F0EC'} />
							<Button size="lg" variant="transparent" c={'isabelline'}>
								About Me
							</Button>
						</Flex>
					</Card.Section>
				</Card>
			</Grid.Col>
			<Grid.Col span={4}>
				<Card shadow="sm" padding="lg" bg={'jet'} withBorder onClick={() => navigate('/projects')}>
					<Card.Section inheritPadding>
						<Flex direction={'column'} justify={'center'} my={'lg'}>
							<FontAwesomeIcon icon={faLightbulb} size={isXs ? '2x' : '3x'} color={'#F4F0EC'} />
							<Button size="lg" variant="transparent" c={'isabelline'}>
								See Projects
							</Button>
						</Flex>
					</Card.Section>
				</Card>
			</Grid.Col>
			<Grid.Col span={4}>
				<Card shadow="sm" padding="lg" bg={'jet'} withBorder onClick={() => navigate('/contact')}>
					<Card.Section inheritPadding>
						<Flex direction={'column'} justify={'center'} my={'lg'}>
							<FontAwesomeIcon icon={faEnvelope} size={isXs ? '2x' : '3x'} color={'#F4F0EC'} />
							<Button size="lg" variant="transparent" c={'isabelline'}>
								Get In Touch
							</Button>
						</Flex>
					</Card.Section>
				</Card>
			</Grid.Col>
		</Grid>
	);
};

export { Home };
