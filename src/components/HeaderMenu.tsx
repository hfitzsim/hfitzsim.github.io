import { Group } from '@mantine/core';
import { NavLink } from 'react-router-dom';
import '@/styles/header.scss';

const links = [
	{ label: 'Bio', link: '/bio' },
	{ label: 'Projects', link: '/projects' },
	{ label: 'Contact', link: '/contact' },
];

const HeaderMenu = () => {
	return (
		<Group gap={40}>
			{links.map((link) => (
				<NavLink
					key={link.label}
					to={link.link}
					className={({ isActive }) => (isActive ? 'activeLink' : 'link')}
				>
					{link.label}
				</NavLink>
			))}
		</Group>
	);
};

export { HeaderMenu };
