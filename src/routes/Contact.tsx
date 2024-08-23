import { Stack, Group, Flex, Title, Button, TextInput, Textarea } from '@mantine/core';
import { useForm } from '@mantine/form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
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
	return (
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
			<form>
				<Stack gap="xs">
					<TextInput label="Name" {...form.getInputProps('name')} key={form.key('name')} />
					<TextInput label="Email" {...form.getInputProps('email')} key={form.key('email')} />
					<Textarea label="Message" {...form.getInputProps('message')} key={form.key('message')} />
					<Flex justify="flex-end">
						<Button type="submit">Submit</Button>
					</Flex>
				</Stack>
			</form>
		</Stack>
	);
};

export { Contact };
