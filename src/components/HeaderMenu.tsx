import { Group, Burger, Stack, Drawer } from '@mantine/core';
import { useMediaQuery, useDisclosure } from '@mantine/hooks';
import { NavLink } from 'react-router-dom';
import '@/styles/header.scss';

const links = [
	{ label: 'Bio', link: '/bio' },
	{ label: 'Projects', link: '/projects' },
	{ label: 'Contact', link: '/contact' },
];

const HeaderMenu = () => {
	const [opened, { toggle }] = useDisclosure();
	const isXs = useMediaQuery('(max-width: 1200px)');
	const navLinks = links.map((link) => (
		<NavLink
			key={link.label}
			to={link.link}
			className={({ isActive }) => (isActive ? 'activeLink' : 'link')}
		>
			{link.label}
		</NavLink>
	));
	return (
		<>
			{isXs ? (
				<>
					<Burger hiddenFrom={'md'} size="sm" onClick={() => toggle()} />
					{opened && (
						<Drawer opened={opened} onClose={toggle}>
							<Stack>{navLinks}</Stack>
						</Drawer>
					)}
				</>
			) : (
				<Group gap={40}>{navLinks}</Group>
			)}
		</>
	);
};

export { HeaderMenu };
