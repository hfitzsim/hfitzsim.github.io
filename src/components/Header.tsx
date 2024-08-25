import { Group, Title, Burger, Stack, Drawer } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { NavLink, useNavigate } from 'react-router-dom';
import '@/styles/header.scss';

const links = [
	{ label: 'Bio', link: '/bio' },
	{ label: 'Projects', link: '/projects' },
	{ label: 'Contact', link: '/contact' },
];

interface HeaderProps {
	size: boolean | undefined;
}

const Header: React.FC<HeaderProps> = ({ size }) => {
	const navigate = useNavigate();
	const [opened, { toggle }] = useDisclosure();
	const navLinks = links.map((link) => (
		<NavLink
			key={link.label}
			to={link.link}
			className={({ isActive }) => (isActive ? 'activeLink' : 'link')}
			onClick={() => toggle()}
		>
			{link.label}
		</NavLink>
	));
	return (
		<Group justify="space-between" align="center">
			{!size && (
				<Title style={{ letterSpacing: '0.5em', cursor: 'pointer' }} onClick={() => navigate('/')}>
					HANNAH FITZSIMMONS
				</Title>
			)}

			{size ? (
				<>
					<Burger hiddenFrom={'md'} size="sm" onClick={() => toggle()} />
					{opened && (
						<Drawer opened={opened} onClose={toggle}>
							<Stack>
								<NavLink
									key="home"
									to={'/'}
									className={({ isActive }) => (isActive ? 'activeLink' : 'link')}
									onClick={() => toggle()}
								>
									Home
								</NavLink>
								{navLinks}
							</Stack>
						</Drawer>
					)}
				</>
			) : (
				<Group gap={40}>{navLinks}</Group>
			)}
		</Group>
	);
};

export { Header };
