import { Container, Stack, Text, Image, Space, Title } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import addEvent from '@/assets/event-tracker-add-event.png';
import acctSettings from '@/assets/event-tracker-acct-settings.png';
import updateAcct from '@/assets/event-tracker-update-acct.png';
import admin from '@/assets/event-tracker-admin.png';
import progress from '@/assets/event-tracker-progress.png';

interface ProjectProps {
	title: string;
}

const EventTracker: React.FC<ProjectProps> = ({ title }) => {
	const images = [addEvent, acctSettings, updateAcct, admin, progress];

	const slides = images.map((img) => (
		<Carousel.Slide key={img}>
			<Image src={img} mah={500} fit="contain" />
		</Carousel.Slide>
	));

	return (
		<Container>
			<Stack gap="xl" align="center" maw={800} justify="center">
				<Title order={2} style={{ textAlign: 'center' }}>
					{title}
				</Title>
				<Text style={{ lineHeight: '2' }}>
					For this class, I created an application using vanilla{' '}
					<Text span fw={700}>
						{' '}
						HTML, CSS, and JavaScript
					</Text>{' '}
					. I was lucky enough to be Assistant to the Dean at Boston University's School of
					Hospitality Administration during the school's 40th year. This momentus anniversary lead
					to the inspiration to host 40 events throughout the school year.{' '}
					<Text span fs="italic">
						In reality, it actually turned about to be closer to 80!
					</Text>{' '}
					In order to keep track of all the students and attendees, I sought out to create a web app
					that would aim to gamify student attendence and track their progress towards attendance
					goals, thus earning them prizes.
					<Space /> The biggest challenge was creating a login system and having to teach myself{' '}
					<Text span fw={700}>
						PHP and MySQL
					</Text>
					. The professor did not require a database or backend server as part of the requirements,
					but I was determined to make this{' '}
					<Text span fw={700}>
						a full stack application
					</Text>
					. I went with a clean, simple look and feel for the design of each page. <Space />
					You can click through stills of the project below.
				</Text>
				<Carousel slideSize="100%" slideGap={'xs'} align="center" withIndicators height={500}>
					{slides}
				</Carousel>
			</Stack>
		</Container>
	);
};

export { EventTracker };
