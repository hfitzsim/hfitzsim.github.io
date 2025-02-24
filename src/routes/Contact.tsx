import {
	Container,
	Box,
	Stack,
	Group,
	Flex,
	Title,
	Button,
	TextInput,
	Textarea,
	Loader,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

const Contact = () => {
	const [isNotificationVisible, setIsNotifcationVisible] = useState<boolean>(false);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const form = useForm({
		mode: 'uncontrolled',
		initialValues: {
			name: '',
			email: '',
			message: '',
		},
		validate: {
			name: (value) => (value.length < 2 ? 'Name must have at least 2 characters' : null),
			email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
			message: (value) => (value.length < 5 ? 'Message must have at least 5 characters' : null),
		},
	});

	const handleSubmit = (values: typeof form.values) => {
		setIsSubmitting(true);
		emailjs.init(import.meta.env.VITE_EMAILJS_PK);
		emailjs
			.send(
				import.meta.env.VITE_EMAILJS_SERVICE,
				import.meta.env.VITE_EMAILJS_TEMPLATE,
				{
					from_name: values.name,
					to_name: 'Hannah',
					message: values.message,
					reply_to: values.email,
				},
				import.meta.env.VITE_EMAILJS_PK
			)
			.then((response) => {
				console.log('SUCCESS!', response.status, response.text);
				setIsNotifcationVisible(true);
			})
			.catch((err) => {
				console.log('FAILED...', err);
			})
			.finally(() => {
				setIsSubmitting(false);
			});
	};
	return (
		<Container>
			<Stack maw={400} mt={50}>
				<Group mb={50}>
					<Button
						variant="outline"
						leftSection={<FontAwesomeIcon icon={faLinkedinIn} />}
						onClick={() => (window.location.href = 'https://www.linkedin.com/in/hfitzsim/')}
					>
						LinkedIn
					</Button>
					<Button
						leftSection={<FontAwesomeIcon icon={faGithub} />}
						onClick={() => (window.location.href = 'https://github.com/hfitzsim')}
					>
						GitHub
					</Button>
				</Group>
				<Title order={4}>Send me a message:</Title>
				<form onSubmit={form.onSubmit(handleSubmit)}>
					<Stack gap="xs">
						<TextInput label="Name" {...form.getInputProps('name')} key={form.key('name')} />
						<TextInput label="Email" {...form.getInputProps('email')} key={form.key('email')} />
						<Textarea
							label="Message"
							{...form.getInputProps('message')}
							key={form.key('message')}
						/>
						<Flex justify="flex-end">
							<Button type="submit" disabled={isSubmitting}>
								{isSubmitting ? <Loader type="dots" /> : 'Submit'}
							</Button>
						</Flex>
					</Stack>
				</form>
			</Stack>
			{isNotificationVisible && (
				<Box mt={25} c="jet" style={{ borderRadius: '5px', fontWeight: 700 }}>
					Thank you for your message!
				</Box>
			)}
		</Container>
	);
};

export { Contact };
