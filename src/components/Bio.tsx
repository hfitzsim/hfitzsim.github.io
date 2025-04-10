import { Stack, Title, Text, Button, Space, Paper } from '@mantine/core';
import { useScrollIntoView } from '@mantine/hooks';
import { Resume, ImageRotator } from '@/components';
import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';

const Bio = () => {
	const [isResumeVisible, setIsResumeVisible] = useState<boolean>(false);
	const isXs = useOutletContext();

	const { scrollIntoView, targetRef } = useScrollIntoView({
		offset: -10, // optional: additional distance between the nearest edge and element
		duration: 500, // optional: duration of the scroll in ms
	});

	const handleGetResumeClick = () => {
		isXs ? window.open('/files/HannahFitzsimmonsResume.pdf', '_blank') : setIsResumeVisible(true);
		if (isResumeVisible) {
			scrollIntoView();
		}
	};

	return (
		<Stack align="center" gap={50} mt={40} justify={isXs ? 'center' : 'flex-start'}>
			<Title order={2} style={{ textAlign: isXs ? 'center' : 'left' }}>
				Designing with passion, coding with purpose.
			</Title>

			<ImageRotator />

			<Text style={{ textAlign: isXs ? 'center' : 'left' }} maw={800}>
				Hannah is a{' '}
				<Text span fw={700}>
					UI/UX developer
				</Text>{' '}
				with a passion for design. She brings a blend of creativity and technical expertise to every
				project. With a Bachelor’s in Operations and Information Management and a Master’s in
				Computer Information Systems, she honed her skills in web app development. She's{' '}
				<Text span fw={700}>
					led the development
				</Text>{' '}
				of innovative mobile and web-based software solutions that enhance operational readiness and
				management capabilities for diverse systems,{' '}
				<Text span fw={700}>
					meeting the needs and expectations
				</Text>{' '}
				of global users. She's crafted wireframes and mockups and translated them into functional
				applications.
				<Space h="md" />
				Her journey through retail and hospitality taught her the{' '}
				<Text span fw={700}>
					value of making someone's day better
				</Text>
				, a principle she carries into work every day. Outside of work, she can be found{' '}
				snowboarding, crocheting amigrumi, exploring new places, and trying new activities with
				friends.
			</Text>

			<Button w={150} onClick={handleGetResumeClick}>
				Get Resume
			</Button>
			{isResumeVisible && (
				<Paper shadow="lg" p="md" maw="auto" ref={targetRef}>
					<Resume filepath="/files/HannahFitzsimmonsResume.pdf" />
				</Paper>
			)}
		</Stack>
	);
};

export { Bio };
