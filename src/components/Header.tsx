import { Group, Title, Text, Stack } from '@mantine/core';
import { NavLink, useNavigate } from 'react-router-dom';

const links = [
	{ label: 'Projects', value: '/projects' },
	{ label: 'Contact', value: '/contact' },
];

interface HeaderProps {
	isXs: boolean | undefined;
}
const Header: React.FC<HeaderProps> = ({ isXs }) => {
	const navigate = useNavigate();

	const navLinks = links.map((link) => {
		return (
			<NavLink
				key={'link' + link.value}
				to={link.value}
				className={({ isActive }) => (isActive ? 'activeLink' : 'link')}
			>
				{link.label}
			</NavLink>
		);
	});

	return (
		<Group justify="space-between" align="center" bg="isabelline">
			{isXs ? (
				<Stack gap={0} style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
					<Text c={'vermillion'} style={{ fontWeight: '900', letterSpacing: '0.45em' }}>
						<span style={{ fontWeight: '900', letterSpacing: '0.45em' }}>HANNAH </span>
					</Text>
					<Text c="vermillion">FITZSIMMONS</Text>
				</Stack>
			) : (
				<Title
					order={1}
					style={{ letterSpacing: '0.5em', cursor: 'pointer' }}
					c={'vermillion'}
					onClick={() => navigate('/')}
				>
					<Text span inherit fw={900}>
						HANNAH{' '}
					</Text>
					<Text span inherit fw={300}>
						FITZSIMMONS
					</Text>
				</Title>
			)}

			<Group gap={40}>{navLinks}</Group>
		</Group>
	);
};

export { Header };
