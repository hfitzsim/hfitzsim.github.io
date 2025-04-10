import { Container, Stack, Text, Space, Title, SimpleGrid } from '@mantine/core';
import { ExtendedImage } from '../ExtendedImage';
import { useOutletContext } from 'react-router-dom';
import addEvent from '@/assets/event-tracker-add-event.png';
import acctSettings from '@/assets/event-tracker-acct-settings.png';
import updateAcct from '@/assets/event-tracker-update-acct.png';
import admin from '@/assets/event-tracker-admin.png';
import progress from '@/assets/event-tracker-progress.png';

interface ProjectProps {
	title: string;
}

const EventTracker: React.FC<ProjectProps> = ({ title }) => {
	const images = [
		{ src: addEvent, alt: 'Adding an event' },
		{ src: acctSettings, alt: 'Account Settings' },
		{ src: updateAcct, alt: 'Update Account' },
		{ src: admin, alt: 'Admin view' },
		{ src: progress, alt: 'Event attendance tracking progress view' },
	];
	const isXs = useOutletContext();

	const extendedImages = images.map((img) => {
		return <ExtendedImage key={img.src} src={img.src} alt={img.alt} fullHeight />;
	});

	return (
		<Container>
			<Stack gap="xl" align="center" maw={800} justify="center">
				<Title order={2} style={{ textAlign: 'center' }}>
					{title}
				</Title>
				<Text style={{ lineHeight: '2' }}>
					For this class, I created an application using vanilla{' '}
					<Text span fw={700}>
						HTML, CSS, and JavaScript
					</Text>
					. I was lucky enough to be Assistant to the Dean at Boston University's School of
					Hospitality Administration during the school's 40th year. This momentous anniversary led
					to the inspiration to host 40 events throughout the school year.{' '}
					<Text span fs="italic">
						In reality, it actually turned out to be closer to 80!
					</Text>{' '}
					In order to keep track of all the students and attendees, I sought out to create a web app
					that would aim to gamify student attendance and track their progress towards attendance
					goals, thus earning them prizes.
					<Space h="lg" /> The biggest challenge was creating a login system and having to teach
					myself{' '}
					<Text span fw={700}>
						PHP and MySQL
					</Text>
					. The professor did not require a database or backend server as part of the requirements,
					but I was determined to make this{' '}
					<Text span fw={700}>
						a full stack application
					</Text>
					. I went with a clean, simple look and feel for the design of each page. <Space h="lg" />
					You can click through stills of the project below.
				</Text>
			</Stack>
			<Space h="xl" />
			<SimpleGrid cols={isXs ? 1 : 5} maw={800}>
				{extendedImages}
			</SimpleGrid>
		</Container>
	);
};

export { EventTracker };
