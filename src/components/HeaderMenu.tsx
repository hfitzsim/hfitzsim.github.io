import { Button, Collapse, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useOutletContext } from 'react-router-dom';

interface HeaderMenuProps {
	data: any;
	onClick: () => void;
}

const HeaderMenu: React.FC<HeaderMenuProps> = ({ data, onClick }) => {
	const [opened, { toggle }] = useDisclosure(false);
	const isXs = useOutletContext();

	return (
		<div style={{ position: 'relative' }}>
			<Button
				variant="transparent"
				justify="space-between"
				rightSection={
					isXs ? (
						<FontAwesomeIcon
							icon={faChevronRight}
							style={{ transform: opened ? 'rotate(-90deg)' : 'none' }}
						/>
					) : null
				}
				size="xl"
				p={0}
				fw={600}
				onClick={toggle}
			>
				{data.label}
			</Button>
			<Collapse
				in={opened}
				p={10}
				miw={200}
				maw={500}
				style={{
					position: isXs ? 'relative' : 'absolute',
					zIndex: 1000,
					backgroundColor: 'white',
					border: '1px solid #333333',
				}}
			>
				<Stack ml={isXs ? 30 : 0} mt={-10} style={{ width: '100%' }}>
					{data.children.map((child: any) => (
						<NavLink
							key={'link' + child.value}
							to={child.value}
							className={({ isActive }) => (isActive ? 'activeLink' : 'link')}
							onClick={onClick}
						>
							{child.label}
						</NavLink>
					))}
				</Stack>
			</Collapse>
		</div>
	);
};

export { HeaderMenu };
