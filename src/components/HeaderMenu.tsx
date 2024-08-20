import { Group } from '@mantine/core';
import classes from '@/styles/header.module.scss';

const links = [
	{ label: 'About', link: '/about' },
	{ label: 'Projects', link: '/projects' },
	{ label: 'Contact', link: '/contact' },
];

const HeaderMenu = () => {
	return (
		<Group>
			{links.map((link) => (
				<a
					style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}
					key={link.label}
					href={link.link}
					className={classes.link}
					onClick={(event) => event.preventDefault()}
				>
					{link.label}
				</a>
			))}
		</Group>
	);
};

export { HeaderMenu };
