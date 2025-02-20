import { Grid, Card, Button, Flex, Text, Image, Group } from '@mantine/core';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import photo from '@/assets/kyoto.jpg';
import { Bio } from '@/components/Bio';

const Home = () => {
	const navigate = useNavigate();
	const isXs = useOutletContext();

	return (
		<>
			<Grid gutter={'xl'} grow>
				<Grid.Col span={12}>
					<Group justify="flex-end">
						<Card
							shadow="none"
							padding="lg"
							bg={'isabelline'}
							withBorder={false}
							onClick={() => navigate('/projects')}
						>
							<Card.Section inheritPadding>
								<Flex direction={'column'} justify={'center'} my={'lg'}>
									<FontAwesomeIcon icon={faLightbulb} size={isXs ? '2x' : '3x'} color={'#F5433D'} />
									<Button size="lg" variant="transparent" c={'vermillion'}>
										Projects
									</Button>
								</Flex>
							</Card.Section>
						</Card>
						<Card
							shadow="none"
							padding="lg"
							bg={'isabelline'}
							withBorder={false}
							onClick={() => navigate('/contact')}
						>
							<Card.Section inheritPadding>
								<Flex direction={'column'} justify={'center'} my={'lg'}>
									<FontAwesomeIcon icon={faEnvelope} size={isXs ? '2x' : '3x'} color={'#F5433D'} />
									<Button size="lg" variant="transparent" c={'vermillion'}>
										Let's chat
									</Button>
								</Flex>
							</Card.Section>
						</Card>
					</Group>
				</Grid.Col>
				<Grid.Col span={3}>
					<Image src={photo} h="auto" w={250} mt={15} radius={5}></Image>
				</Grid.Col>
				<Grid.Col span={9} h={200}>
					<Text size="110px" c="vermillion" style={{ letterSpacing: '0.2em' }}>
						<span style={{ fontWeight: '900' }}>HANNAH </span>FITZSIMMONS
					</Text>
					<Text size="65px" c="vermillion">
						UI/UX Developer
					</Text>
				</Grid.Col>
				<Grid.Col span={12}>
					<Bio />
				</Grid.Col>
			</Grid>
		</>
	);
};

export { Home };
