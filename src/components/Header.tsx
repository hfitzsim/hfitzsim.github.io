import { Group, Title, Text } from '@mantine/core';
import { NavLink, useNavigate } from 'react-router-dom';

const links = [
	{ label: 'Projects', value: '/projects' },
	{ label: 'Contact', value: '/contact' },
];

interface HeaderProps {
	size: boolean | undefined;
}
const Header: React.FC<HeaderProps> = ({ size }) => {
	const navigate = useNavigate();

	const navLinks = links.map((link) => {
		return (
			// if there are no children projects to display
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
			{!size && (
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
