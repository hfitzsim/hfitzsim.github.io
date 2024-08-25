import { Group, Title, Burger, Stack, Drawer } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { HeaderMenu } from '@/components';
import { NavLink, useNavigate } from 'react-router-dom';
import projects from '@/assets/data/projects.json';
import '@/styles/header.scss';

const links = [
	{ label: 'Bio', value: '/bio' },
	{ label: 'Projects', value: '/projects' },
	{ label: 'Contact', value: '/contact' },
];

interface HeaderProps {
	size: boolean | undefined;
}
const Header: React.FC<HeaderProps> = ({ size }) => {
	const navigate = useNavigate();
	const [opened, { toggle, close }] = useDisclosure();

	// add projects to Projects link as children
	if (links[1].label === 'Projects' && !links[1].hasOwnProperty('children')) {
		links[1].children = projects.map((project) => ({
			label: project.title,
			value: `/projects/${project.id}`,
		}));
	}

	const navLinks = links.map((link) => {
		if (link.hasOwnProperty('children')) {
			return <HeaderMenu data={link} onClick={close} />;
		}
		return (
			<NavLink
				key={'link' + link.value}
				to={link.value}
				className={({ isActive }) => (isActive ? 'activeLink' : 'link')}
				onClick={() => toggle()}
			>
				{link.label}
			</NavLink>
		);
	});

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
