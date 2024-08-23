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
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

const Contact = () => {
	const [isNotificationVisible, setIsNotifcationVisible] = useState<boolean>(false);

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
		emailjs.init('a5m24FlFLLiGb_DHu');
		emailjs
			.send(
				'service_rbwxoxj',
				'template_64zleeo',
				{
					from_name: values.name,
					to_name: 'Hannah',
					message: values.message,
					reply_to: values.email,
				},
				'a5m24FlFLLiGb_DHu'
			)
			.then((response) => {
				console.log('SUCCESS!', response.status, response.text);
				setIsNotifcationVisible(true);
			})
			.catch((err) => {
				console.log('FAILED...', err);
			});
	};
	return (
		<Container>
			<Stack w={400} mt={50}>
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
							<Button type="submit">Submit</Button>
						</Flex>
					</Stack>
				</form>
			</Stack>
			{isNotificationVisible && (
				<Box mt={25} c="green" style={{ borderRadius: '5px', fontWeight: 700 }}>
					Thank you for your message! I'll reply when I see it :)
				</Box>
			)}
		</Container>
	);
};

export { Contact };
