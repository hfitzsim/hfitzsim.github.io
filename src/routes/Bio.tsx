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

			<Text style={{ textAlign: 'center' }}>
				A UI/UX developer with a strong passion for user experience design, I bring a blend of
				creativity and technical expertise to every project. With a Bachelor’s in Operations and
				Information Management and a Master’s in Computer Information Systems, I’ve honed my skills
				in web app development. My journey through retail and hospitality taught me the value of
				making someone's day better, a principle I carry into my work every day. Outside of work, I
				love snowboarding, crocheting amigurumi, and exploring new places and restaurants with
				friends.
			</Text>

			<Button w={150} onClick={() => setIsResumeVisible(true)}>
				Get Resume
			</Button>
			{isResumeVisible && <Resume filepath="/files/HannahFitzsimmons.Resume.pdf" />}
		</Stack>
	);
};

export { Bio };
