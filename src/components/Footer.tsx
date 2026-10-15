import { Text } from '@mantine/core';
const Footer = () => {
	return (
		<footer id="contact">
			<Text className="footer-title">
				let us grow{' '}
				<Text span c="moss">
					together
				</Text>
				.
			</Text>
			<form action="mailto:hitzsim@proton.me">
				<button type="submit" className="button">
					CONNECT WITH ME
				</button>
			</form>
		</footer>
	);
};

export { Footer };
