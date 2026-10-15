import { Title, Container, Text, Grid, Image } from '@mantine/core';
import { Projects } from '@/components';

interface HomeProps {
	nav: (view: string) => void;
}

const Home = ({ nav }: HomeProps) => {
	return (
		<main>
			<section className="top-section" id="home">
				<Container fluid style={{ margin: 0, padding: 0 }}>
					<Title order={1} style={{ fontSize: '8rem', fontWeight: '400', lineHeight: '1.0em' }}>
						Designing <br /> & Building <br />
						Digital <br />
						Systems.{' '}
					</Title>
				</Container>
			</section>
			<section className="top-section" id="projects">
				<Projects nav={nav} />
			</section>
			<section className="top-section" id="about">
				<Grid align="flex-start">
					<Grid.Col span={3} pl={32}>
						<Image src="/src/assets/images/Hannah-1.png" alt="Hannah Fitzsimmons" h={400} w={200} />
					</Grid.Col>
					<Grid.Col span={9} px={88} mah={400}>
						<Text fw={400} mah={400}>
							As a Senior Software Engineer with a passion for UI/UX and human-centered design,
							Hannah brings a blend of creativity and technical expertise to every project. With a
							Bachelor’s in Operations and Information Management and a Master’s in Computer
							Information Systems, she honed her skills in web app development. She's{' '}
							<Text span fs="italic" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
								led the development
							</Text>{' '}
							of innovative mobile and web-based software solutions that enhance operational
							readiness and management capabilities for diverse systems,{' '}
							<Text span fs="italic" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
								meeting the needs and expectations
							</Text>{' '}
							of global users. She's crafted wireframes and mockups and translated them into
							functional applications. Most of her professional projects she can't talk about
							because it's for the DoD, but you can check out some of her personal projects in the
							archives section. <br /> <br />
							Her journey through retail and hospitality taught her the{' '}
							<Text span fs="italic" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
								value of making someone's day better
							</Text>
							, a principle she carries into work every day. Outside of work, she can be found{' '}
							snowboarding, crocheting amigrumi, traveling to new places, and spending time with her
							loved ones.
						</Text>
					</Grid.Col>
				</Grid>
			</section>
			<section className="middle-section" id="philosophy">
				<Grid>
					<Grid.Col span={6}>
						<Text c="moss" size="xs">
							THE PHILOSOPHY
						</Text>
						<div className="divider-short"></div>
						<Text
							size="1.8rem"
							fw={400}
							style={{ fontFamily: 'Cormorant Garamond, serif', lineHeight: '1.2em' }}
						>
							I believe software should feel as essential and as quiet as a houseplant. In a world
							of aggressive notifications and screens demanding our attention, I strive to craft
							digital sanctuaries and lightweight systems that breathe as deeply as we do.
						</Text>
					</Grid.Col>
					<Grid.Col span={6}></Grid.Col>
				</Grid>
			</section>
		</main>
	);
};

export { Home };
