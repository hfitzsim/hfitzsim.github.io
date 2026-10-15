import { Group, Text } from '@mantine/core';

interface HeaderProps {
	nav: (view: string) => void;
}

const anchors = [
	{ label: 'ABOUT', href: '#about' },
	{ label: 'ARCHIVES', href: '#projects' },
	{ label: 'PHILOSOPHY', href: '#philosophy' },
	{ label: 'CONTACT', href: '#contact' },
];

const Header = ({ nav }: HeaderProps) => {
	const navLinks = anchors.map((link) => {
		return (
			<a href={link.href} className="link">
				{link.label}
			</a>
		);
	});

	return (
		<Group justify="space-between" align="center" style={{ margin: '10px 50px' }}>
			<Text
				style={{ letterSpacing: '0.5em', cursor: 'pointer', fontWeight: '200' }}
				onClick={() => nav('home')}
			>
				HF // PORTFOLIO
			</Text>

			<Group gap={40}>{navLinks}</Group>
		</Group>
	);
};

export { Header };
