import { Stack, Title, Text, SimpleGrid, Image, Button } from '@mantine/core';
import { Resume } from '@/components';
import { useState } from 'react';

const Bio = () => {
	const [isResumeVisible, setIsResumeVisible] = useState<boolean>(false);
	return (
		<Stack align="center" gap={50} mt={40}>
			<SimpleGrid cols={3}>
				<Image src="./src/assets/images/kyoto.JPG" radius={600} h={200} w={200} />
				<Image src="./src/assets/images/whistler.PNG" radius={600} h={200} w={200} />
				<Image src="./src/assets/images/tulum.JPEG" radius={600} h={200} w={200} />
			</SimpleGrid>

			<Title order={2}>Designing with passion, coding with purpose.</Title>

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
