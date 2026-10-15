import { Stack, Title, Button, Paper } from '@mantine/core';
import { useScrollIntoView } from '@mantine/hooks';
import { Resume } from '@/components';
import { useState } from 'react';

const Bio = () => {
	const [isResumeVisible, setIsResumeVisible] = useState<boolean>(false);

	const { scrollIntoView, targetRef } = useScrollIntoView({
		offset: -10, // optional: additional distance between the nearest edge and element
		duration: 500, // optional: duration of the scroll in ms
	});

	const handleGetResumeClick = () => {
		setIsResumeVisible(true);
		if (isResumeVisible) {
			scrollIntoView();
		}
	};

	return (
		<Stack align="center" gap={50} mt={40}>
			<Title order={2}>Designing with passion, coding with purpose.</Title>

			<Button w={150} onClick={handleGetResumeClick}>
				Get Resume
			</Button>
			{isResumeVisible && (
				<Paper shadow="lg" p="md" maw="auto" ref={targetRef}>
					<Resume filepath="/files/Hannah_Fitzsimmons.pdf" />
				</Paper>
			)}
		</Stack>
	);
};

export { Bio };
