import { Image, Flex, Anchor, Button, Stack, Title, Text, SimpleGrid } from '@mantine/core';
import addGoal from '@/assets/ygt_addGoal.png';
import buttonsWhenSelected from '@/assets/ygt_buttonsWhenSelected.png';
import editDeleteGoal from '@/assets/ygt_editDeleteGoal.png';
import exampleGoal from '@/assets/ygt_exampleGoal.png';
import goals from '@/assets/ygt_goals.png';
import setProgress from '@/assets/ygt_setProgress.png';
import signin from '@/assets/ygt_signin.png';
import signinValidation from '@/assets/ygt_signinValidation.png';
import signup from '@/assets/ygt_signup.png';
import signupValidation from '@/assets/ygt_signupValidation.png';
import specifyResetGoal from '@/assets/ygt_specifyResetGoal.png';
import userConfirmationModal from '@/assets/ygt_userConfirmationModal.png';
import { useMediaQuery } from '@mantine/hooks';

interface ProjectProps {
	title: string;
}

const YouGotThis = ({ title }: ProjectProps) => {
	const isSmall = useMediaQuery('(max-width: 36em)');
	const isMedium = useMediaQuery('(max-width: 48em)');

	const columns = isSmall ? 1 : isMedium ? 2 : 3;

	return (
		<Stack gap="sm" align="center">
			<Title order={2} style={{ textAlign: 'center' }}>
				{title}
			</Title>{' '}
			<Flex justify="center" m={20}>
				<Anchor href="https://hfitzsim.dev/ygt/" target="_blank">
					<Button>See Live Demo</Button>
				</Anchor>
			</Flex>
			<Text maw={800}>
				This is a simple personal goal-tracker application. YGT stands for "You Got This" and after
				I was frustrated with the existing offerings on the app store, with everything requiring a
				paid subscription, I decided to build my own responsive web app that meets my needs, for
				now. Currently this offers an uncomplicated interface and leverages supabase, mantine, react
				+ typescript. Users can create goals, edit goals (increment, decrement, specify progress),
				reset them, and delete them. I plan to continue building on this app with calendar
				integration and progress notes for any achievements that deserve highlight.
			</Text>
			<SimpleGrid cols={columns} spacing="sm" mt={30}>
				<Image src={signin} />
				<Image src={signinValidation} />
				<Image src={signup} />
				<Image src={signupValidation} />
				<Image src={goals} />
				<Image src={addGoal} />
				<Image src={buttonsWhenSelected} />
				<Image src={editDeleteGoal} />
				<Image src={userConfirmationModal} />
				<Image src={exampleGoal} />
				<Image src={specifyResetGoal} />
				<Image src={setProgress} />
			</SimpleGrid>
		</Stack>
	);
};

export { YouGotThis };
