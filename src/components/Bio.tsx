import { Stack, Title, Text, SimpleGrid, Image, Button } from '@mantine/core';
import { Resume } from '@/components';
import { useImageRotator } from '@/hooks';
import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import img1 from '@/assets/whistler.png';
import img2 from '@/assets/aerial_yoga.jpeg';
import img3 from '@/assets/tulum.jpeg';

const first = [img1, img2, img3];
const second = [img2, img3, img1];
const last = [img3, img1, img2];

const Bio = () => {
	const [isResumeVisible, setIsResumeVisible] = useState<boolean>(false);
	const isXs = useOutletContext();
	const left = useImageRotator(first);
	const middle = useImageRotator(second);
	const right = useImageRotator(last);

	return (
		<Stack align="center" gap={50} mt={40} justify={isXs ? 'center' : 'flex-start'}>
			<SimpleGrid cols={5} style={{ left: isXs ? -150 : 0 }} maw={300}>
				<Image src={left} radius={600} h={200} w={200} />
				<Image src={middle} radius={600} h={200} w={200} />
				<Image src={right} radius={600} h={200} w={200} />
			</SimpleGrid>

			<Title order={2} style={{ textAlign: isXs ? 'center' : 'left' }}>
				Designing with passion, coding with purpose.
			</Title>

			<Text style={{ textAlign: 'left' }} maw={800}>
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
				applications. Her journey through retail and hospitality taught her the{' '}
				<Text span fw={700}>
					value of making someone's day better
				</Text>{' '}
				, a principle she carries into work every day. Outside of work, she can be found{' '}
				snowboarding, crocheting amigruumi, exploring new places, and trying new activities with
				friends.
			</Text>

			<Button w={150} onClick={() => setIsResumeVisible(true)}>
				See Resume
			</Button>
			{isResumeVisible && <Resume filepath="/files/HannahFitzsimmons.Resume.pdf" />}
		</Stack>
	);
};

export { Bio };
